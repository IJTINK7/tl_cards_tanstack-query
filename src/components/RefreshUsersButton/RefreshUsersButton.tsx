import "./RefreshUsersButton.scss"
import axios from "axios";
import {useQuery} from "@tanstack/react-query";


export const RefreshUsersButton = () => {
	const getCards = () => axios.get('https://randomuser.me/api/?results=500');
	const {refetch} = useQuery({
		queryKey: ['getCards'],
		queryFn: getCards,
	});

	const refreshUsersHandler = () => {
		refetch()
	}
	return (
		<button className="refreshUsersButton" onClick={refreshUsersHandler}>Refresh Users</button>
	);
};