import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import Feature from './components/Feature';
import FeatureAccordion from './components/FeatureAccordion/FeatureAccordion';

const FeatureList = () => {
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

	return (
		<Container fluid className='feature-list'>
			<Container className='feature-list__content'>
				<Row className='d-none d-md-flex feature-list__content__compare'>
					<Col md={6}>
						<h3>Compare features</h3>
					</Col>

					{mainFeatures.featureCats.map((i, k) => (
						<Col md={2}>{i}</Col>
					))}
				</Row>
				<Row className='feature-type'>
					<Col md={6} className='feature-type__title'>
						<h3>{mainFeatures.featureType}</h3>
					</Col>
				</Row>
				{mainFeatures.features.map(
					({ feature, includedBasic, includedPro, includedBusiness }, k) => (
						<Feature
							feature={feature}
							includedBasic={includedBasic}
							includedPro={includedPro}
							includedBusiness={includedBusiness}
							darkBg={Math.abs(k % 2) === 1 ? true : false}
							key={k}
						/>
					)
				)}

				<FeatureAccordion features={mainFeatures.features} />
			</Container>
		</Container>
	);
};

export default FeatureList;
