import "./SearchAndRefreshCardContainer.scss"
import {RefreshUsersButton} from "../RefreshUsersButton/RefreshUsersButton.tsx";
import {SearchInput} from "../SearchInput/SearchInput.tsx";

export const SearchAndRefreshCardContainer = () => {
	return (
		<div className="searchAndRefreshCardContainer">
			<SearchInput/>
			<RefreshUsersButton/>
		</div>
	);
};