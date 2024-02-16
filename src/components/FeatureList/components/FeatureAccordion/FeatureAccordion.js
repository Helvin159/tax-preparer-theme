import React from 'react';
import { Container } from 'bootstrap-4-react/lib/components/layout';
import { Accordion } from 'semantic-ui-react';
import AccordionItem from './components/AccordionItem';

const FeatureAccordion = ({ features }) => {
	return (
		<Container className='feature-list__content__accordion'>
			<Accordion>
				{features.map((i, k) => (
					<AccordionItem
						feature={i.feature}
						includedBasic={i.includedBasic}
						includedPro={i.includedPro}
						includedBusiness={i.includedBusiness}
						index={k}
						key={k}
					/>
				))}
			</Accordion>
		</Container>
	);
};

export default FeatureAccordion;
