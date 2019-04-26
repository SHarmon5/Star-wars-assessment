import React from 'react';
import { Container, } from 'semantic-ui-react';
import { Route, Switch,} from 'react-router-dom'
import People from './components/People'
import Planet from './components/Planet'
import Planets from './components/Planets'
import Person from './components/Person'



class App extends React.Component {

  render() {
    return (
      <>
        <Container>
            <Route exact path="/People" component={People} />
            <Route exact path="/Person" component={Person} />
            <Route exact path="/Planet" component={Planet} />
            <Route exact path="/Planets" component={Planets} />
        </Container>
      </>
    );
  }
}

export default App;
