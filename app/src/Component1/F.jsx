import {useMyContext } from './MyContext'

const F = () => {
  const {count} = useMyContext()
  return (
    <div className='bg-amber-400 p-10'>
      F
      <h1>{count}</h1>
    </div>
  )
}

export default F
