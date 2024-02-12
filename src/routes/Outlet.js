import React, { Fragment } from 'react';
import { Outlet as Layout } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Outlet = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Layout />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Outlet;
