import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { adminNav } from "@/lib/nav-config";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout nav={adminNav} productName="Administración" badge="Admin">
      {children}
    </DashboardLayout>
  );
}
