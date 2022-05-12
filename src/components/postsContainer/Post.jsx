const Post = ({ post }) => {
    return (
        <>
            <li key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </li>
            <hr/>
        </>
    )
} 
export default Post