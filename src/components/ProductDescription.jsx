import "../styles/ProductDescription.css";
import propTypes from "prop-types";

function ProductDescription({ description }) {
	return <p>{description}</p>;
}

ProductDescription.propTypes = {
	description: propTypes.string.isRequired,
};

export default ProductDescription;
