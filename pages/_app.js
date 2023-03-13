import Head from "next/head";

import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

import "styles/layout.css";
import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: "#355C7D",
	},
};

export default function App({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<>
			<Head>
				<title>Codevolution</title>
				<meta name="description" content="Awesome YouTube channel" />
			</Head>
			<ThemeProvider theme={theme}>
				<Header />

				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}
