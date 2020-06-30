import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Card = props => {
	return (
		<div className="card custom-card test">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{`Name: ${props.name}`}</h5>
				<h5 className="card-title">{props.skin}</h5>
				<h5 className="card-title">{props.eye}</h5>
				<p className="card-text">{props.mass}</p>
				<Link to={"/people/" + props.index + "/" + props.name} className="btn btn-primary">
					Go somewhere
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	mass: PropTypes.string,
	eye: PropTypes.string,
	skin: PropTypes.string,
	index: PropTypes.number
};
