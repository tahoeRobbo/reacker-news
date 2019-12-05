import React from 'react'
import ReactDOM from 'react-dom'

import {
  fetchComments,
  fetchInitialPosts,
  fetchPosts,
  fetchUser
} from './utils/api'

function App () {
  function handleFetchUser() {
    fetchUser('srhngpr')
      .then((user) => {
        console.log(user)
        fetchComments(user.submitted)
          .then((comments) => console.log('comments', comments))
        fetchPosts(user.submitted)
          .then((posts) => console.log('posts', posts))
      })
  }
 return (
   <div>
     <button onClick={fetchInitialPosts}>log new posts</button>
     <button onClick={handleFetchUser}>log srhngpr</button>
   </div>
 )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
