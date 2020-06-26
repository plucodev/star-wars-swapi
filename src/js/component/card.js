import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card custom-card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string
};
