import React from 'react'
import ListItem from './ListItem'

const Ull = ({answers}) => {
  return (
    <ul>
        {
            answers.map((item, index) => (
                <ListItem item={item} key={index}/>
            ))
        }
    </ul>
  )
}

export default Ull