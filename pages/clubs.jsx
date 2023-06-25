import DefaultLayout from "../components/layout/DefaultLayout";
import ClubList from "./../lib/data/clubs";
import { ImageList, ImageListItem, ImageListItemBar, Box } from "@mui/material";

const Home = () => {
	return (
		<ImageList sx={{ padding: "40px" }} gap={50}>
			{ClubList.map((item) => (
				<ImageListItem key={item.img}>
					<Box 
					component={"img"}
						src={`/${item.img}?w=248&fit=crop&auto=format`}
						srcSet={`/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
						alt={item.name}
						loading="lazy"
						layout="fill"
					/>
					<ImageListItemBar
						title={item.name}
						sx={{ borderRadius: "15px" }}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
