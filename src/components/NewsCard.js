import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function dateParse(d) {
  return new Date(d).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric' })
}

export default class NewsCard extends React.Component {
  render() {
    return (
      <Card centered>
        <Image src={this.props.data.urlToImage} wrapped />
        <Card.Content>
          <Card.Header>
            <a href={this.props.data.url || '#'}> {this.props.data.title  || 'no title!'} </a>
          </Card.Header>
          <Card.Meta>
            {`${this.props.data.source.name} - ${dateParse(this.props.data.publishedAt)}`}
          </Card.Meta>
          <Card.Description>
            {this.props.data.description || 'no description!'}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
