import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const buttonRef = useRef(null);

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        if (buttonRef.current.disabled === false){
            buttonRef.current.disabled = true;

            console.log('button disabled')
            console.log('sending email')
            
            emailjs
            .sendForm(
                'service_na76qwk',
                'template_nhhrqvm', 
                refForm.current,
                'AokDc-1GgijY_N-Nu'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again.');
                    buttonRef.current.disabled = false;
                }
            )
        }
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t', ' ', 'm', 'e']}
                            idx={15} 
                        />
                    </h1>
                    <p>
                        I'm interested in freelance as well as full time employment. If you have any opportunities to share, any questions, or just want to contact me please do so using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' ref={buttonRef} value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Nathan Perrine 
                    <br /> 
                    <span>Nathan.perrine@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[41.55741, -83.62778]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/ copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[41.55741, -83.62778]}>
                            <Popup>I live near here, let me know if you're close by! :)</Popup>
                        </Marker>

                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )


}


export default Contact