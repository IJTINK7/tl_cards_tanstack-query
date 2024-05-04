import "./GenderGroups.scss"
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {CardType} from "../CardList/CardList.tsx";

export const GenderGroups = () => {
	const getCards = () => axios.get('https://randomuser.me/api/?results=500');
	const { data } = useQuery({
		queryKey: ['getCards'],
		queryFn: getCards,
	});

	const cards = data?.data.results;

	const maleUsersCount = cards?.filter((el: CardType) => el.gender !== "female").length;
	const femaleUsersCount = cards?.filter((el: CardType) => el.gender !== "male").length;

	return (
		<div className="genderGroups">
			<h4>Gender Groups</h4>
			<div className="genderGroupsInfo">
				<div className="genders">
					<div>Male</div>
					<div>Female</div>
				</div>
				<div className="usersCount">
					<div>{maleUsersCount} {maleUsersCount === 1 ? "user" : "users"}</div>
					<div>{femaleUsersCount} {femaleUsersCount === 1 ? "user" : "users"}</div>
				</div>
			</div>
		</div>
	);
};

