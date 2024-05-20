import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductImage from "./components/ProductImage.jsx";
import ProductInfo from "./components/ProductInfo.jsx";

function App() {
	return (
		<div>
			<ProductImage
				imageUrl="https://i.pinimg.com/564x/03/05/88/030588331fafab86f09d309f318cb22d.jpg"
				altText="Video game"
			/>
			<ProductInfo name="GameBoy" price="2000" />
		</div>
	);
}

export default App;
