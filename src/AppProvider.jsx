'use client';

import { useState, createContext } from "react";

const appContext = createContext();

function getInitialLang() {
	if (typeof window !== "undefined" && window.location.pathname.startsWith("/en")) {
		return "en";
	}
	return "fr";
}

export const AppProvider = ({ children }) => {
	const [currentLang, setCurrentLang] = useState(getInitialLang);
	const [footerData, setFooterData] = useState(null);

	return (
		<appContext.Provider value={{ currentLang, setCurrentLang, footerData, setFooterData }}>
			{children}
		</appContext.Provider>
	);
};

export default appContext;
