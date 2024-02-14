import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import CtaSection from '../components/CtaSection';

import imgCal from '../assets/svg/Image-cal.svg';
import imgConvo from '../assets/svg/Image-convo.svg';
import heroImg from '../assets/svg/hero-image.svg';

const Home = () => {
	const defaultCtaHeading = 'Getting Started With';

	const defaultCtaCopy =
		"As a new user, you can easily navigate through TaxPrepPro without understanding complex tax laws. Once you've signed up for an account, you can access various tax scenarios and pricing information. It's hassle-free and user-friendly!";
	return (
		<Fragment>
			<Hero />
			<CtaSection
				darkBg={false}
				image={heroImg}
				heading={defaultCtaHeading}
				copy={defaultCtaCopy}
				btnText={'Learn more'}
			/>
			<CtaSection
				darkBg={true}
				heading={'TaxPrepPro and Income Taxes'}
				btnText={'Get Started Now'}
				image={imgCal}
				reverse={true}
				copy={
					'TaxPrepPro is the go-to platform for income tax solutions. Our platform is secure, reliable, and accessible worldwide. With our decentralized, blockchain-powered technology, we provide efficient tax preparation services for individuals and businesses.'
				}
			/>
			<CtaSection
				darkBg={false}
				heading={'Simplify the Tax Preparation Process'}
				btnText={'Learn More'}
				image={imgConvo}
				reverse={false}
				copy={
					"TaxPrepPro's innovative technology enables tax preparers to streamline the tax preparation process, providing a seamless experience for customers. We revolutionize the way tax professionals create value for their clients."
				}
			/>
			<CtaSection
				darkBg={true}
				heading={'Smarter And Faster Tax Transactions'}
				btnText={'Read More'}
				image={imgCal}
				reverse={true}
				copy={
					"Discover how TaxPrepPro's advanced technology has transformed the tax industry. We convert digital transaction data into exchangeable digital coins, making the tax process more efficient across the entire supply chain."
				}
			/>
		</Fragment>
	);
};

export default Home;
