import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import chartIcon from '../assets/svg/icon-chart-line.svg';

const Header = () => {
	return (
		<Fragment>
			<header className='header'>
				<div className='header__content'>
					<div className='header__content__nav'>
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
					</div>
					<div className='header__content__signup'>
						<span>
							<Link to={'/'}>Join now</Link>
						</span>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
