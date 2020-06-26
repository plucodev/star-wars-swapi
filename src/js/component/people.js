import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card } from "./card";

export const People = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<h1>Characters</h1>
				</div>

				<div className="d-flex flex-row flex-nowrap scrolling-row">
					{store.people.map((item, index) => {
						return <Card title={item.name} key={index} />;
					})}
				</div>
			</div>
		</>
	);
};

People.propTypes = {};
