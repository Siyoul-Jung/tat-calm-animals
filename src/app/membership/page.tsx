// src/app/membership/page.tsx
import MembershipClient from './MembershipClient';

export const unstable_instant = { 
  prefetch: 'static',
  unstable_disableValidation: true 
};

export default function MembershipPage() {
  return <MembershipClient />;
}
