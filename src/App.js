import React from 'react'
import { Grid } from 'semantic-ui-react'
import Header from './components/Header'
import NewsGrid from './components/NewsGrid'
import './App.css'

function App() {
  return (
    <Grid columns={1} style={{'height': '100vh'}}>
      <Grid.Row>
        <Header />
      </Grid.Row>
      <Grid.Row style={{'height': '100%'}}>
        <Grid.Column>
          <NewsGrid />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default App
