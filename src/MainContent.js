import React, { Component } from 'react'
import CenteredGrid from './CenteredGrid'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      results: []
    }
  }


  render() {
    return(
      <div className='home'>
        <h2>Header</h2>
        <div className='homeTitle'>
          Sub Header
        </div>
        <h2>Explainer</h2>
        <CenteredGrid />
      </div>
    )
  }
}
