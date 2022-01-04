import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <div className="logo">NextJS Test</div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About us</Link>
                <Link href="/users/">Users</Link>
            </nav>
        </header>
    )
}

export default Navbar