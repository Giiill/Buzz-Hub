import { useState, useEffect } from "react";

function useFetch() {
    interface IData {
        results?: any[]; // указываем что объект results имеет тип массив произвольных чисел, и его наличие не является обязательным для data
    };
    const [data, setData] = useState<IData>(); // хук useState запускается с интерфейсом IData для переменной data

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




