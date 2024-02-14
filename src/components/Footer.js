import React, { useRef } from 'react';
import { Container } from 'bootstrap-4-react/lib/components/layout';
import { Link } from 'react-router-dom';

const Footer = () => {
	const footerRef = useRef();
	return (
		<Container fluid className='footer'>
			<Container className='footer__content'>
				<h2>Get in touch</h2>
				<form>
					<input
						type='email'
						placeholder='Enter your email to receive updates.'
						ref={footerRef}
					/>
				</form>

				<nav>
					<ul>
						<li>
							<Link>TaxPro</Link>
						</li>
						<li>
							<Link>How it works</Link>
						</li>
						<li>
							<Link>Book an appt</Link>
						</li>
						<li>
							<Link>Blog</Link>
						</li>
						<li>
							<Link>About us</Link>
						</li>
						<li>
							<Link>FAQ</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link>Services</Link>
						</li>
						<li>
							<Link>Contact Us</Link>
						</li>
						<li>
							<Link>Privacy</Link>
						</li>
						<li>
							<Link>Terms of use</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</Container>
	);
};

export default Footer;
