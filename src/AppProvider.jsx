import { useState, createContext } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
	const [currentLang, setCurrentLang] = useState("fr");
	const [footerData, setFooterData] = useState(null);

	return (
		<appContext.Provider value={{ currentLang, setCurrentLang, footerData, setFooterData }}>
			{children}
		</appContext.Provider>
	);
};

export default appContext;
