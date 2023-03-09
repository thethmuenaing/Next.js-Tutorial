// function NewArticleList({ articles }) {
// 	return (
// 		<>
// 			<h1>List of News Articles</h1>
// 			{articles.map((article) => {
// 				return (
// 					<div key={article.id}>
// 						<h2>
// 							{article.id} {article.title} | {article.category}
// 						</h2>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// }
// export default NewArticleList;

// export async function getStaticProps() {
// 	const response = await fetch("http://localhost:4000/news");
// 	const data = await response.json();

// 	return {
// 		props: {
// 			articles: data,
// 		},
// 	};
// }

function News({ data }) {
	return <h1 className="content">{data}</h1>;
}

export default News;

export async function getStaticProps(context) {
	console.log("Running getStaticProps ", context.previewData);
	return {
		props: {
			data: context.preview
				? "List of draft articles"
				: "List of poblished articles",
		},
	};
}
