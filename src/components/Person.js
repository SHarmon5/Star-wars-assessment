import React from 'react';
import { Table, Header, Container, Icon, Modal, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom'
import axios from 'axios';
import Planet from './Planet';




class Person extends React.Component {
  state = {
    name: '', gender: '', eye_color: '', hair_color: '', skin_color: '',
    height: '', mass: '',
    homeworld: '', homeworld_url: '', 
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(res => {
        this.setState(res.data)
        axios.get(res.data.homeworld)
          .then(res => {
            this.setState({ homeworld: res.data.name, homeworld_url: res.data.url })
          })
      })
  }

  render() {
    const { name, homeworld, homeworld_url, height, gender, mass, eye_color, skin_color, hair_color, } = this.state
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
              <Table.HeaderCell>Home World</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Height</Table.HeaderCell>
              <Table.HeaderCell>Mass</Table.HeaderCell>
              <Table.HeaderCell>Skin Color</Table.HeaderCell>
              <Table.HeaderCell>Eye Color</Table.HeaderCell>
              <Table.HeaderCell>Hair Color</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Link to='./Person'>{name}</Link></Table.Cell>
              <Table.Cell><Modal trigger={<a>{homeworld}</a>}>
                <Planet url={homeworld_url} />
              </Modal></Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
              <Table.Cell>{height}</Table.Cell>
              <Table.Cell>{mass}</Table.Cell>
              <Table.Cell>{skin_color}</Table.Cell>
              <Table.Cell>{eye_color}</Table.Cell>
              <Table.Cell>{hair_color}</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>

      </>

    );
  }

}

export default Person;
