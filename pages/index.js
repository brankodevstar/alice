import Layout from "../components/layout";

const loginStatus = false;

export default function Home() {
  return (
    <Layout loginStatus={loginStatus}>
      <h1>BlaBla</h1>
    </Layout>
  );
}
