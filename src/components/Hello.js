import React from 'react';
import Link from 'gatsby-link';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';
import MobileScroll from '../assets/scrollMobile.svg';
import DesktopScroll from '../assets/scrollDesktop.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Hello = () => {
	let mobileWidth;
	if (typeof window !== 'undefined') {
		mobileWidth = window.innerWidth <= 990;
	}
	const currentIcon = mobileWidth ? MobileScroll : DesktopScroll;
	return (
		<Section className="hello" id="home">
			<Container className="hello__container">
				<ReactCSSTransitionGroup
					transitionName="hello"
					transitionAppear={true}
					transitionAppearTimeout={2000}
					transitionEnter={false}
					transitionLeave={false}
				>
					<Text tag="h1" className="uppercase bold hello__text">
						Hello <span className="lowercase light">i'm taylor</span>
					</Text>
				</ReactCSSTransitionGroup>
				<ButtonGroup>
					<Link to="#portfolio">
						<Button className="button uppercase">View My Work</Button>
					</Link>
					<a href="mailto:mrstaylorbryant@gmail.com?subject=You blew me away with your site!">
						<Button className="button uppercase">Contact Me</Button>
					</a>
				</ButtonGroup>
			</Container>
			<img src={currentIcon} className="scroll-icon" />
		</Section>
	);
};

export default Hello;
