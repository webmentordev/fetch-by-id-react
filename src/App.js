import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/posts' exact component={Posts}/>
        <Route path='/post/:pid' component={Post}/>
      </Switch>
    </Router>
  );
}


const Home  = () =>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
export default App;
