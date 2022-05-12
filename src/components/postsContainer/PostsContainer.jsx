import React, { useState, useEffect } from 'react'
import Post from './Post'
const PostsContainer = ({ posts }) => {

    return (
        <ul>
            {posts?.map(post => <Post post={post} />)}
        </ul>
    )
}
export default PostsContainer