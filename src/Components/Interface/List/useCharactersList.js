import { useReducer, useEffect } from "react";
import axios from "axios";
import { API_baseurl } from "../../../API/API.js";
const ACTIONS = {
	GET_DATA: "get-data",
	REQUEST: "request",
	SET_TOTALPAGES: "set-total",
	ERROR: "error",
};
const getActualParameters = (params) => {
	const actualParameters = {};
	const keys = Object.keys(params);
	for (let i = 0; i < keys.length; i++) {
		if (params[keys[i]] == "" || params[keys[i]] == "None") {
			continue;
		}
		actualParameters[keys[i]] = params[keys[i]];
	}
	return actualParameters;
};
let baseURL = API_baseurl;
function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.REQUEST:
			return { ...state, data: [], loading: true, error: "" };
		case ACTIONS.GET_DATA:
			return {
				...state,
				data: action.payload.data,
				loading: false,
				error: "",
			};
		case ACTIONS.SET_TOTALPAGES:
			return {
				...state,
				totalpages: action.payload.total,
				loading: false,
				error: "",
			};
		case ACTIONS.ERROR:
			return {
				...state,
				totalpages: 1,
				loading: false,
				data: [],
				error: "No Results..",
			};
	}
}
export default function useCharactersList(parameters, page) {
	const [state, dispatch] = useReducer(reducer, {
		loading: true,
		data: [],
		error: "",
	});
	useEffect(() => {
		const actualParameters = getActualParameters(parameters);
		const cancelToken = axios.CancelToken.source();
		dispatch({ type: ACTIONS.REQUEST });
		axios
			.get(API_baseurl, {
				cancelToken: cancelToken.token,
				params: {
					page: page,
					...actualParameters,
				},
			})
			.then((response) => {
				const {
					data: { results },
				} = response;
				const {
					data: {
						info: { pages },
					},
				} = response;
				dispatch({
					type: ACTIONS.GET_DATA,
					payload: { data: results },
				});
				dispatch({
					type: ACTIONS.SET_TOTALPAGES,
					payload: { total: pages },
				});
			})
			.catch(() => {
				dispatch({ type: ACTIONS.ERROR });
			});
		return () => {
			cancelToken.cancel();
		};
	}, [parameters, page]);
	return {
		loading: state.loading,
		data: state.data,
		totalPages: state.totalpages,
		error: state.error,
	};
}
