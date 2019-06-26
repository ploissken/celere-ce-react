import React from 'react';
import { Input, Grid } from 'semantic-ui-react'
import NewsItem from 'components/NewsItem'
import NewsCard from 'components/NewsCard'
import { connect } from 'react-redux'

class FilterInput extends React.Component {
  contentChanged = (e, data) => {
    let filtered = [...this.props.data.rawData].filter(news =>
      news.title.toLowerCase().includes(data.value.toLowerCase()) ||
      news.source.name.toLowerCase().includes(data.value.toLowerCase()) ||
      news.description.toLowerCase().includes(data.value.toLowerCase())
    )
    let cols = []
    let rows = []
    filtered.forEach(newsPost => {
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
  }

  render() {
    return (
      <Input
        icon={{ name: 'filter' }}
        className={this.props.settings.darkmode ? 'dark-input' : ''}
        onChange={this.contentChanged}
        placeholder='Filter...' />
    )
  }
}

// connect component and state
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    data: state.data
  }
}
export default connect(mapStateToProps)(FilterInput)
