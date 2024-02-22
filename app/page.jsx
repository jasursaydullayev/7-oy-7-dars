import Footer from "./footer/page";
import Main from "./main/page";
import MainFooter from "./mainfooter/page";
import Navbar from "./navbar/page";

const page = () => {
  return (
    <div className="h-full bg-bg-color">
      <Navbar />
      <Main />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default page;
