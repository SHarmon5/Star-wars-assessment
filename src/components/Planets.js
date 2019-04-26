import React from 'react';
import { Table, Header, Container, Modal, Button,  } from 'semantic-ui-react';
import Planet from './Planet'
import axios from 'axios';

class Planets extends React.Component {
  state = { planets: [], };

  componentDidMount() {
    axios.get(`https://swapi.co/api/planets`)
      .then( res => this.setState({ planets: res.data.results }) )
  }

  render() {
    const { planets } = this.state
    return (
      <>
    
        <Container>
          <br />
          <Header>Planets</Header>
          <Table celled style={{ position: "relative", marginBottom: "5em" }}>
           

            <Table.Body>
              {planets.map( (planet, index) => {
                  return (
                <Table.Row key={index}>
                <Modal
                  trigger={<Button>{planet.name}</Button>}>
                    <Planet url={planet.url} /></Modal>
                  <br />
                  <br />
                </Table.Row>
              )})}
            </Table.Body>
          </Table>
        </Container>
    </>
      
    );
  }

}

export default Planets;