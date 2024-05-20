import "../styles/ProductInfo.css";
import PropTypes from "prop-types";

function ProductInfo({ name, price }) {
	return (
		<div>
			<h2>{name}</h2>
			<p>${price}.00</p>
		</div>
	);
}

ProductInfo.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default ProductInfo;
