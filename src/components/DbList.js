import React, { Component } from 'react';
var {Label, PageHeader, Col} = require('react-bootstrap')
let baseUrl = 'http://localhost:3001'

class DbList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      databases: []
    } 
  }
  dbFetch() {
    fetch(`${baseUrl}/api/dbs`, {mode: 'cors'}).then(function(response) {
      //console.log(response.json());
      this.setState({databases: response.json().databases})
    })
  }
  componentDidMount() {
    let _this = this
    fetch(`${baseUrl}/api/dbs`, {mode: 'cors'})
    .then(function(response) {
      return response.json()
    }).then(function(data) {
      _this.setState({databases: data.databases})
    })
  }
  componentWillReceiveProps(nextProps){
    console.log('content')
    this.dbFetch()
  }
  render() {
    var dbName = this.props.dbName
    return <div>
      <Col md={2}>
        <PageHeader>Databases</PageHeader>
        {this.state.databases.map((database)=>{
          return <p key={database.name}>
          {/*<Link to={`/dbs/${database.name}`}>{database.name}</Link>*/}
            <a href={`#/dbs/${database.name}`}>
              {(database.name === dbName)?<Label>{database.name}</Label>:
                database.name
              }
            </a>
          </p>
        })}
      </Col>
      <Col md={10}>
        <div>{this.props.children}</div>
      </Col>
    </div>
  }
}

export default DbList
