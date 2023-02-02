import Link from "next/link";
function PostList({ Posts }) {
	return (
		<>
			<h1>List of Posts</h1>
			{Posts.map((post) => {
				return (
					<div key={post.id}>
						<Link href={`posts/${post.id}`} passHref>
							<h2>
								{post.id} {post.title}
							</h2>
							<hr />
						</Link>
					</div>
				);
			})}
		</>
	);
}

export default PostList;

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();

	return {
		props: {
			Posts: data.slice(0, 3),
		},
	};
}
