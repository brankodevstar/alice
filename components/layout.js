import Header from "./header";
import Footer from "./footer";
import SearchBox from "./search-box";

export default function Layout({ children, loginStatus }) {
  return (
    <div>
      <Header loginStatus={loginStatus} />
      {children}
      <SearchBox />
      <Footer loginStatus={loginStatus} />
    </div>
  );
}
