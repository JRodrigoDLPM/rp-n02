import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { proveedorNav } from "@/lib/nav-config";

export default function ProveedorPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout nav={proveedorNav} productName="Proveedor" badge="Demo">
      {children}
    </DashboardLayout>
  );
}
