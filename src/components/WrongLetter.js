import React from 'react'

const WrongLetter = ({wrongLetters}) => {
  return (
    <div className="col-sm-4 wrongletters-container">
            {
                wrongLetters.length > 0 && <p>Wrong Guesses</p>
            }
            {
                wrongLetters
                .map((letter, index)=>{
                    return(
                    <span key={index}>{letter}</span>)
                })
                .reduce((prev, curr)=> prev === null ? [curr]: [prev, ',', curr],null)
            }
    </div>
  )
}

export default WrongLetter