import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import MovieScreenshot from '../../assets/images/movie_app_screenshot.png'
import HouseScreenshot from "../../assets/images/haunted_house_screenshot.png"
import WeatherScreenshot from "../../assets/images/weather_app_screenshot.png"

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const projectArray = 'Projects...'.split('')

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
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectArray}
              idx={15} // means 1.5s delay
            />
          </h1>

          <div className="projects">

            <div className="project first-project">
            <a href="https://moviesapp00.netlify.app/">
            <div className="project-image">
              <img src={MovieScreenshot} alt="MovieScreenshot" />
              </div>
              <h2>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={"Movie App".split("")}
              idx={15} // means 1.5s delay
              />
            </h2>
            </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, soluta quo eveniet tempora voluptas quis, et vel, libero commodi quos hic iste. Animi, sint esse! Nulla est repudiandae voluptates dicta!</p>
            </div>

            <div className="project middle-project">
            <a href="https://weatheroftheweek.netlify.app/">
            <div className="project-image">
              <img src={WeatherScreenshot} alt="WeatherScreenshot" />
              </div>
              <h2>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={"Weather App".split("")}
              idx={15} // means 1.5s delay
              />
            </h2>
            </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, soluta quo eveniet tempora voluptas quis, et vel, libero commodi quos hic iste. Animi, sint esse! Nulla est repudiandae voluptates dicta!</p>
            </div>

            <div className="project last-project">
            <a href="https://hauntedhouse00.netlify.app/">
            <div className="project-image">
              <img src={HouseScreenshot} alt="HouseScreenshot" />
              </div>
              <h2>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={"Graveyard☠️".split("")}
              idx={15}
              />
            </h2>
            </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, soluta quo eveniet tempora voluptas quis, et vel, libero commodi quos hic iste. Animi, sint esse! Nulla est repudiandae voluptates dicta!</p>
            </div> 
          </div>

          {/* https://moviesapp00.netlify.app/ */}
          {/* https://weatheroftheweek.netlify.app/ */}
          {/* https://hauntedhouse00.netlify.app/ */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project
