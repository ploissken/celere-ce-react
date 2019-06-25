import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
// import api from 'api'

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkmode: true,
      listview: true
    }
  }

  darkModeUpdate = (e => {
    e.preventDefault()
    this.setState({ darkmode: !this.state.darkmode })
  })

  viewModeUpdate = (e => {
    e.preventDefault()
    this.setState({ listview: !this.state.listview })
  })

  render() {
    return (
      <Menu borderless fluid fixed="top"
        inverted={this.state.darkmode}
        color={this.state.darkmode ? 'grey' : 'black'}>
        <Menu.Item> celere-ce </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='darkmode' onClick={this.darkModeUpdate}>
            <Icon name={this.state.darkmode ? 'sun' : 'moon'}
              className={this.state.darkmode ? 'yellow loading' : ''}
            />
          </Menu.Item>
          <Menu.Item name='viewmode' onClick={this.viewModeUpdate} >
            <Icon name={this.state.listview ? 'th' : 'list'} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
