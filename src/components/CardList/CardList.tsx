import { memo } from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Card} from "../Card/Card.tsx";

export type CardType = {
	login: {
		uuid: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	gender: string;
	name: {
		first: string;
		last: string;
	};
	email: string;
	dob: {
		date: string;
		age: number;
	};
	phone: string;
	location: {
		city: string;
		state: string;
		country: string;
	};
};

export const CardList = memo(() => {
	const getCards = () => axios.get('https://randomuser.me/api/?results=500');
	const { isLoading, error, data } = useQuery({
		queryKey: ['getCards'],
		queryFn: getCards,
	});

	const cards = data?.data.results;

	if (isLoading) return <h4>Loading...</h4>;

	if (error) return <h4>An error has occurred: {error.message}</h4>;
	const searchTitle = ""
	const filteredCards = cards.filter(
		(el: CardType) =>
			el.name.first.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.name.last.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.email.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.phone.toLowerCase().includes(searchTitle.toLowerCase()) ||
			new Date(el.dob.date)
				.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})
				.toLowerCase()
				.includes(searchTitle.toLowerCase()) ||
			el.location.city.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.location.state.toLowerCase().includes(searchTitle.toLowerCase()) ||
			el.location.country.toLowerCase().includes(searchTitle.toLowerCase())
	);

	return (
		<>
			{isLoading ? (
				<h4>Loading ...</h4>
			) : filteredCards.length ? (
				filteredCards.map((el: CardType) => <Card key={el.login.uuid} {...el} />)
			) : (
				<h4>User was not found. Please, enter another value or click "Refresh Users" button.</h4>
			)}
		</>
	);
});