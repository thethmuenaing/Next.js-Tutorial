import Footer from "../components/Footer";

import styles from "../styles/About.module.scss";
function About() {
	return (
		<div className="content">
			<button className="btn btn-primary">Primary</button>
			<div className={styles.highlightscss}>About Page</div>
		</div>
	);
}
export default About;

About.getLayout = function PageLayout(page) {
	return (
		<>
			{page}
			<Footer />
		</>
	);
};
