import React, { memo, useEffect } from 'react'

const AlphaMemo = ({data}) => {

    useEffect(()=>{
        console.log('Re-render triger')
    })
  return (
    <div>
      {data}
    </div>
  )
}

const EnchancedMemo = memo(AlphaMemo)

export default EnchancedMemo
