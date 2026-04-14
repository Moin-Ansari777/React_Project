import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../store/feature/user/userSlice'

const User = () => {
    const user = useSelector(state => state.user.users)
    console.log(user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])


    return (
        <div>

        </div>
    )
}

export default User
