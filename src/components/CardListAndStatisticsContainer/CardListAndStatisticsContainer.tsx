import {CardListContainer} from "../CardListContainer/CardListContainer.tsx";
import {StatisticsContainer} from "../StatisticsContainer/StatisticsContainer.tsx";
import "./CardListAndStatisticsContainer.scss"

export const CardListAndStatisticsContainer = () => {
	return (
		<div className="cardListAndStatisticsContainer">
			<CardListContainer/>
			<StatisticsContainer/>
		</div>
	);
};