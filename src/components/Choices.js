import React from 'react'

const Choices = ({alphabetList, btnHandler}) => {
    const firstHalf = alphabetList.slice(0,13)
    const secondHalf = alphabetList.slice(-13)
  return (
      <div className='alphabet-container'>
          <div>
          {
              firstHalf.map((alphabet, index)=>{
                  return <button className='alphabet-btn' key={index} value={alphabet} onClick={btnHandler}>{alphabet}</button>
              })
          }
          </div>
          <div>
          {
              secondHalf.map((alphabet, index)=>{
                return <button className='alphabet-btn' key={index} value={alphabet} onClick={btnHandler}>{alphabet}</button>
              })
          }
          </div>
      </div>
  )
}

export default Choices