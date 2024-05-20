import "../styles/ProductImage.css";

function ProductImage({ imageUrl, altText }) {
	<img src={imageUrl} alt={altText} />;
}

ProductImage.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
};
