export type SearchTitleType = string

const initialState: SearchTitleType = ""

export type ChangeSearchTitleACType = ReturnType<typeof changeSearchTitleActionCreator>

export type ChangeSearchTitleActionsType = ChangeSearchTitleACType

export const changeSearchTitleReducer = (state: SearchTitleType = initialState, action: ChangeSearchTitleActionsType): SearchTitleType => {
	switch (action.type) {
		case 'CHANGE-SEARCH-TITLE': {
			return action.searchTitle
		}
		default:
			return state;
	}
}

export const changeSearchTitleActionCreator = (searchTitle: string) => {
	return {type: 'CHANGE-SEARCH-TITLE', searchTitle} as const
}