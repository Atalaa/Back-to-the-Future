import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import newYearNyc from '../img/newYearNyc.png';

function Footer(){
    return(
        <footer className="footer">
            <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>

                <div className="footer__logoBox utility-margin-bottom-small">
                    <img src={newYearNyc} alt="logo" className="footer__logo"/>
                </div>

                <div className="footer__navigation">
                    <hr/>
                    <ul className="footer__list">
                        <li className="footer__items"><a href="https://www.linkedin.com/in/aata-allah-rchidi/" rel="noreferrer noopener" target="_blank" className="footer__link">LinkedIn</a></li>

                        <li className="footer__items"><a href="https://github.com/Atalaa" rel="noreferrer noopener" target="_blank" className="footer__link">Github</a></li>

                        <li className="footer__items"><a href="mailto:atala.rchidi@gmail.com" rel="noreferrer noopener" target="_blank" className="footer__link">Hire me</a></li>
                    </ul>
                </div>

            </ScrollAnimation>
        </footer>
    )
}

export default Footer;