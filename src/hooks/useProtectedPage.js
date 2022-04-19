import { useHistory } from "react-router-dom"
import { useEffect } from 'react';

import { getToken } from "../helpers";

export const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
    const token = getToken()
    if(!token) history.push("/login")
    }, [history])
}
