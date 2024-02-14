import { Container } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';

const PricingHero = ({ heading, subHeading }) => {
	return (
		<Container fluid className='pricing-hero dark'>
			<Container className='pricing-hero__content'>
				<Container className='pricing-hero__content__copy'>
					<h1>{heading}</h1>
					<p>{subHeading}</p>
				</Container>
			</Container>
		</Container>
	);
};

export default PricingHero;
