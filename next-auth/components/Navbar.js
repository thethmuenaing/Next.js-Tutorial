import Link from "next/link";

function Navbar() {
	return (
		<nav className="header">
			<h1 className="logo">
				<a href="#">NextAuth</a>
			</h1>
			<ul className={`main-nav`}>
				<li>
					<Link href="/">
						<>Home</>
					</Link>
				</li>
				<li>
					<Link href="/dashboard">
						<>Dashboard</>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<>Blog</>
					</Link>
				</li>

				<li>
					<Link href="#">
						<div
							onClick={(e) => {
								e.preventDefault();
								signIn("github");
							}}
						>
							Sign In
						</div>
					</Link>
				</li>
				<li>
					<Link href="#">
						<div
							onClick={(e) => {
								e.preventDefault();
								signOut();
							}}
						>
							Sign Out
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
