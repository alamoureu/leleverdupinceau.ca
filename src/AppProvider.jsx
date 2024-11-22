import { useState, createContext } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
	const [currentLang, setCurrentLang] = useState("fr");

	return (
		<appContext.Provider value={{ currentLang, setCurrentLang }}>
			{children}
		</appContext.Provider>
	);
};

export default appContext;
