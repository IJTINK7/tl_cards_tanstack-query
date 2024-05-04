import "./DeleteCardButton.scss"
import React, {memo} from "react";
import trashIconPath from "../../assets/trash-icon.svg"
import {useAppDispatch} from "../../store/store.ts";
import {deleteCurrentCardActionCreator} from "../../reducers/card-reducer.ts";


type PropsType = {
	isCardActive: boolean
	cardId: string
}

export const DeleteCardButton: React.FC<PropsType> = memo(({isCardActive, cardId}) => {
	const dispatch = useAppDispatch()

	const deleteCurrentCardHandler = () => {
		dispatch(deleteCurrentCardActionCreator(cardId))
	}

	return isCardActive ? (
		<button className="deleteCardButton" onClick={deleteCurrentCardHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="24px" height="24px">
				<use xlinkHref={`${trashIconPath}#trash`}/>
			</svg>
				</button>
	) : null
})
