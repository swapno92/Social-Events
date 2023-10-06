// import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content justify-center gap-52">
                <div>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="bg-neutral text-white flex gap-14 justify-center pb-8">
                <FaFacebook className='text-3xl'></FaFacebook>
                <FaTwitter className='text-3xl'></FaTwitter>
                <FaYoutube className='text-3xl'></FaYoutube>
                <FaInstagram className='text-3xl'></FaInstagram>
                <FaLinkedin className='text-3xl'></FaLinkedin>
            </div>
        </footer>
    );
};

export default Footer;