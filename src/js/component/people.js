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

				<div className="d-flex  flex-nowrap overflow-auto">
					{store.people.map((item, index) => {
						return (
							<Card
								index={index}
								name={item.name}
								eye={item.eye_color}
								skin={item.skin_color}
								mass={item.mass}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

People.propTypes = {};
