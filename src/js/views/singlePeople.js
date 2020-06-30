import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePeople = props => {
	const { store, actions } = useContext(Context);
	console.log("*********", props.match.params.theid);
	return (
		<div className="jumbotron">
			<h1 className="display-4">Name: {store.people[props.match.params.theid].name}</h1>
			<h1 className="display-4">Eye Color: {store.people[props.match.params.theid].eye_color}</h1>
			<h1 className="display-4">Skin Color: {store.people[props.match.params.theid].skin_color}</h1>
			<h1 className="display-4">Age: {store.people[props.match.params.theid].birth_year}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePeople.propTypes = {
	match: PropTypes.object
};
