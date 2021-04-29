import React from 'react'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequesteData from '../../hooks/useRequestData'

const HomePage = () => {
    useProtectedPage()
    const post = useRequesteData([], `${BASE_URL}/posts`)
    console.log(post)

    
    return (
        <div>
            <h1>HomePage</h1>
            
        </div>
    )
}

export default HomePage