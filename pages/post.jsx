import Postdetails from "../components/post/postdetails";
import DefaultLayout from '../components/layout/DefaultLayout';
const Post = () => {
    return ( 
        <Postdetails />
     );
}
Post.getLayout = (app) => <DefaultLayout>{app}</DefaultLayout>;
export default Post;