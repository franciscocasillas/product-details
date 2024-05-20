import "../styles/ProductSpecs.css";
import PropTypes from "prop-types";

function ProductSpecs({ specs }) {
	return (
		<div>
			<h3>Specifications</h3>
			<table>
				<tbody>
					{Object.entries(specs).map(([key, value]) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

ProductSpecs.propTypes = {
	specs: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductSpecs;
