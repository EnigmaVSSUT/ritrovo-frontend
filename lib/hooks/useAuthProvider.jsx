import { SessionProvider } from 'next-auth/react'

export const useAuthProvider = ({Component, pageProps}) => (
	<SessionProvider>
		<Component {...pageProps} />
	</SessionProvider>
)
