import "./RefreshUsersButton.scss"
import {useAppDispatch} from "../../store/store.ts";
import {changeSearchTitleActionCreator} from "../../reducers/change-search-title.ts";
import {getUsersThunkCreator} from "../../reducers/card-reducer.ts";


export const RefreshUsersButton = () => {
	const dispatch = useAppDispatch()

	const refreshUsersHandler = () => {
		dispatch(getUsersThunkCreator())
		dispatch(changeSearchTitleActionCreator(""))
	}
	return (
		<button className="refreshUsersButton" onClick={refreshUsersHandler}>Refresh Users</button>
	);
};