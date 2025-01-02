import React from 'react'
import logo from '../../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer bg-[#151515] text-white p-10">
            <aside>
                <img src={logo} alt="" />
                <p>
                    Edwin Diaz is a software and web <br />
                    technologies engineer, a life coach <br />
                    trainer who is also a serial .
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">About</h6>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Why Car Doctor</a>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accessibility</a>
            </nav>
        </footer>
    )
}

export default Footer