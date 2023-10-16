import * as THREE from 'three'
// import gsap from 'gsap'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/images/svg-icon.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  const nameArray = "Ehsan Rahi".split("")
  const jobArray1 = "Front-end ".split("")
  const jobArray2 = "Developer.".split("")




  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const parameters = {
  materialColor: '#ffeded'
}


/**
 * Objects
 */
// texture
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('../../assets/textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

// //Meshes
const objectsDistance = 4

/**
 * Particles
 */
//Geometry
const particlesCount = 1000
const positions = new Float32Array(particlesCount * 3)

for(let i=0; i<particlesCount; i++){
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 3
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute(
    'position', 
    new THREE.BufferAttribute(positions, 3)
    )

//Material
const particlesMaterial = new THREE.PointsMaterial({
  color: parameters.materialColor,
  sizeAttenuation: true,
  size: 0.03
})

//points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Animate
 */
// const clock = new THREE.Clock()
// let previousTime = 0

const tick = () =>
{
    // const elapsedTime = clock.getElapsedTime()
    // const deltaTime = elapsedTime - previousTime
    // previousTime = elapsedTime

    if (window.innerWidth > 768){
    // Animate particle positions
  // Update the positions of the particles based on the cursor
  particles.position.x = cursor.x;
  particles.position.y = - cursor.y;
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()










    // Return a cleanup function
    return () => {
      clearTimeout(timerId) // Clear the timeout when the component unmounts or when the effect runs again.
    }
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />

          <span className="m_name">
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            {/* space */}


            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </span>
            <br />
            <span className='jobArray'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray1}
            idx={15}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray2}
            idx={15}
          />
          </span>
        </h1>

        {/* <img src={Logo} alt="" /> */}

        <h2>
        <span>Frontend Developer | </span>
        <span>JavaScript | </span>
        <span>React | </span> 
        <span>Redux</span>
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      
    </div>
  )
}

export default Home














