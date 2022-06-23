import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import CreateMovie from "./CreateMovie";
import Filenotfound from "./Filenotfound";
import Home from './Home';
import MovieDetails from "./MovieDetails";
import Navbar from './Navbar';

function App() {



  return (
    <Router>
    <div className="App">
      <Navbar/>
      

        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>

          <Route path="/Create">
            <CreateMovie/>
          </Route>

        <Route path="/movie:id">
          
           <MovieDetails/>
        </Route>


        <Route path="*">
          <Filenotfound/>
        </Route>

        </Switch>
        

    </div>
    </Router>
  );
}

export default App;
