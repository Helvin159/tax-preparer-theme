import React, { Fragment, useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import { Button } from 'bootstrap-4-react/lib/components';

import chartIcon from '../assets/svg/icon-chart-line.svg';
import closeIcon from '../assets/svg/icon-close.svg';

const Header = () => {
	const { darkBg, isOpen, setIsOpen } = useContext(HeaderContext);

	const path = window.location.pathname;

	const handleClick = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};
	return (
		<Fragment>
			<Container fluid className={`header ${darkBg ? 'dark' : ''}`}>
				<Row className='header__content'>
					<Container className='header__content__mobile'>
						<Button onClick={handleClick}>
							<img src={chartIcon} alt='Chart icon' />
						</Button>

						<Container
							className={`header__content__mobile__nav ${
								isOpen ? 'show' : ''
							}`}>
							<Button onClick={handleClick}>
								{<img src={closeIcon} alt='Close icon' />}
							</Button>
							<nav>
								<ul>
									{path !== '/' && (
										<li>
											<Link to={'/'}>Home</Link>
										</li>
									)}
									<li>
										<Link to={'/pricing'}>Pricing</Link>
									</li>
									<li>
										<Link to={'/reservation'}>Reservations</Link>
									</li>
									<li>
										<Link to={'/about'}>About</Link>
									</li>
									<li>
										<Link to={'/contact'}>Contact</Link>
									</li>
								</ul>
							</nav>
						</Container>
					</Container>
					<Col xs={12} md={6} className='header__content__nav d-xs-none'>
						<span className='header__content__chart-icon'>
							<Link to={'/'}>
								<img src={chartIcon} alt='Chart icon' />
							</Link>
						</span>
						<nav>
							<ul>
								<li>
									<Link to={'/pricing'}>Pricing</Link>
								</li>
								<li>
									<Link to={'/reservation'}>Reservations</Link>
								</li>
								<li>
									<Link to={'/about'}>About</Link>
								</li>
								<li>
									<Link to={'/contact'}>Contact</Link>
								</li>
							</ul>
						</nav>
					</Col>
					<Col xs={12} md={6} className='header__content__signup'>
						<span>
							<Link to={'/'}>Join now</Link>
						</span>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Header;
