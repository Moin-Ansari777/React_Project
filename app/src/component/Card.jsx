import React from 'react'
import Javed from '../assets/img/newJaved.jpeg'
import Button from './Button'
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram ,FaHeart,FaShare,FaCommentDots} from "react-icons/fa";

const Card = (props) => {
    return (
        <div className='rounded-xl overflow-hidden shadow-2xl'>

            <div className='relative w-full aspect-video bg-blue-400'>

                <img className='absolute h-full aspect-square object-cover object-top rounded-full left-1/2 -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white' src={Javed} alt="Error" />
            </div>

            <div className='flex flex-col gap-4 items-center pt-20 pb-8'>
                <div className='text-center'>
                <h1 className='text-2xl font-bold'>{props.name}</h1>
                <p className='my-2 '>{props.role}</p></div>

                <div className='flex gap-4'>
                    <FaYoutube className='bg-red-500 p-2 text-white text-4xl rounded-full' />
                    <FaFacebook className='bg-blue-600 p-2 text-white text-4xl rounded-full'/>
                    <FaInstagram className='bg-red-500 p-2 text-white text-4xl rounded-full'/>
                    <FaTwitter className='bg-blue-400 p-2 text-white text-4xl rounded-full'/>
                </div>

                <div className='flex gap-8'>
                    <Button text='Subscribe'/> <Button text='Message'/>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='flex items-center text-xl'>
                        <FaHeart/>
                    <span>{props.rating}k</span></div>

                    <Line/>

                    <div className='flex items-center text-xl'><FaCommentDots/><span>4.6k</span></div>

                    <Line/>

                    <div className='flex items-center text-xl'><FaShare/><span>23k</span></div>
                </div>

            </div>

        </div>
    )
}

const Line = () => {
  return (
    <div className='w-px h-6 bg-black/20'></div>
  )
}


export default Card


{/* <div className='grid grid-cols-4 gap-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 p-4' >

    {json.map(elem=>{
      return (
        <Card name={elem.username} role={elem.role} rating={elem.rating}/>
      )
    })}
      </div>

      const json = [
  {
    username:'Orhan',
    role : 'Senior Developer',
    rating : '37'
},
{
    username:'Javed',
    role : 'Frontened Developer',
    rating : '23'
},{
  username : 'Admin',
  role : 'Password Creator',
  rating: '90'
},{
  username: 'Customer',
  role : 'UnPaid',
  rating : '100'
}] */}
