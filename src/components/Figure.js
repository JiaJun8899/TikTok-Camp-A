import React from 'react'

const Figure = ({wrongLetters}) => {
    const errors = wrongLetters.length
  return (
      <>
      <svg className='figure-svg col-sm-4' viewBox="0 0 200 250" width="125" height="250">
          <line x1="10" y1="50" x2="100" y2="50" stroke="black" strokeWidth={"1%"}/>
          <line x1="100" y1="50" x2="100" y2="80" stroke="black" strokeWidth={"1%"}/>
          <line x1="10" y1="50" x2="10" y2="200" stroke="black" strokeWidth={"1%"}/>
          <line x1="10" y1="200" x2="150" y2="200" stroke="black" strokeWidth={"1%"}/>
          {errors > 0 && <circle cx ="100" cy="90" r="10" stroke='black' fill='none' strokeWidth={"1%"}/>}
          {errors > 1 && <line x1="100" y1="100" x2="100" y2="150" stroke="black" strokeWidth={"1%"}/>}
          {errors > 2 && <line x1="100" y1="115" x2="75" y2="130" stroke="black" strokeWidth={"1%"}/>}
          {errors > 3 && <line x1="100" y1="115" x2="125" y2="130" stroke="black" strokeWidth={"1%"}/>}
          {errors > 4 && <line x1="100" y1="150" x2="75" y2="165" stroke="black" strokeWidth={"1%"}/>}
          {errors > 5 && <line x1="100" y1="150" x2="125" y2="165" stroke="black" strokeWidth={"1%"}/>}
      </svg>
      </>
  )
}

export default Figure