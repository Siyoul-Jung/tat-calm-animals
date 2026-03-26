// src/app/dashboard/page.tsx
import DashboardClient from './DashboardClient';

export const unstable_instant = { 
  prefetch: 'static',
  unstable_disableValidation: true 
};

export default function DashboardPage() {
  return <DashboardClient />;
}
