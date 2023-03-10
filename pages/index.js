import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
	const router = useRouter();
	const handleClick = () => {
		console.log("Placing your order");
		router.push("/product");
	};
	return (
		<div>
			<h1>Home Page</h1>

			<Link href="/about">About</Link>
			<br />

			<Link href="/blog">Blog</Link>
			<br />
			<Link href="/product">Product</Link>
			<br />

			<Link href="/users">Users</Link>
			<br />
			<Link href="/posts">Posts</Link>
			<br />
			<button onClick={handleClick}>Place Order</button>
		</div>
	);
}
export default Home;
