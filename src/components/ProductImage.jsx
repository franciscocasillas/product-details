import "../styles/ProductImage.css";
import PropTypes from "prop-types";

function ProductImage({ imageUrl, altText }) {
	return <img src={imageUrl} alt={altText} />;
}

ProductImage.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
};

export default ProductImage;
