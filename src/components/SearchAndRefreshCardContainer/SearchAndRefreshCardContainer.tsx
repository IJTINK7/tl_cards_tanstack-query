import {SearchInput} from "../SearchInput/SearchInput.tsx";
import {RefreshUsersButton} from "../RefreshUsersButton/RefreshUsersButton.tsx";
import "./SearchAndRefreshCardContainer.scss"

export const SearchAndRefreshCardContainer = () => {
	return (
		<div className="searchAndRefreshCardContainer">
			<SearchInput/>
			<RefreshUsersButton/>
		</div>
	);
};