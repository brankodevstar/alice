import Layout from "../components/layout";
import Content from "../components/content";
import SearchBox from "../components/searchBox";
import Footer from "../components/footer";

const loginStatus = false;

export default function Home() {
  return (
    <Layout loginStatus={loginStatus}>
      {/* <Content loginStatus={loginStatus}></Content>
      <SearchBox searchKey={searchKey}></SearchBox>
      <Footer resultData={[]}></Footer> */}
    </Layout>
  )
}