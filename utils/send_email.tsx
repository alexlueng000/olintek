
import { FormData } from '@/components/contact';
import { SendContactEmailResponse } from '@/components/contact';

export function sendEmail(data: FormData): Promise<SendContactEmailResponse>  {

  const apiEndpoint = '/api/emails';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<SendContactEmailResponse>;
  })
  .catch((err) => {
    throw new Error(err.message || 'Error sending email');
  });
}