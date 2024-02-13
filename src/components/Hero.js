import React from 'react';

import heroImg from '../assets/svg/hero-image.svg';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__intro'>
				<h1>How TaxPrepPro Works?</h1>
			</div>
			<div className='hero__getting-started'>
				<div className='hero__getting-started__copy'>
					<h2>Getting Started With</h2>
					<p>
						As a new user, you can easily navigate through TaxPrepPro without
						understanding complex tax laws. Once you\'ve signed up for an
						account, you can access various tax scenarios and pricing
						information. It\'s hassle-free and user-friendly!
					</p>
					<button>Learn more</button>
				</div>
				<div className='hero__getting-started__graphic'>
					<img src={heroImg} alt='Something weird' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
