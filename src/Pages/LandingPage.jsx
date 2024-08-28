import React from 'react'
import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faBook, faFilm, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faSquareXTwitter, faSquareInstagram, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import mediaPlayerImage from '../assets/mm4.png'
import imageF1 from '../assets/we.jpeg'
import {Link} from 'react-router-dom'



function LandingPage() {
    return (
        <div>
            



            {/* get started section  */}
            <div className="row m-5">
                <div className="col getstarted-container "><h2 id='heading-getstarted' className='text-info'>Ready to Play?<br /> Get Started with Our Media Player!</h2>
                    <p className='para1'>Welcome to MediaPlayerPro! We’re delighted to introduce you to a new level of media enjoyment. Our media player is designed to offer a seamless and immersive experience, whether you’re streaming the latest hits or enjoying your favorite movies. With a sleek and intuitive interface, you’ll have effortless access to all your media content, along with customizable settings to tailor the experience to your liking. Explore our rich feature set that includes advanced playback options, high-definition audio, and a smooth, user-friendly design. Should you need any assistance or have questions, our dedicated support team is ready to help. Start experiencing media like never before with MediaPlayerPro!</p></div>
                <div className="col-5"><img src={mediaPlayerImage} alt="" height={400} width={600} /></div>
                <div className='button-container'>
                    <Link to={'/home'}><button type="button" class="btn btn-primary fs-4">Get Started</button></Link>
                    
                </div>
            </div>

            {/* Features section  */}
            <div className="container mb-5">
                <h1 className='text-center mb-4 text-info'>Features</h1>
                <div className="row ">
                    <div className="col mx-1 p-2  border"><img src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072228.jpg?t=st=1723023013~exp=1723026613~hmac=b1fb87178dd44d5139e12572e4c42e9d65f0eaae668c87675a1c7fc840ed740d&w=360" alt="" height={300} width={300} />
                        <h4 className='text-center m-2'>High-Quality Audio & Video</h4>
                        <p className='p-2 mx-1 para2'>Experience your media in stunning clarity with high-definition audio and video. Our player enhances your entertainment with crisp sound and vibrant visuals.</p>
                    </div>
                    <div className="col mx-1 p-2   border"><img src="https://img.freepik.com/free-photo/3d-cinema-film-projector_23-2151024843.jpg?t=st=1723022590~exp=1723026190~hmac=4d5d9d743676025e10ae74c78628b8c563d74da32d78992d4ade71bd6946584f&w=360" alt="" height={300} width={300} /> <h4 className='text-center m-2'>Seamless Playback</h4><p className='p-2 mx-1 para2'>Enjoy uninterrupted media with our smooth playback technology. Our player supports a wide range of formats, ensuring your content plays flawlessly every time.</p></div>

                    <div className="col mx-1 p-2   border"><img src="https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720764.jpg?t=st=1723022652~exp=1723026252~hmac=4bd735d6a58ed6a425df775a4c4bedae9f9df58c4e9b01ebb3fa706807869fe9&w=996" alt="" height={300} width={300} /> <h4 className='text-center m-2'>Playlist Management</h4><p className='p-2 mx-1 para2'>Organize your favorite media into playlists with ease. Create, edit, and manage playlists to keep your content accessible and well-organized.</p></div>
                    <div className="col mx-1 p-2   border"><img src="https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720824.jpg?t=st=1723022727~exp=1723026327~hmac=23bed8f4f291d860735cb6d7f21c8ad77cf71a1af5becc1bb1ecbf2a8d894478&w=996" alt="" height={300} width={300} /> <h4 className='text-center m-2'>Customizable Interface</h4><p className='p-2 mx-1 para2'>Tailor your media experience with a customizable interface. Adjust themes, layouts, and controls to match your personal style and preferences.</p></div>

                </div>

                {/* section for video  */}



                <div className="row" style={{ marginTop: "100px" }}>

                    <div className="col"><h2 id='heading-getstarted' className='text-info'>Seamless Streaming, Endless Entertainment!</h2>
                        <p className='p-2 mx-4 fs-5 para3'>Experience the ultimate in streaming with our media player, designed to deliver seamless performance and endless entertainment. Whether you're a movie buff, a music lover, or a binge-watcher, our player offers the best in audio-visual quality and convenience. Enjoy your media without interruptions, thanks to our cutting-edge streaming technology. Explore a vast library of content, create personalized playlists, and discover new favorites with ease. Elevate your media experience to new heights with a player that's built for you.</p></div>
                    <div className="col "> <iframe
                        width="600"
                        height="450"
                        
                        src="https://www.youtube.com/embed/hlWiI4xVXKY"
                        title="YouTube video player"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>

                </div>

            </div>






        </div>
    )
}

export default LandingPage



{/* <div className='bg-primary footer-container '>
                <div className="row m-3 ">
                    <div className="col mt-2"><h5>About Us</h5><p>At MediaPlayerPro, we are passionate about delivering the best streaming experience. With top-notch audio and video quality, we ensure that your entertainment is always at its peak.</p></div>
                    <div className="col mt-2 "><h5>Quick Links</h5><p>Home</p><p>Features</p><p>FAQs</p><p>Pricing</p></div>
                    <div className="col mt-2"><h5>Contact Us</h5><p>Email: support@mediaplayer.com</p><p>Phone: +123 456 7890</p><p>Address: 123 Media Lane, Entertainment City</p></div>
                    <div className="col mt-2 d-flex flex-column">
                        <h5 >Follow Us</h5>
                        <a>Facebook :  <FontAwesomeIcon icon={faFacebook} /></a>
                        <a>Twitter :  <FontAwesomeIcon icon={faSquareXTwitter} /></a>
                        <a>Instagram : <FontAwesomeIcon icon={faSquareInstagram} /> </a>
                        <a>LinkedIn : <FontAwesomeIcon icon={faLinkedin} /> </a>
                    </div>
                </div>
            </div> */}