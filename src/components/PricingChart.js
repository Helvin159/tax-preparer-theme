import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react/lib/components/layout';
import { Button } from 'bootstrap-4-react/lib/components';

const PricingChart = () => {
	let showPopular = false;

	return (
		<Container fluid className='pricing-chart'>
			<Container className='pricing-chart__content' fluid>
				<Row className='pricing-chart__content__pricing '>
					<Col sm={4} className='pricing-chart__content__pricing__package'>
						<Container className='pricing-chart__content__pricing__package__header'>
							<Row>
								<Col xs={6} sm={6} md={6} lg={6}>
									<h3>Basic</h3>
								</Col>
								<Col className='popular-pill'>
									<span className={showPopular ? 'show' : ''}>Popular</span>
								</Col>
							</Row>
						</Container>
						<Container className='pricing-chart__content__pricing__package__price'>
							<h4>$199</h4>
							<p>Per user, per month. Billed annualy.</p>
							<Button>Try for free</Button>
						</Container>
					</Col>
					<Col sm={4} className='pricing-chart__content__pricing__package'>
						<Container className='pricing-chart__content__pricing__package__header'>
							<Row>
								<Col xs={6} sm={6} md={6} lg={6}>
									<h3>Pro</h3>
								</Col>
								<Col className='popular-pill'>
									<span className={!showPopular ? 'show' : ''}>Popular</span>
								</Col>
							</Row>
						</Container>
						<Container className='pricing-chart__content__pricing__package__price'>
							<h4>$299</h4>
							<p>Per user, per month. Billed annualy.</p>
							<Button variant={'primary'}>Try for free</Button>
						</Container>
					</Col>
					<Col sm={4} className='pricing-chart__content__pricing__package'>
						<Container className='pricing-chart__content__pricing__package__header'>
							<Row>
								<Col xs={6} sm={6} md={6} lg={6}>
									<h3>Business</h3>
								</Col>
								<Col className='popular-pill'>
									<span className={showPopular ? 'show' : ''}>Popular</span>
								</Col>
							</Row>
						</Container>
						<Container className='pricing-chart__content__pricing__package__price'>
							<h4>$999</h4>
							<p>Per user, per month. Billed annualy.</p>
							<Button variant={'primary'}>Try for free</Button>
						</Container>
					</Col>
				</Row>
				<Row className='pricing-chart__content__features'>
					<Col md={6}>
						<h3>Main features</h3>
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		</Container>
	);
};

export default PricingChart;
