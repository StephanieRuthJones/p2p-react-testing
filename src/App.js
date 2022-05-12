import { useState, useEffect } from 'react'
import './App.css'
import { Loading } from './components/loading/Loading'
import PostsContainer from './components/postsContainer/PostsContainer.jsx'

function App() {
  const [posts, setPosts] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postData = await response.json()
        setPosts(postData) 
    }
    catch (error) {
        console.error('error', error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <h1>Peer to Peer React Testing Library</h1>
      {isLoading
        ? <Loading />
        : <PostsContainer posts={posts} />}
    </div>
  );
}

export default App
