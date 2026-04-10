import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { clienteNav } from "@/lib/nav-config";

export default function ClientePanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout nav={clienteNav} productName="Cliente" badge="Demo">
      {children}
    </DashboardLayout>
  );
}
