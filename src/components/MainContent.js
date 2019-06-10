import React, { Component } from 'react'
import CenteredGrid from './CenteredGrid'
import logo from '../../public/hero.png'
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Explainer = () => {
  return (
    <div className="explainer">
      <img className="explainerImg" src={logo} alt='' />
      <div className="explainerText">
        <h2>Explainer</h2>
        <p>This copy helps you understand what is going on in this page</p>
      </div>
    </div>
  )
}

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      results: []
    }
  }

  componentDidMount() {
    axios.get('http://www.omdbapi.com/?s=coach&apikey=a4d98298')
      .then(res => {
        const { Search } = res.data;
        console.log({Search})
        this.setState({ results: Search });
      })
      .catch(err => console.log(err))
  }

  render() {
    const { results } = this.state;
    return(
      <div className='home'>
        <div className="userName">
          <span>Username</span>
          <img
            alt="chevy"
            src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fchevron.svg?1555596324053"
          />
        </div>
        <h2 className="mainHeader">Header</h2>
        <div className="contentWrapper">
          <div className='resultsPage'>
            <h3>Sub Header</h3>
            <CenteredGrid searchResults={results}/>
            <div className="addContent">
              Add Content
              <Fab size="small" color="primary" aria-label="Add" style={{ marginLeft: 10 }}>
                <AddIcon />
              </Fab>
            </div>
          </div>
          <Explainer />
        </div>
      </div>
    )
  }
}
