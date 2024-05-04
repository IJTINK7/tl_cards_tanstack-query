import "./CardListContainer.scss"
import {CardList} from "../CardList/CardList.tsx";
import {memo, useEffect, useRef, useState} from "react";

export const CardListContainer = memo(() => {

	const [scrollTopPosition, setScrollTopPosition] = useState(0);
	const [scrollBottomPosition, setScrollBottomPosition] = useState(1);
	const ref = useRef<HTMLDivElement | null>(null);

	const handleScroll = () => {
		const currentRef = ref.current
		if (currentRef) {
			const scrollTopPosition = currentRef.scrollTop;
			const scrollBottomPosition = currentRef.scrollHeight - currentRef.scrollTop - currentRef.clientHeight;
			setScrollTopPosition(scrollTopPosition);
			setScrollBottomPosition(scrollBottomPosition);
		}
	};

	useEffect(() => {
		const currentRef = ref.current
		if (currentRef) {
			currentRef.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (currentRef) {
				currentRef.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);


	return (
		<div className="cardListWrapper">
			<div className={`gradient topGradient${scrollTopPosition ? "" : " invisible"}`}></div>
			<div className={`gradient bottomGradient${scrollBottomPosition ? "" : " invisible"}`}></div>
			<div className="cardListContainer scroll" ref={ref}>
				<CardList/>
			</div>
		</div>
	);
});