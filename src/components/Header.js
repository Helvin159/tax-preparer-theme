import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';

import chartIcon from '../assets/svg/icon-chart-line.svg';

const Header = () => {
	return (
		<Fragment>
			<Container fluid className='header'>
				<Row className='header__content'>
					<Col xs={12} md={6} className='header__content__nav'>
						<span className='header__content__chart-icon'>
							<Link to={'/'}>
								<img src={chartIcon} alt='Chart icon' />
							</Link>
						</span>
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
