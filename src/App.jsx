import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Comics from "./components/Comics";
import Headerlinks from "./components/links/Headerlinks.jsx";

export default function () {
  return (
    <>
      <Header headerlinks={Headerlinks} />
      <Main comicsLink={Comics} />
      <Footer />
    </>
  );
}
