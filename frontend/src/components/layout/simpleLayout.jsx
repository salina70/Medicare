import Header from "./header";
import Footer from "./footer";

const SimpleLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SimpleLayout;
