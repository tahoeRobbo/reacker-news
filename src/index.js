import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPostsGridWrapper from './components/MainPostsGridWrapper'
import Nav from './components/Nav'

function App () {
 return (
   <div>
     <Router>
       <Nav />
       <Route exact path='/' render={() => <MainPostsGridWrapper type='top'/>} />
       <Route exact path='/new' render={() => <MainPostsGridWrapper type='new'/>} />
     </Router>
   </div>
 )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
