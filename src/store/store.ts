import {combineReducers, applyMiddleware, createStore} from 'redux'

import {ThunkDispatch, ThunkAction, thunk} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {cardReducer, CardsActionsType} from "../reducers/card-reducer.ts";
import {LoadingActionsType, loadingReducer} from "../reducers/loading-reducer.ts";
import {ChangeSearchTitleActionsType, changeSearchTitleReducer} from "../reducers/change-search-title.ts";


const rootReducer = combineReducers({
	cards: cardReducer,
	loading: loadingReducer,
	searchTitle: changeSearchTitleReducer
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ActionsType = CardsActionsType | LoadingActionsType | ChangeSearchTitleActionsType
export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, ActionsType>;


export const useAppDispatch = () => useDispatch<AppThunkDispatch>();


