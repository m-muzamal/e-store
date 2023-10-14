import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem odit. Consequuntur dolor adipisci dolorem accusantium quas odit officiis ratione vero aliquid animi nihil, debitis, unde eligendi architecto amet tempora!</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow /> 
                    <div className="text">Chak No.256GB, Phalore, Toba Tek Singh</div>
                    
                </div>
                <div className="c-items">
                    <FaMobileAlt /> 
                    <div className="text">Phone: 03154237255</div>

                </div>
                <div className="c-items">
                    <FaEnvelope /> 
                    <div className="text">Email: muzamal503@gmail.com</div>

                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Wathches</span>
                <span className="text">Blutooth Speakers</span>
                <span className="text">Wirless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottombar-content">
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, in.</div>
                <img src={Payment} alt="img" />
            </div>
        </div>
    </footer>;
};

export default Footer;
