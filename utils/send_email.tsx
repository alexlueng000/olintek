
import { ContactFormData, SendContactEmailResponse } from '@/components/contact';
import { ApplyFormData, SendApplyEmailResponse } from '@/components/apply';


export function sendApplyEmail(data: ApplyFormData): Promise<SendApplyEmailResponse>  {

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
    return res.json() as Promise<SendApplyEmailResponse>;
  })
  .catch((err) => {
    throw new Error(err.message || 'Error sending email');
  });
}

export function sendContactEmail(data: ContactFormData): Promise<SendContactEmailResponse>  {

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