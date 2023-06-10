import DefaultLayout from "../components/layout/DefaultLayout";
import HomePage from "../components/Home/HomePage"

const Home = () => {
	return (
	<>
    Clubs
    </>

	);
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
