import './Home.css';
import { MdInfoOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import LionGate from '../../assets/Lion.jpg';
import Vrott from '../../assets/Vrott.png';
import Discovery from '../../assets/Discovery.jpg';
import Anime from '../../assets/Anime.jpg' ;
import BBC_player from '../../assets/BBC_player.png' ;
import Maanoramamax from '../../assets/MANORAMAMAX.jpg'
import MgmPlus from '../../assets/MGMPLUS.png';
import Hoichoi  from  '../../assets/Hoichoi.jpg'
import Stingray from '../../assets/Stingray.png';
import Erosnow from '../../assets/Erosnow.jpg';
import Chaupal from '../../assets/Chaupal.png' ;
import Sony from '../../assets/Sony.png' ;
import Prime_Footer from '../../assets/Footer_logo.png'
const Home = () => {
    return (
        <>
            <div className='Home_Container'>
                {/* top-content */}
                <div className="Home_container_wrapper">
                    <div className="Home_data-1">
                        <div className='Image_flex_wrapper'>
                            <div className='Image_Wrapper'></div>
                        </div>
                        <div className='Home_data_1content'>
                            <h1>Welcome to Prime Video</h1>
                            <h3>Watch the latest movies, TV shows, and award-winning Amazon Originals</h3>
                            <div className='Preimum-Container-wrapper'>
                                <button className='Annual_button'>
                                    Join Prime Annual at ₹125/month*
                                </button>
                                <p>*when paid annually</p>
                                <Link to='/plan-details' className='Plan_details'>
                                    <MdInfoOutline />
                                    <p>Plan details</p>
                                </Link>
                            </div>
                            <div className='Preimum-Container-wrapper' style={{ marginTop: '10px' }}>
                                <button className='Annual_button'>
                                    Join Prime Lite at ₹125/month*
                                </button>
                                <Link to='/plan-details' className='Plan_details'>
                                    <MdInfoOutline />
                                    <p>Plan details</p>
                                </Link>
                                <button className='Annual_button'>
                                    View all plans
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home_container_wrapper">
                    <div className="Home_data-1">
                        <div className='Image_flex_wrapper'>
                            <div className='Image_2Wrapper'></div>
                        </div>
                        <div className='Home_data_1content'>
                            <h1>Movie rentals on Prime Video</h1>
                            <h3>Watch the latest movies, TV shows, and award-winning Amazon Originals</h3>
                            <div className='Premium-Container-wrapper'>
                                <button className='Annual_button'>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fav channel */}
                <div className='fav_wrapper_container'>
                    <div className='fav_wrapper_text'>
                        <h1>Your favorite channels all in one place</h1>
                        <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
                    </div>
                    <div className='fav_content-grid'>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Vrott} alt='logo1' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={LionGate} alt='logo2' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Discovery} alt='logo3' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Anime} alt='logo4' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={BBC_player} alt='logo5' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Maanoramamax} alt='logo6' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={MgmPlus} alt='logo7' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Hoichoi} alt='logo7' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Stingray} alt='logo7' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Erosnow} alt='logo7' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Chaupal} alt='logo7' />
                            </Link>
                        </div>
                        <div className='card'>
                            <Link to='/'>
                                <img src={Sony} alt='logo7' />
                            </Link>
                        </div>
                    </div>
                </div>
                {/*footer */}
                <div className='footer_wrapper'>
                    <div className='footer_content'>
                        <img src={Prime_Footer} className='fotter_logo' alt='footer_logo'/>
                        <div className='Footer_Links'>
                            <Link to='/' className='link_F'>Terms and Privacy Notice</Link>
                            <Link to='/' className='link_F'>Send us feedback</Link>
                            <Link to='/' className='link_F'>Help</Link>
                        </div>
                        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Home;
