import { ENDPOINTS } from '@/lib/config';

const form = document.getElementById('delete-account-form') as HTMLFormElement | null;
const statusEl = document.getElementById('form-status') as HTMLElement | null;
const submitBtn = form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;

function setStatus(message: string, type: 'info' | 'error' | 'success' = 'info') {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = 'text-sm font-medium mt-2 ' + (type === 'error' ? 'text-red-600' : type === 'success' ? 'text-green-600' : 'text-gray-700');
}

function setLoading(isLoading: boolean) {
  if (!submitBtn) return;
  submitBtn.disabled = isLoading;
  submitBtn.classList.toggle('opacity-60', isLoading);
  submitBtn.classList.toggle('cursor-not-allowed', isLoading);
  const span = submitBtn.querySelector('span');
  if (span) span.textContent = isLoading ? 'Enviando...' : 'Enviar solicitud';
}

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  setStatus('Enviando solicitud...', 'info');
  setLoading(true);

  const formData = new FormData(form);
  const email = formData.get('email')?.toString().trim();
  const publicId = formData.get('publicId')?.toString().trim();
  const reason = formData.get('reason')?.toString().trim();

  if (!email || !publicId) {
    setStatus('Por favor completa los campos requeridos (correo y public ID).', 'error');
    setLoading(false);
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setStatus('El correo electrónico no es válido.', 'error');
    setLoading(false);
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const resp = await fetch(ENDPOINTS.requestAccountDeletion, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, publicId, reason: reason || undefined }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    let data: any = {};
    try { data = await resp.json(); } catch {}

    if (!resp.ok || !data.success) {
      setStatus(data.message || `Error (${resp.status}) al enviar la solicitud.`, 'error');
      setLoading(false);
      return;
    }

    setStatus(data.message || 'Solicitud enviada correctamente.', 'success');
    form.reset();
  } catch (err: any) {
    const aborted = err?.name === 'AbortError';
    setStatus(aborted ? 'La solicitud tardó demasiado (timeout). Intenta otra vez.' : 'Error de red al enviar la solicitud. Verifica tu conexión.', 'error');
    console.error('Error enviando solicitud de eliminación', err);
  } finally {
    setLoading(false);
  }
});
