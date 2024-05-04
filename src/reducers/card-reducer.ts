import {AppThunkDispatch, ThunkActionType} from "../store/store.ts";
import {changeLoaderActionCreator} from "./loading-reducer.ts";
import {cardsApi} from "../api/cards-api.ts";

const initialState: CardType[] = [];

export type CardType = {
	login: {
		uuid: string
	}
	picture: {
		large: string
		medium: string
		thumbnail: string
	}
	gender: string
	name: {
		first: string
		last: string
	}
	email: string
	dob: {
		date: string
		age: number
	}
	phone: string
	location: {
		city: string
		state: string
		country: string
	}

};

export type GetUsersType = ReturnType<typeof getUsersActionCreator>;
export type DeleteCurrentCard = ReturnType<typeof deleteCurrentCardActionCreator>;
export type CardsActionsType = GetUsersType | DeleteCurrentCard;

export const cardReducer = (state: CardType[] = initialState, action: CardsActionsType): CardType[] => {
	switch (action.type) {
		case 'GET-USERS': {
			return action.state;
		}
		case 'DELETE-CURRENT-CARD': {
			return state.filter((el) => el.login.uuid !== action.cardId);
		}
		default:
			return state
	}
};

export const getUsersActionCreator = (state: CardType[]) => {
	return {type: 'GET-USERS', state} as const;
};

export const deleteCurrentCardActionCreator = (cardId: string) => {
	return {type: 'DELETE-CURRENT-CARD', cardId} as const;
}

export const getUsersThunkCreator = (): ThunkActionType => (dispatch: AppThunkDispatch) => {
	dispatch(changeLoaderActionCreator(true));
	cardsApi.getCards()
		.then((res) => {
			dispatch(getUsersActionCreator(res.data.results));
			dispatch(changeLoaderActionCreator(false));
		});
};