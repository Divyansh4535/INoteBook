import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)


  return (
    <div className='bg-red-300 h-screen'>
    <h1> This is About {a.name} ,study {a.study}</h1>    
    </div>
  )
}

export default About