import Die from "./Components/Die"
import { useState, useRef, useEffect } from "react"

import { nanoid } from "nanoid"

import Confetti from "react-confetti"
export default function App() {

  const buttonRef =  useRef(null)

// we need to create state so that anytime our state data changes , react re-renders ui

  const [dice, setDice] = useState(() => generateAllNewDice())

  const gameWon = dice.every((die) => die.isHeld) && dice.every((die)=> die.value === dice[0].value)

console.log(gameWon)

  // generateAllNewDice is used to generate array of dice object, setting the value propery of each die object in array
  // to be a random number from 1-6, then the array of die object is returned from the function
  function generateAllNewDice() {
   const randomArray =  new Array(10)
      .fill()
      .map((eachrandomNumber) => Math.ceil(Math.random() * 6))


    return   randomArray.map((item) => {
      return {
        isHeld: false,
        value: item,
        id: nanoid()
      }
    })
  }

  useEffect(() => {
    buttonRef.current.focus()
  }, [gameWon])

  function handleClick(id) {

    setDice(prevdice => prevdice.map((die) => {
      return die.id === id ? {
        ...die, isHeld: !die.isHeld
      } : die

    }))
  }




  function handleRoll() {


    setDice(
      prevdice => prevdice.map((die) => {
        return die.isHeld? die: {...die, value: Math.ceil(Math.random()*6)}
      }))

  }
  function newGame() {
    setDice(()=> generateAllNewDice())
  }


  const diceElements = dice.map((die, index) => {
    return <Die key={index} value={die.value} isHeld={die.isHeld} id={die.id} handleClick={handleClick}/>
  })





  return (

    <main className="main-container">
      {gameWon? <Confetti />: null}
      <section className="head-section">
        <h1> Tenzies <small> by PrimeCraft Solutions </small></h1>
        <p> Roll until all dice are the same. Click each die to freeze at its current
          value between rolls</p>
      </section>

<div className="grid-container">
     {diceElements}
      </div>
      <button ref={buttonRef} onClick={gameWon ? newGame : handleRoll} className="roll-btn"> {gameWon? "New Game": "Roll"} </button>

    </main>
  )

  }
