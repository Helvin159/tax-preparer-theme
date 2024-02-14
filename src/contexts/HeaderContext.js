import { createContext, useState } from 'react';

export const HeaderContext = createContext({
	darkBg: null,
	setDarkBg: () => {},
});

export const HeaderProvider = ({ children }) => {
	const [darkBg, setDarkBg] = useState(false);

	const value = { darkBg, setDarkBg };

	return (
		<HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
	);
};
