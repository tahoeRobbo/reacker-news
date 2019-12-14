import React from 'react'
import queryString from 'query-string'

function StoryOrCommentPost ({ location }) {
 const { id } = queryString.parse(location.search)

 return (
  <div>
   {id}
  </div>
 )
}

export default StoryOrCommentPost
