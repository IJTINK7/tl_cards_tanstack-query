import "./SearchInput.scss"
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store.ts";
import {ChangeEvent} from "react";
import {changeSearchTitleActionCreator} from "../../reducers/change-search-title.ts";

export const SearchInput = () => {
	const searchTitle = useSelector<AppRootStateType, string>(store => store.searchTitle)
	const dispatch = useAppDispatch()

	const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeSearchTitleActionCreator(e.currentTarget.value))
	}

	return <input type="text" className="searchInput" value={searchTitle} placeholder={"Search"}
	onChange={changeInputValueHandler}/>
};