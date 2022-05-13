import { useState, useEffect } from 'react'
import './App.css'
import PostsContainer from './components/postsContainer/PostsContainer.jsx'

function App() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postData = await response.json()
        setPosts(postData) 
    }
    catch (error) {
        console.error('error', error)
    }
  }

  return (
    <div className="App">
      <h1>Peer to Peer React Testing Library</h1>
      {!posts?.length 
        ? <button onClick={fetchPosts}>Get Posts</button>
        : <PostsContainer posts={posts} />}
    </div>
  );
}

export default App
