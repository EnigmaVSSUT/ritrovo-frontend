import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page)

	if (Component.authRequired) {
    // TODO implement auth logic
	}

	return getLayout(<Component {...pageProps} />)
}

export default MyApp
