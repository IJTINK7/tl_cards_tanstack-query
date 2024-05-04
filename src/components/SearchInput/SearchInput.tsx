import "./SearchInput.scss"
import {ChangeEvent, useState} from "react";

export const SearchInput = () => {
	const [inputValue, setInputValue] = useState<string>("")
	const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	}

	console.log(inputValue)

	return <input type="text" className="searchInput" value={inputValue} placeholder={"Search"}
	onChange={changeInputValueHandler}/>
};