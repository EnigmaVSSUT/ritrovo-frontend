import React from "react";
import { useRouter } from 'next/router'
import DefaultLayout from '../components/layout/DefaultLayout';
import AddIcon from '@mui/icons-material/Add';


const PostCreate = () => {
	const router = useRouter();
	const app = router.query.page;
	return (
		<>
		CreatePost
		</>

	);
}
PostCreate.getLayout = (app) => <DefaultLayout>{app}</DefaultLayout>;

export default PostCreate;