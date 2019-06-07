import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import {scrollToSection} from '../../utils/scrollToSection'

class HeaderComponent extends Component {



    constructor(props) {
        super(props);

        const _removeClassesForMenuBtn = () => {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('header__nav-mobile');
            const mobileMenuOverlay = document.getElementById('header__overlay');
            const bodyDOM = document.getElementsByTagName('BODY')[0];

            mobileMenuOverlay.classList.remove('header__overlay--active');
            mobileMenuBtn.classList.remove('header__trigger--open');
            mobileMenu.classList.remove('mobile-nav--active');
            bodyDOM.classList.remove('menu-open');
        };

        const _toggleClassesForMenuBtn = () => {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('header__nav-mobile');
            const mobileMenuOverlay = document.getElementById('header__overlay');
            const bodyDOM = document.getElementsByTagName('BODY')[0];

            mobileMenuOverlay.classList.toggle('header__overlay--active');
            mobileMenuBtn.classList.toggle('header__trigger--open');
            mobileMenu.classList.toggle('mobile-nav--active');
            bodyDOM.classList.toggle('menu-open');
        };

        window.onscroll = function () {
            const header = document.getElementById('header');
            if (window.pageYOffset >= 1) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        };

        document.addEventListener('DOMContentLoaded', function () {
            const header = document.getElementById('header');

            if (window.pageYOffset >= 1) {
                header.classList.add('header--scrolled');
            }

            const mobileMenuBtn = document.getElementById('mobile-menu-btn');

            mobileMenuBtn.addEventListener('click', function () {
                _toggleClassesForMenuBtn();
            });
        });

        window.onresize = function () {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width > 1200) {
                _removeClassesForMenuBtn();
            }
        };
    }

    handleClick = (event) => {

      if (event.target.hasAttribute('href')){
          const hashStr = event.target.getAttribute('href').substring(2);
          scrollToSection(hashStr);
      }

    };

    handleClickOnLogo = () => {
        this.props.history.push(`/`);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    handleContactUsBtn = () => {

       const contactForm = document.querySelector('.feedback-form');
       if (contactForm){
           contactForm.scrollIntoView({block: "center", behavior: "smooth"});
       } else {
           this.props.history.push(`/`);
           setTimeout(() => {
               const el = document.querySelector('.feedback-form');
               el.scrollIntoView({block: "center", behavior: "smooth"});
           }, 200)


       }

    };

    render() {
        console.log(this.state);
        return (
            <Fragment>
                <header id="header" className="header">
                    <div className="container">
                        <div className="header__wrapper">
                            <div className="header__logo-block">
                                <div id="mobile-menu-btn" className="header__trigger"/>
                                <Link to="/" className="header__logo" onClick={this.handleClickOnLogo}/>
                            </div>
                            <nav className="header__top-navigation top-nav">
                                <ul className="top-nav__wrapper">
                                    <li className="top-nav__item">
                                        {/*<Scrollchor to='#services' className="top-nav__link">Services</Scrollchor>*/}
                                        <Link to='/#services' className="top-nav__link" onClick={event => this.handleClick(event)}>Services</Link>
                                    </li>
                                    {/*<li className="top-nav__item">*/}
                                    {/*    <Link to='/#' className="top-nav__link">Expertise</Link>*/}
                                    {/*</li>*/}
                                    {/*<li className="top-nav__item">*/}
                                        {/*<Link to='/#' className="top-nav__link">Technologies</Link>*/}
                                    {/*</li>*/}
                                    <li className="top-nav__item">
                                        <Link to='/portfolio' className="top-nav__link">Success Stories</Link>
                                    </li>
                                    <li className="top-nav__item">
                                        <Link to='/#company' className="top-nav__link" onClick={event => this.handleClick(event)}>Company</Link>
                                    </li>
                                </ul>
                                <button
                                    className="top-nav__btn btn btn--upper"
                                    onClick={this.handleContactUsBtn}
                                >Contact Us</button>
                            </nav>

                        </div>
                    </div>
                </header>
                <div id="header__nav-mobile" className="mobile-nav">
                    <ul className="mobile-nav__wrapper">
                        <li className="mobile-nav__item">
                            <Link to='/#services' className="mobile-nav__link" onClick={event => this.handleClick(event)}>Services</Link>
                        </li>
                        {/*<li className="mobile-nav__item">*/}
                        {/*    <Link to="#" className="mobile-nav__link">Expertise</Link>*/}
                        {/*</li>*/}
                        {/*<li className="mobile-nav__item">*/}
                        {/*    <Link to="#" className="mobile-nav__link">Technologies</Link>*/}
                        {/*</li>*/}
                        <li className="mobile-nav__item">
                            <Link to='/portfolio' className="mobile-nav__link">Success Stories</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to='/#company' className="mobile-nav__link" onClick={event => this.handleClick(event)}>Company</Link>
                        </li>
                    </ul>
                </div>
                <div id="header__overlay" className="header__overlay"/>
            </Fragment>
        );
    }
}

export default withRouter(HeaderComponent);
