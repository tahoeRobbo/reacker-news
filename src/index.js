import React from 'react'
import ReactDOM from 'react-dom'

import PostsGrid from './components/PostsGrid'

function App () {
 return (
   <div>
     <PostsGrid/>
   </div>
 )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
