import {memo, useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store.ts";
import {CardType, getUsersThunkCreator} from "../../reducers/card-reducer.ts";
import {Card} from "../Card/Card.tsx";

export const CardList = memo(() => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	const loading = useSelector<AppRootStateType, boolean>(store => store.loading)
	const searchTitle = useSelector<AppRootStateType, string>(store => store.searchTitle)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getUsersThunkCreator())
	}, [dispatch])


	const filteredCards = useMemo(() => {
		return cards.filter(el =>
			el.name.first.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.name.last.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.email.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.phone.toLowerCase().includes(searchTitle.toLowerCase()) ||
			(new Date(el.dob.date)
				.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'}))
				.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.location.city.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.location.state.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.location.country.toLowerCase().includes(searchTitle.toLowerCase())
		);
	}, [cards, searchTitle]);

	return (
		<>
			{loading
				? <h4>Loading ...</h4>
				: filteredCards.length
					? filteredCards.map(el => <Card key={el.login.uuid} {...el}/>)
					: <h4>User was not found. Please, enter another value or click "Refresh Users" button.</h4>
			}
		</>
	);
});