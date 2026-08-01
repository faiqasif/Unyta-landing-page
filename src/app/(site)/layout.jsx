import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/app/_components/Footer";

export default function SiteLayout({ children }) {
  return (
    <SmoothScroll>
      <Navbar />
      {children}
      <Footer />
    </SmoothScroll>
  );
}
