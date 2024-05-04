import axios from "axios";

export const cardsApi = {
	getCards() {
		return axios.get("https://randomuser.me/api/?results=500");
	}
}
