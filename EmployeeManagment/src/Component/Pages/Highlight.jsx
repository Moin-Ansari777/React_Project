import React from 'react'
import Layout from '../Layout';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { openDeletePopup } from '../../store/feature/popup/popup';
import { UpdateEmployee } from '../../store/feature/empolyee/employeeThunk';

const Highlight = () => {
    const employee = useSelector(state => state.employee.employees)
  return (
    <div>
      <Layout>
<div className="badge badge-outline badge-xl badge-info">Highlight</div>
        {employee.map(item=>(
            (item.highlight && (<EmployeeCard key={item.id} detail={item} />))
        ))}
      </Layout>
    </div>
  )
}

export default Highlight
const EmployeeCard = ({ detail }) => {
    const dispatch = useDispatch();


    const handleHighLight = async (detail) => {
        console.log(detail)
       await dispatch(UpdateEmployee({
           id: detail.id,
            details : {
            ...detail,
            highlight: true,
        }
        }))
}
return (
    <ul className="list bg-base-100 rounded-box shadow-md">

        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

        <li className="list-row">

            <div>
                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
            <div>
                <div>{detail.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{detail.email}</div>
            </div>

            <p className="list-col-wrap text-xs">
                {detail.bio}
            </p>

            {/* EditButton */}
            <button
                onClick={() => dispatch(openEmployeePopup(detail))}
                className="btn btn-square text-xl text-green-500 btn-ghost">
                <FaEdit />
            </button>

            {/* DeleteButton */}
            <button
                onClick={() => { dispatch(openDeletePopup(detail.id)) }}
                className="btn btn-square text-red-500 text-xl btn-ghost">
                <MdDelete />
            </button>

            {/* HighlightButton */}
            <button
                onClick={() => handleHighLight(detail)}
                className={`btn btn-square text-xl text-pink-500 btn-ghost`}>
                {detail.highlight? <FaHeart/> : <FaRegHeart />}
            </button>

        </li>

    </ul>
)
}
