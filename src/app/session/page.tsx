// src/app/session/page.tsx
import SessionClient from './SessionClient';

export const unstable_instant = { 
  prefetch: 'static',
  unstable_disableValidation: true 
};

export default function SessionPage() {
  return <SessionClient />;
}
