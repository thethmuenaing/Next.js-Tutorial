import Link from "next/link";
import { useRouter } from "next/router";
function ProductDetail() {
	const router = useRouter();
	const productId = router.query.productId;
	return (
		<div>
			<h1>Details about product {productId}</h1>
			<Link href="/">Home</Link>
		</div>
	);
}
export default ProductDetail;
