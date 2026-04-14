import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeDeletePopup } from '../../store/feature/popup/popup'
import { deleteEmployee } from '../../store/feature/empolyee/employeeThunk'

const DeletePopup = () => {
    const state = useSelector(state => state.popup.deletePopup)
    return (
        <>
            {state && (<DeletePop />)}
        </>
    )
}

export default DeletePopup

const DeletePop = () => {
    const dispatch = useDispatch();
    const deletePopup = useSelector(state => state.popup.deletePopup)

    const handleDelete = async () => {
        dispatch(deleteEmployee(deletePopup))
        await dispatch(closeDeletePopup())
    }

    return (
        <div>
            <div
                onClick={() => { dispatch(closeDeletePopup()) }}
                className='fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80'>

                <div
                    onClick={(e) => e.stopPropagation()}
                    className="card w-96 bg-base-100 card-md shadow-sm ">
                    <div className="card-body items-center">
                        <h2 className="card-title bg-red-500 rounded-xl p-2 text-white w-fit">Delete Employee</h2>
                        <p>Are You Sure Want To Delete</p>
                        <div className="justify-center card-actions">
                            <button
                                onClick={handleDelete}
                                className="btn btn-primary">Delete Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}