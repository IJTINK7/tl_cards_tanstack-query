import "./CardListAndStatisticsContainer.scss"
import {StatisticsContainer} from "../StatisticsContainer/StatisticsContainer.tsx";
import {CardListContainer} from "../CardListContainer/CardListContainer.tsx";

export const CardListAndStatisticsContainer = () => {
	return (
		<div className="cardListAndStatisticsContainer">
			<CardListContainer/>
			<StatisticsContainer/>
		</div>
	);
};