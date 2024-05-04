import "./GenderGroups.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {CardType} from "../../reducers/card-reducer.ts";

export const GenderGroups = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards);
	const maleUsersCount = cards.filter(el => el.gender !== "female").length;
	const femaleUsersCount = cards.filter(el => el.gender !== "male").length;

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

