import React from 'react'

const Word = ({selectedWord, correctLetters, category})=>{
  return (
      <>
        <div className='col-sm-4 information-container'>
        <p>Category is: {category}</p>
            {
                selectedWord.split('').map((letter, index)=>{
                    return(
                        <span className='letter' key={index}>
                            {correctLetters.includes(letter) ? letter:' _'}
                        </span>
                    )
                })
            }
        </div>
    </>
  )
}

export default Word