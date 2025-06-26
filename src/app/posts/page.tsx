
import { fetchPostData } from "../../services";

const Posts = async () => {

    const PostsData = await fetchPostData()

    console.log(PostsData)

    return (
        <>
            <h1>Posts</h1>
        </>
    )
}

export default Posts