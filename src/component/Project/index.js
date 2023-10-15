import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'


const Project = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const projectArray = "Projects...".split("")

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000) // 3000 = 3s

    // Return a cleanup function
    return () => {
      clearTimeout(timerId) // Clear the timeout when the component unmounts or when the effect runs again.
    }
  }, [])


  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projectArray}
            idx={15} // means 1.5s delay
          />
          {/* https://moviesapp00.netlify.app/ */}
          {/* https://weatheroftheweek.netlify.app/ */}
          {/* https://hauntedhouse00.netlify.app/ */}
          </div>
          </div>
          </>
          )
}

export default Project




