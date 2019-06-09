import React, { Component } from 'react'
import classnames from 'classnames'
import logo from '../public/logo.png'

export default class Shows extends Component {
  constructor() {
    super()
    this.state = {
      shows: [
        {name: 'Menu', id: 1},
        {name: 'Menu', id: 2},
        {name: 'Menu', id: 3},
        {name: 'Menu', id: 4},
        {name: 'Menu', id: 5},
        {name: 'Menu', id: 6},
        {name: 'Menu', id: 7},
      ],
      active: true,
    }
  }

  render() {
    return(
      <div className={classnames('shows', {
        active: this.state.active
      })}>
        <img src={logo} alt='kindur' />
        <ul className='items'>
          {
            this.state.shows && this.state.shows.map(show => {
              return (
                <li className='item' key={show.id}>
                  {show.name} {show.id}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

