import Footer from "../Footer";
import Navbar from "../NavBar";

function Layout({ children }) {
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="contentWrap">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
