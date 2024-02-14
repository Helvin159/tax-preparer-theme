import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HeaderProvider } from './contexts/HeaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HeaderProvider>
				<App />
			</HeaderProvider>
		</BrowserRouter>
	</React.StrictMode>
);
