import React from 'react'

const TwoColWrapper = ({children}) => {
  return (
    <div className='flex justify-between gap-[1rem] max-[880px]:flex-col max-[880px]:gap-0 max-[750px]:flex-row max-[750px]:gap-[1rem] max-[550px]:flex-col max-[550px]:gap-0'>
        {children}
    </div>
  )
}

export default TwoColWrapper