import React, { Fragment, useContext, useEffect } from 'react';
import PricingHero from '../components/PricingHero';
import { HeaderContext } from '../contexts/HeaderContext';
import PricingChart from '../components/PricingChart';
import FeatureList from '../components/FeatureList/FeatureList';

const Pricing = () => {
	const { darkBg, setDarkBg } = useContext(HeaderContext);

	const mainFeatures = {
		featureType: 'Main features',
		featureCats: ['Basic', 'Pro', 'Business'],
		features: [
			{
				feature: 'Simple and intuitive tax preparation interface.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Customizable tax themes and personalized look.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Mobile-responsive tax design.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Analytics and reporting tools for tax preparation.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Multi-language support for tax scenarios.',
				includedBasic: false,
				includedPro: true,
				includedBusiness: true,
			},
		],
	};
	const featurListTwo = {
		featureType: 'Integration',
		featureCats: ['Basic', 'Pro', 'Business'],
		features: [
			{
				feature: 'Simple and intuitive tax preparation interface.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Customizable tax themes and personalized look.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Mobile-responsive tax design.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Analytics and reporting tools for tax preparation.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Multi-language support for tax scenarios.',
				includedBasic: false,
				includedPro: true,
				includedBusiness: true,
			},
		],
	};
	const featurListThree = {
		featureType: 'Security & Support',
		featureCats: ['Basic', 'Pro', 'Business'],
		features: [
			{
				feature: 'Simple and intuitive tax preparation interface.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Customizable tax themes and personalized look.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Mobile-responsive tax design.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Analytics and reporting tools for tax preparation.',
				includedBasic: true,
				includedPro: true,
				includedBusiness: true,
			},
			{
				feature: 'Multi-language support for tax scenarios.',
				includedBasic: false,
				includedPro: true,
				includedBusiness: true,
			},
		],
	};

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
			<FeatureList
				featureType={mainFeatures.featureType}
				features={mainFeatures.features}
				featureCats={mainFeatures.featureCats}
			/>
			<FeatureList
				featureType={featurListTwo.featureType}
				features={featurListTwo.features}
				featureCats={featurListTwo.featureCats}
			/>
			<FeatureList
				featureType={featurListThree.featureType}
				features={featurListThree.features}
				featureCats={featurListThree.featureCats}
			/>
		</Fragment>
	);
};

export default Pricing;
