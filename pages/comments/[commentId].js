import { comments } from "@/data/comments";
function Comment({ comment }) {
	return (
		<div>
			{comment.id} {comment.text}
		</div>
	);
}
export default Comment;

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { commentsId: "1" } },
			{ params: { commentsId: "2" } },
			{ params: { commentsId: "3" } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const { commentId } = params;

	const comment = comments.fing(
		(comment) => comment.id === parseInt(commentId)
	);
	console.log(comment);

	/*
			Don't do this
			const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
			const data = await response.json()
		*/

	return {
		props: {
			comment,
		},
	};
}
