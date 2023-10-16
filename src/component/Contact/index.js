import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
//without the need of backend we can send the email with emailjs library.

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return a cleanup function
    return () => {
      clearTimeout(timerId) // Clear the timeout when the component unmounts or when the effect runs again.
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_ID', refForm.current, 'token from account')
      // args:- serviceID: string, templateID: string(from account), formreference, userToken(from account).
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="conatiner contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact Me".split("")}
              idx={15}
            />
          </h1>
          <p>
          Hello,<br />
          Thank you for visiting my portfolio. I'm delighted to introduce myself as a creative professional eager to explore exciting opportunities with forward-thinking companies like yours.<br />
          Please don't hesitate to reach out using the form below and
          let's explore the possibilities and embark on a journey of creativity and success together. <br/>I'm excited to be a part of your team and contribute to your future achievements.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ehsan Rahi <br />
          Delhi, 110009 <br />
          India. <br />
          <span>rahiehsan045@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.713125, 77.215991]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.713125, 77.215991]}>
              <Popup>I am here :)</Popup>
            </Marker>
          </MapContainer>
          {/**react-leaflet library is responsible for maps. MapConatiner will do this. */}
        </div>
      </div>
      <Loader type="pacman" />
      {/* this loader is react library. */}
    </>
  )
}

export default Contact
