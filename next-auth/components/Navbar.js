import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function Navbar() {
	const [session, loading] = useSession();
	// console.log({ session, loading });
	return (
		<nav className="header">
			<h1 className="logo">
				<a href="#">NextAuth</a>
			</h1>
			{/* ${!session && loading ? "loading" : "loaded"} */}
			<ul className={`main-nav`}>
				<li>
					<Link href="/">Home</Link>
				</li>
				{session && !loading && (
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				)}
				<li>
					<Link href="/blog">Blog</Link>
				</li>

				{!session && !loading && (
					<li>
						<Link
							href="/api/auth/signin"
							onClick={(e) => {
								e.preventDefault();
								signIn("github");
							}}
						>
							Sign In
						</Link>
					</li>
				)}

				{session && (
					<li>
						<Link
							href="/api/auth/signout"
							onClick={(e) => {
								e.preventDefault();
								signOut();
							}}
						>
							Sign Out
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
