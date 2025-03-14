import React from 'react'
import { Link } from 'react-router'
import Button from '../../components/button/Button'

const Welcome = () => {
  return (
    <div className='container welcome'>
      <h1 className='sal'>Welcome Friend <span className='wave'>👋</span></h1>
      <p className='intro'>Let's have a quiz to test your HTML knowledge</p>
      <Link className='btn' to='/quiz'>Get Started</Link>
    </div>
  )
}

export default Welcome
