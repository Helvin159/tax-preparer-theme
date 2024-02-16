import React from 'react';
import { Col, Row } from 'bootstrap-4-react/lib/components/layout';

import checkedBox from '../../../assets/svg/checkedbox.svg';
import timesIcon from '../../../assets/svg/icon-times.svg';

const Feature = ({
	feature,
	includedBasic,
	includedPro,
	includedBusiness,
	darkBg,
}) => {
	return (
		<Row className={`feature-list__content__feature ${darkBg ? 'dark' : ''}`}>
			<Col md={6}>
				<p>{feature}</p>
			</Col>
			<Col xs={2} sm={2} md={2} lg={2}>
				{includedBasic === true ? (
					<img src={checkedBox} alt='Checked box' />
				) : (
					<img src={timesIcon} alt='Not included.' />
				)}
			</Col>
			<Col xs={2} sm={2} md={2} lg={2}>
				{includedPro === true ? (
					<img src={checkedBox} alt='Checked box' />
				) : (
					<im src={timesIcon} alt='Not included.' />
				)}
			</Col>
			<Col xs={2} sm={2} md={2} lg={2}>
				{includedBusiness === true ? (
					<img src={checkedBox} alt='Checked box' />
				) : (
					<im src={timesIcon} alt='Not included.' />
				)}
			</Col>
		</Row>
	);
};

export default Feature;
