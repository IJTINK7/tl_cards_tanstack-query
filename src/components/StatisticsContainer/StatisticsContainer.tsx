import "./StatisticsContainer.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {CardType} from "../../reducers/card-reducer.ts";
import {GenderGroups} from "../GenderGroups/GenderGroups.tsx";
import {AgeGroups} from "../AgeGroups/AgeGroups.tsx";
import {memo} from "react";

export const StatisticsContainer = memo(() => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	return (
		<div className="statisticsContainer">
			{cards.length === 1 ? (
				<div className="generalUsersCount">{cards.length} User</div>
			) : (
				<div className="generalUsersCount">{cards.length} Users</div>
			)}
			<hr/>
			<AgeGroups/>
			<hr/>
			<GenderGroups/>
		</div>
	);
});