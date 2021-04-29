import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostDetail = () => {
    useProtectedPage()
    return (
        <div>
            <h1>PostDetail</h1>
        </div>
    )
}

export default PostDetail