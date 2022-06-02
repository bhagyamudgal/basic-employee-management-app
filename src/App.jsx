import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#49319A",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
