import React from 'react'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

function dateParse(d) {
  return new Date(d).toLocaleString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric' })
}

class NewsItem extends React.Component {
  render() {
    return (
      <Item>
        <Item.Image size='tiny' src={this.props.data.urlToImage} />
        <Item.Content>
          <Item.Header>
            <a href={this.props.data.url || '#'}> {this.props.data.title  || 'no title!'} </a>
          </Item.Header>
          <Item.Meta>
            {`${this.props.data.source.name} - ${dateParse(this.props.data.publishedAt)}`}
          </Item.Meta>
          <Item.Description>
            {this.props.data.description || 'no description!'}
          </Item.Description>
        </Item.Content>
      </Item>
    )
  }
}
const mapStateToProps = (state) => {
  return { settings: state.settings }
}
export default connect(mapStateToProps)(NewsItem)
