import "./AgeGroups.scss"
import {memo, useMemo} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {CardType} from "../CardList/CardList.tsx";

export const AgeGroups = memo(() => {
	const getCards = () => axios.get('https://randomuser.me/api/?results=500');
	const { data } = useQuery({
		queryKey: ['getCards'],
		queryFn: getCards,
	});

	const cards = data?.data.results;

	const countUsersInAgeRange = useMemo(() => {
		return (minAge: number, maxAge: number) => {
			const count = cards?.filter((card: CardType) => card.dob.age >= minAge && (maxAge ? card.dob.age <= maxAge : true)).length;
			return `${count} ${count === 1 ? 'user' : 'users'}`;
		};
	}, [cards]);
	return (
		<div className="ageGroups">
			<h4>Age Groups</h4>
			<div className="ageGroupsInfo">
				<div className="ages">
					<div>11 to 20</div>
					<div>21 to 30</div>
					<div>31 to 40</div>
					<div>41 to 50</div>
					<div>51+</div>
				</div>
				<div className="usersCount">
					<div>{countUsersInAgeRange(11, 20)}</div>
					<div>{countUsersInAgeRange(21, 30)}</div>
					<div>{countUsersInAgeRange(31, 40)}</div>
					<div>{countUsersInAgeRange(41, 50)}</div>
					<div>{countUsersInAgeRange(51, Infinity)}</div>
				</div>
			</div>
		</div>
	);
});



