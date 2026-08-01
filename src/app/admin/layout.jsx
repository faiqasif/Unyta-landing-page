import { AdminAuthProvider } from "./_components/AdminAuthProvider";
import { AdminChrome } from "./_components/AdminChrome";

export const metadata = {
  title: "Unyta Admin",
  description: "Internal dashboard for Unyta applications and demo requests.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <AdminAuthProvider>
      <AdminChrome>{children}</AdminChrome>
    </AdminAuthProvider>
  );
}
