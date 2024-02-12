import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Outlet from './routes/Outlet';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
