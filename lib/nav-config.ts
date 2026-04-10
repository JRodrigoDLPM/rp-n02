export const proveedorNav = [
  { href: "/proveedor", label: "Resumen" },
  { href: "/proveedor/perfil", label: "Perfil" },
  { href: "/proveedor/servicios", label: "Servicios" },
  { href: "/proveedor/calendario", label: "Calendario" },
  { href: "/proveedor/videollamadas", label: "Videollamadas" },
  { href: "/proveedor/mensajes", label: "Mensajes" },
  { href: "/proveedor/historial", label: "Historial" },
  { href: "/proveedor/pagos", label: "Pagos" },
  { href: "/proveedor/reservaciones", label: "Reservaciones" },
] as const;

export const clienteNav = [
  { href: "/cliente", label: "Inicio" },
  { href: "/cliente/busqueda", label: "Búsqueda" },
  { href: "/cliente/contratacion", label: "Contratación" },
  { href: "/cliente/mensajes", label: "Mensajes" },
  { href: "/cliente/historial", label: "Historial" },
  { href: "/cliente/perfil", label: "Perfil" },
] as const;

export const adminNav = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/proveedores", label: "Proveedores" },
  { href: "/admin/clientes", label: "Clientes" },
  { href: "/admin/servicios", label: "Servicios" },
  { href: "/admin/pagos", label: "Pagos" },
  { href: "/admin/reportes", label: "Reportes" },
  { href: "/admin/configuracion", label: "Configuración" },
  { href: "/admin/usuarios", label: "Usuarios admin" },
] as const;
