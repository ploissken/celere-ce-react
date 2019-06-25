import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import api from 'api'

class HeaderMenu extends Component {
  darkModeUpdate = (e => {
    e.preventDefault()
    this.props.dispatch({
      type:'CHANGE_DARK_MODE'
    })
  })

  viewModeUpdate = (e => {
    e.preventDefault()
    this.props.dispatch({
      type:'CHANGE_VIEW_MODE'
    })
  })

  render() {
    return (
      <Menu borderless fluid fixed="top"
        inverted={this.props.settings.darkmode}
        color={this.props.settings.darkmode ? 'grey' : 'black'}>
        <Menu.Item> celere-ce </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='darkmode' onClick={this.darkModeUpdate}>
            <Icon name={this.props.settings.darkmode ? 'sun' : 'moon'}
              className={this.props.settings.darkmode ? 'yellow loading' : ''}
            />
          </Menu.Item>
          <Menu.Item name='viewmode' onClick={this.viewModeUpdate} >
            <Icon name={this.props.settings.listview ? 'th' : 'list'} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

// connect component and state-store, to use as props
const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps)(HeaderMenu)
