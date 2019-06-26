import React from 'react';
import { Segment, Item, Grid } from 'semantic-ui-react'
import NewsItem from 'components/NewsItem'
import { connect } from 'react-redux'
import api from 'api'

class NewsGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [],
      rows: []
    }
  }

  componentDidMount() {
    api().get().then(apiData => {
      console.log(apiData)
      this.props.dispatch({
        type:'DATA_LOADED',
        data: apiData.articles
      })

      // tiny workaround to display a loading
      // (proper solution require redux-thunk middleware)
      setTimeout(() => { this.createDisplayItens() }, 1000)
    })
  }

  createDisplayItens() {
    let cols = []
    let rows = []
    console.log('creating display itens')
    if(this.props.data.filteredData.length) {
      console.log('in da if creating display itens')
      this.props.data.filteredData.forEach(newsPost => {
        rows.push(<NewsItem data={newsPost} key={newsPost.url}/>)
        // cols.push(<NewsCard data={newsPost} key={newsPost.url}/>)
      })
    }
    this.setState({ columns: cols, rows: rows })
    console.log('done', rows)
  }

  render() {
    if(!this.state.rows.length) {
      console.log('in da if bitch')
      console.log(this.state.rows.length)
      return (
        <Segment
          loading
          inverted={this.props.settings.darkmode}
          style={{'height': '100%', 'paddingTop': '2em'}}>
        </Segment>
      )
    } else {
      console.log(this.state.rows.length)
      return (
        <Grid className={this.props.settings.darkmode ? 'dark-item' : ''}>
          <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
              <Item.Group relaxed="very" style={{'paddingTop': '2em'}}>
                {this.state.rows}
              </Item.Group>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
        </Grid>
      )
    }
  }
}

// connect component and state-store, to use state as props
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    data: state.data
  }
}
export default connect(mapStateToProps)(NewsGrid)
