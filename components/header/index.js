export default function Header({ loginStatus }) {
    return (
        <header>
            <h1>Logo</h1>
            { loginStatus === true ? (
                <>
                    <h1>login status true</h1>
                </>                
            ) : (
                <>
                    <h1>login status false</h1>
                </>
            )}
        </header>
    );
}