import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Outlet from './routes/Outlet';
import Reservation from './routes/Reservation';
import Pricing from './routes/Pricing';
import About from './routes/About';
import Contact from './routes/Contact';

import './css/style.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
				<Route path='/reservation' element={<Reservation />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
