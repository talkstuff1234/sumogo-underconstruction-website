import Footer from "@/components/public/layout/Footer";
import Navbar from "@/components/public/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
}
