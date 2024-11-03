import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
     <div className="min-h-screen"> {children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
