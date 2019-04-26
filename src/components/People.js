import React from 'react';
import { Table, Header, Container, Icon, Modal, Button, } from 'semantic-ui-react';
import Person from  './Person'
import axios from 'axios';

class People extends React.Component {
  state = { people: [], };

  componentDidMount() {
    axios.get(`https://swapi.co/api/people`)
      .then( res => {
        this.setState({ people: res.data.results }) })
  }



  render() {
    const { people } = this.state
    return (
      <>
    
        <Container centered>
          <br />
          <Header>People of Star Wars</Header>
          <Table celled style={{ position: "relative", marginBottom: "5em" }}>
           

            <Table.Body>
              {people.map( (person, index) => {
                  return (
                <Table.Row key={index}>
                <Modal
                  trigger={<Button>{person.name}</Button>}>
                    <Person url={person.url} /></Modal>
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

export default People;
