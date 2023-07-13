import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery="start:%3E1") => {
    if(searchQuery==="") {
        searchQuery="start:%3E1"
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios
            .get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`, {
            method: "GET"
        })
        dispatch(setRepos(response.data))
    }
}

