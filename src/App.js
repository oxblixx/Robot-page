import React, { Component } from 'react'
import Cardlist from './Cardlist'
import { robots } from './robots'
import Searchbox from './Searcbox'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const nameFilter = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })
    // const emailFilter = this.state.robots.filter((robots) => {
    //   return robots.email
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase())
    // })
    return (
      <div className="tc">
        <h1 className="green">Robofriends Site</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Cardlist robots={nameFilter} />
      </div>
    )
  }
}
export default App
