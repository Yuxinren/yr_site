import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a senior at USC studying computer science and business administration. I'm
            a very passionate software engineer, who interests in both back end and front end.
            I have technical expertise on C++, Java, and Javascript, and I am also familiar with
            Python, SQL, HTML, CSS, C#
          </p>
          <p align="LEFT">
            During my time at USC, I have been on the Dean's list every semester due to my outstanding GPA of 3.85.
            Moreover, I am also serving as a Course Produce for Introduction of Software Engineering(CSCI201) under
            Professor Marco Papa. My role is to holding office hours, give insights on each semester's programming assignments,
            supervising labs, and mentoring students for their success on the final programming projects.
          </p>
          <p>
            When I am not working, I like go to the gym, playing and watching sports, including the ESports.
            Also, I love cooking, and I really enjoying sharing my hometown's food to my peers here at Cali.
          </p>
          <p>
            You can download my <a href="/pdfs/resume.pdf" download="resume.pdf" className= "resume-link">resume</a> here.
          </p>
        </div>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
