
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import NotFound from './NotFound'
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';



function App() {
  return ( 
    <Router>

<div className="App">
      <Navbar/>
     <div className="content">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Create' component={Create}/>
      
      <Route path='/blogs/:id' component={BlogDetails}/>
<Route path="*">
  <NotFound></NotFound>
  </Route>   
      </Switch>
      
    
     </div>
    </div>
    </Router>
 


  
  );
}

export default App;
