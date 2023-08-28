import { useState, useEffect } from "react";

function useFetch() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return {
        data,
        isLoading: !data
    }
}

export default useFetch;




