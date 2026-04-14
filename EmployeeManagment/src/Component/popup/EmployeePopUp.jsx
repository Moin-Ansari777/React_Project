import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployeePopup } from '../../store/feature/popup/popup'
import { postEmployee, UpdateEmployee } from '../../store/feature/empolyee/employeeThunk'

const EmployeePopUp = () => {

    const state = useSelector(state => state.popup.employeePopup)
    return (
        <>
            {state && (<Epop />)}
        </>
    )
}

export default EmployeePopUp

const Epop = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.popup.employeePopup)
    const [formDetail, setFormDetail] = useState({
        profileUrl: '',
        name: '',
        email: '',
        bio: '',
        highlight: false,
    })

    useEffect(() => {
        if (!state) {
            setFormDetail(prev => ({
                ...prev,
                profileUrl: '',
                name: '',
                email: '',
                bio: '',
                highlight: false,
            }))
        }
        else if (state.id) {
            setFormDetail(prev => ({
                ...prev,
                profileUrl: state.profileUrl,
                name: state.name,
                email: state.email,
                bio: state.bio,
                highlight: false,
            }))
        }
    }, [state])

    const handelInput = (e) => {
        const { name, value } = e.target;
        setFormDetail(prev => (
            {
                ...prev,
                [name]: value,
            }
        ))
    }
    const submitForm = async () => {
        console.log(formDetail)

        if (state.id) {
            await dispatch(UpdateEmployee({
                id: state.id,
                details: formDetail,
            }))
        }

        else {
            await dispatch(postEmployee(formDetail))
        }
        
        dispatch(deleteEmployeePopup())
    }


    return (
        <div
            onClick={() => { dispatch(deleteEmployeePopup()) }}
            className='fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80'>
            <fieldset
                onClick={(e) => e.stopPropagation()}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend bg-blue-500 text-white p-2 rounded-xl">Employee Detail</legend>

                <label className="label">Profile URL</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Profile URL"
                    name='profileUrl'
                    value={formDetail.profileUrl}
                    onChange={handelInput}
                />

                <label className="label">Name</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    name='name'
                    value={formDetail.name}
                    onChange={handelInput}
                />

                <label className="label">E-mail</label>
                <input
                    type="email"
                    className="input"
                    placeholder="E-mail"
                    name='email'
                    value={formDetail.email}
                    onChange={handelInput}
                />

                <textarea
                    className="textarea"
                    placeholder="Bio"
                    name='bio'
                    value={formDetail.bio}
                    onChange={handelInput}
                    required
                ></textarea>

                <button
                    onClick={submitForm}
                    className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
        </div>
    )
}
