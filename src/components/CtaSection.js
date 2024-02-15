import React from 'react';
import { Button } from 'bootstrap-4-react/lib/components';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';

const CtaSection = ({ darkBg, heading, copy, btnText, image, reverse }) => {
	return (
		<Container fluid className={`cta-section ${darkBg ? 'dark' : ''}`}>
			<Row className={`cta-section__row ${reverse ? 'reverse' : ''}`}>
				<Col xs={12} sm={12} md={6} className='cta-section__row__copy'>
					<h2>{heading}</h2>
					<p>{copy}</p>
					<Button variant='primary'>{btnText}</Button>
				</Col>
				<Col xs={12} sm={12} md={6} className='cta-section__row__graphic'>
					<img src={image} alt='Something weird' />
				</Col>
			</Row>
		</Container>
	);
};

export default CtaSection;
