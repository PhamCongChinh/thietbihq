import Head from 'next/head'
import Layout from '../components/Layout'
const Home = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Home</h1>
			<h2>The value of customKey is: {process.env.TITLE}</h2>
		</div>
	)
}

Home.getLayout = function getLayout(page){
	return (
		<Layout>{page}</Layout>
	)
}
export default Home