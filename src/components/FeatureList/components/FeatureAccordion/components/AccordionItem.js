import React, { Fragment, useRef, useState } from 'react';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import { AccordionContent, AccordionTitle, Icon } from 'semantic-ui-react';

import checkedBox from '../../../../../assets/svg/checkedbox.svg';
import timesIcon from '../../../../../assets/svg/icon-times.svg';

const AccordionItem = ({
	feature,
	index,
	includedBasic,
	includedPro,
	includedBusiness,
}) => {
	const featureIndexRef = useRef();
	const [activeIndexObj, setActiveIndex] = useState({ activeIndex: 0 });

	const handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = activeIndexObj;
		const newIndex = activeIndex === index ? -1 : index;

		setActiveIndex({ activeIndex: newIndex });
	};

	return (
		<Fragment>
			<AccordionTitle
				active={activeIndexObj.activeIndex === index}
				index={index}
				ref={featureIndexRef}
				onClick={handleClick}>
				<Container>
					<div>
						<Icon name='dropdown' />
					</div>
					<p>{feature}</p>
				</Container>
			</AccordionTitle>
			{/* Content */}
			<AccordionContent active={activeIndexObj.activeIndex === index}>
				<Row>
					<Col xs={4} sm={4} md={4} lg={4} className='category'>
						<h5>Basic</h5>
						{includedBasic === true ? (
							<img src={checkedBox} alt='Checked box' />
						) : (
							<img src={timesIcon} alt='Not included.' />
						)}
					</Col>
					<Col xs={4} sm={4} md={4} lg={4} className='category'>
						<h5>Pro</h5>
						{includedPro === true ? (
							<img src={checkedBox} alt='Checked box' />
						) : (
							<img src={timesIcon} alt='Not included.' />
						)}
					</Col>
					<Col xs={4} sm={4} md={4} lg={4} className='category'>
						<h5>Business</h5>
						{includedBusiness === true ? (
							<img src={checkedBox} alt='Checked box' />
						) : (
							<img src={timesIcon} alt='Not included.' />
						)}
					</Col>
				</Row>
			</AccordionContent>
		</Fragment>
	);
};

export default AccordionItem;
