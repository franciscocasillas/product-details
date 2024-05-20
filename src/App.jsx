import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductImage from "./components/ProductImage.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import ProductDescription from "./components/ProductDescription.jsx";
import ProductSpecs from "./components/ProductSpecs.jsx";

function App() {
	const products = [
		{ specs: { color: "Transparent", memory: "10 GB", games: "Not Included" } },
	];

	return (
		<div>
			<ProductImage
				imageUrl="https://i.pinimg.com/564x/03/05/88/030588331fafab86f09d309f318cb22d.jpg"
				altText="Video game"
			/>
			<ProductInfo name="GameBoy" price="2,000" />
			<ProductDescription description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis deserunt in laborum nobis neque temporibus nihil, porro quasi facere?" />
			{products.map((product) => (
				<ProductSpecs key={product.key} specs={product.specs} />
			))}
		</div>
	);
}

export default App;
