import React from 'react';
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import api from 'api'

class NewsGrid extends React.Component {
  render() {
    return (
      <Segment
        inverted={this.props.settings.darkmode}
        style={{'height': '100%'}}>
        <h4> grid is here </h4>
      </Segment>
    )
  }
}

// connect component and state-store, to use as props
const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps)(NewsGrid)
