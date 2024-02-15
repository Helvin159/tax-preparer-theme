import { createContext, useState } from 'react';

export const HeaderContext = createContext({
	darkBg: null,
	isOpen: null,
	setIsOpen: () => null,
	setDarkBg: () => null,
});

export const HeaderProvider = ({ children }) => {
	const [darkBg, setDarkBg] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const value = { darkBg, setDarkBg, isOpen, setIsOpen };

	return (
		<HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
	);
};
