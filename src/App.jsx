import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Comics from "./components/Comics";

export default function () {
  return (
    <>
      <Header />
      <Main comicsLink={Comics} />
      <Footer />
    </>
  );
}
