import Header from "./header";

export default function Layout({ children, loginStatus }) {
    return (
        <div>
            <Header loginStatus={loginStatus}/>
            <main>{ children }</main>
        </div>
    );
}