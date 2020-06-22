import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

const CardPlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
			<div className="container-fluid">
				<h1 id="Planets" className="main-title text-center m-3">
					Planets
				</h1>
				<div className="row justify-content-md-center">
					{store.planets.map(planet => (
						<React.Fragment key={planet.name}>
							<div className="card-deck">
								<div className="col-3 col-md-4 mb-4">
									<div className="card bg-light" style={{ width: "18rem" }}>
										<img
											className="card-img-top"
											src="https://via.placeholder.com/150x150"
											alt="Card image cap"
										/>
										<div className="card-body">
											<h3 className="card-title">{planet.name}</h3>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum
												mattis risus non rutrum. Fusce eget tempor ante. Duis mattis.
											</p>{" "}
											<Link to={`single/planets/${planet.id}`}>
												<button type="button" className="btn btn-primary">
													Learn More
												</button>
											</Link>
											<i
												className="fab fa-gratipay float-right"
												href="#"
												onClick={e => actions.addToFavourite(planet.name)}
											/>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
				<button
					className="btn btn-success"
					type="button"
					onClick={e => {
						console.log("clicked for nextPlanets: ", store.planetsNext);
						actions.getData("planets", store.planetsNext);
					}}>
					{"Show more results!"}
				</button>
			</div>
		</React.Fragment>
	);
};
export default CardPlanets;
