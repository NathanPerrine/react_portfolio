import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
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
                    If i had to describe myself it would simply be one word, Nerd. Video games, anime, D&D, you name it I probably love it.
                </p>
            </div>
        </div>
    )

}

export default About