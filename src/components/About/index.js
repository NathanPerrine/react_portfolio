import './index.scss'
import PythonLogo from '../../assets/images/Python-logo.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
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
                        strArray={["A", 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                    I'm an ambitous full-stack developer looking for a role that affords me the opportunity to learn about and utilize the latest technologies on challenging and diverse projects.  
                    </p>
                    <p>
                        I'm quietly confident, naturally very curious, and constantly trying to improve my skill set by learning more about technologies I already use and love regularly, as well as taking time to research and practice with the ones that are new to me.
                    </p>
                    <p>
                        If I had to describe myself it would simply be one word, Nerd. Video games, anime, tech, D&D, you name it I probably love it.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <img src={PythonLogo} alt={'Python Logo'} />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default About