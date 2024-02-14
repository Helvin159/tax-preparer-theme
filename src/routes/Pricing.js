import React, { Fragment, useContext, useEffect } from 'react';
import PricingHero from '../components/PricingHero';
import { HeaderContext } from '../contexts/HeaderContext';
import PricingChart from '../components/PricingChart';

const Pricing = () => {
	const { darkBg, setDarkBg } = useContext(HeaderContext);

	useEffect(
		() => {
			setDarkBg(!darkBg);
			console.log('run');
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<Fragment>
			<PricingHero
				heading={'Pricing'}
				subHeading={'Get the best value for your tax preparation needs!'}
			/>
			<PricingChart />
		</Fragment>
	);
};

export default Pricing;
