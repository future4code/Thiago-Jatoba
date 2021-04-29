import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequesteData = (initialData, url) =>{
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
            alert('Algo errado Não está Certo!')
        })
    }, [url])

    return (data)
}

export default useRequesteData