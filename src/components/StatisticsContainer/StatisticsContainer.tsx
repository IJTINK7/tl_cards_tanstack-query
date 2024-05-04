import "./StatisticsContainer.scss"
import {GenderGroups} from "../GenderGroups/GenderGroups.tsx";
import {AgeGroups} from "../AgeGroups/AgeGroups.tsx";
import {memo} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const StatisticsContainer = memo(() => {

	const getCards = () => axios.get('https://randomuser.me/api/?results=500');
	const { data } = useQuery({
		queryKey: ['getCards'],
		queryFn: getCards,
	});
	const cards = data?.data.results

	return (
		<div className="statisticsContainer">
			{cards?.length === 1 ? (
				<div className="generalUsersCount">{cards?.length} User</div>
			) : (
				<div className="generalUsersCount">{cards?.length} Users</div>
			)}
			<hr/>
			<AgeGroups/>
			<hr/>
			<GenderGroups/>
		</div>
	);
});