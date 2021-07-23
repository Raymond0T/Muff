import React from 'react';
import './Footer.css';

import {FaTwitter, FaReddit, FaDiscord} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';

function Footer(){
    return(
        <div className = "Footer">
            <div className="Footer_Container">
                <div className="Footer_Col_1"> 
                    <h1>Muffle Coin</h1>

                    <div className="Footer_Logo">
                        <FaTwitter />
                        <FaReddit />
                        <AiOutlineGithub />
                        <FaDiscord />
                    </div>
                    
                </div>
                <div className="Footer_Col_2"> 
                    <div className="Footer_Sections">
                        <h3>Get Started</h3>
                        <ul>
                            <li>Purchase Coin</li>
                            <li>My Wallet</li>
                            <li>Donate</li>
                            <li>Encryption</li>
                            <li>Charts</li>

                        </ul>
                    </div>
                    <div className="Footer_Sections">
                        <h3>Resource</h3>
                        <ul>
                            <li>Community</li>
                            <li>Muffle Reddit</li>
                            <li>Muffle Discord</li>
                            <li>Wiki</li>
                            <li>Github</li>
                            <li>Exchanges</li>
                        </ul>
                    </div>
                    <div className="Footer_Sections">
                        <h3>Learn More</h3>
                        <ul>
                            <li>Forum</li>
                            <li>Why Muffle Coin?</li>
                            <li>What is Muffle Coin?</li>
                            <li>Cryptocurreny</li>
                            <li>Documentation</li>
                        </ul>
                    </div>
                    <div className="Footer_Sections">
                        <h3>Muffle</h3>
                        <ul>
                            <li>About Coin</li>
                            <li>Investors</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                            <li>Coin Summary</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Term of Use</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Footer;