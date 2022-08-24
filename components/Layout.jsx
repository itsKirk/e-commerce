import Head from "next/head";
import Link from "next/link";
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className="flex h-12 justify-between shadow-md px-4 py-2">
                        <Link href='/'>
                            <a className="text-lg font-bold">JasNat</a>
                        </Link>
                        <div>
                            <Link href='/cart'>
                                <a className="p-2">Cart</a>
                            </Link>
                            <Link href='/login'>
                                <a className="p-2">Login</a>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">
                    {children}
                </main>
                <footer className="flex justify-center items-center h-10 shadow-inner">
                    <p>
                        Copyright {new Date().getFullYear()} JasNat Wares
                    </p>
                </footer>
            </div>
        </>
    );
}

export default Layout;