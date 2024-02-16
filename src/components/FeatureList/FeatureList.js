import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import Feature from './components/Feature';
import FeatureAccordion from './components/FeatureAccordion/FeatureAccordion';

const FeatureList = ({ featureType, features, featureCats }) => {
	return (
		<Container fluid className='feature-list'>
			<Container className='feature-list__content'>
				<Row className='d-none d-md-flex feature-list__content__compare'>
					<Col md={6}>
						<h3>Compare features</h3>
					</Col>

					{featureCats.map((i, k) => (
						<Col md={2} key={k}>
							{i}
						</Col>
					))}
				</Row>
				<Row className='feature-type'>
					<Col md={6} className='feature-type__title'>
						<h3>{featureType}</h3>
					</Col>
				</Row>
				{features.map(
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

				<FeatureAccordion features={features} />
			</Container>
		</Container>
	);
};

export default FeatureList;
