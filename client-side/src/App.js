import React from 'react';
import {BrowserRouter as Router, Route,Switch,Link,useParams} from 'react-router-dom'
import {Container,Row} from 'reactstrap';
import Home from './Vote/home'
import Check from './Vote/check'
import Navbar from './Vote/navbar';
import VoteCreator from './Vote/voteCreator'


// import 'bootstrap/dist/css/bootstrap.css';
function App(){
  return (
        <Router>
            <Navbar/>
            <Container>
                  <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route exact path="/createVote">
                      <VoteCreator />
                    </Route>
                    <Route path="/check">
                      <Check/>
                    </Route>
                  </Switch>
            </Container>
        </Router>
  );
}


export default App;
