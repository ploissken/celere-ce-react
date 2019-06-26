import React from 'react';
import { Segment, Item, Grid } from 'semantic-ui-react'
import NewsItem from 'components/NewsItem'
import NewsCard from 'components/NewsCard'
import { connect } from 'react-redux'
import api from 'api'

const padded = { 'paddingTop': '2em' }

class NewsGrid extends React.Component {
  componentDidMount() {
    api().get().then(apiData => {
      apiData.articles.sort(function(a,b) {
        return new Date(b.publishedAt) - new Date(a.publishedAt)
      })
      this.props.dispatch({
        type:'DATA_LOADED',
        data: apiData.articles
      })

      let cols = []
      let rows = []
      apiData.articles.forEach(newsPost => {
        rows.push(<NewsItem data={newsPost} key={newsPost.url}/>)
        cols.push(
          <Grid.Column key={newsPost.url}>
            <NewsCard data={newsPost} />
          </Grid.Column>)
      })
      this.props.dispatch({
        type: 'FILTER_DATA',
        rows: rows,
        columns: cols
      })
    })
  }

  render() {
    if (!this.props.data.filteredData.rows.length) {
      // no data yet, display loading
      return (
        <Segment
          loading
          inverted={this.props.settings.darkmode}
          style={{'height': '100%', 'paddingTop': '2em'}}>
        </Segment>
      )
    } else {
      // view data as list items
      if (this.props.settings.listview) {
        return (
          <Grid
            style={{...padded, 'minHeight': '100vh'}}
            className={this.props.settings.darkmode ? 'dark-item' : ''}>
            <Grid.Row>
              <Grid.Column width={1}/>
              <Grid.Column width={14}>
                <Item.Group relaxed="very" style={padded}>
                  {this.props.data.filteredData.rows}
                </Item.Group>
              </Grid.Column>
              <Grid.Column width={1}/>
            </Grid.Row>
          </Grid>
        )
      } else {
        // view data as column cards
        return (
          <Grid
            style={{...padded, 'minHeight': '100vh'}}
            className={this.props.settings.darkmode ? 'dark-item' : ''}>
            <Grid.Row>
              <Grid.Column width={1}/>
              <Grid.Column width={14}>
                <Grid stackable padded columns={4}
                  className={this.props.settings.darkmode ? 'dark-item' : ''}>
                  {this.props.data.filteredData.columns}
                </Grid>
              </Grid.Column>
              <Grid.Column width={1}/>
            </Grid.Row>
          </Grid>
        )
      }
    }
  }
}

// connect component and state
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    data: state.data
  }
}
export default connect(mapStateToProps)(NewsGrid)
