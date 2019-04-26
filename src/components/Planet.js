import React from 'react';
import { Table, Header, Container, Icon, Modal, } from 'semantic-ui-react';
import axios from 'axios';

class Planet extends React.Component {
  state = { name: '', climate: '', diameter: '', gravity: '', population: '', terrain: '', };

  componentDidMount() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({...res.data})
      })
  }

  render() {
    const { name, climate, diameter, gravity, population, terrain } = this.state
    return (
      <>
        <Modal.Header>
          {name}
        </Modal.Header>
        <br />
        <Table celled style={{ position: "relative", marginBottom: "5em" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Climate</Table.HeaderCell>
              <Table.HeaderCell>Diameter</Table.HeaderCell>
              <Table.HeaderCell>Gravity</Table.HeaderCell>
              <Table.HeaderCell>Poplulation</Table.HeaderCell>
              <Table.HeaderCell>Terrain</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{climate}</Table.Cell>
              <Table.Cell>{diameter}</Table.Cell>
              <Table.Cell>{gravity}</Table.Cell>
              <Table.Cell>{population}</Table.Cell>
              <Table.Cell>{terrain}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default Planet;