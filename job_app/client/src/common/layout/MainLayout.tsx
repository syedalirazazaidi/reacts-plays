import Footer from "./Footer";
import Navbar from "./Navbar";

type MainLayouProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayouProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
