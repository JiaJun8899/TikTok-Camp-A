import React, {useState} from "react";
import Header from "./components/Header"
import Figure from "./components/Figure"
import WrongLetter from "./components/WrongLetter";
import Choices from "./components/Choices";
import Word from "./components/Word"
import Notifications from "./components/Notifications";
import Popup from "./components/Popup";
import { showNotification as show } from "./helpers/helpers";
import './App.css'

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const cate = ["Countries", "Coding Langauge", "Drinks"];
const wordList = [["Singapore", "China", "England"],["Java", "Python", "HTML"],["COKE", "SPRITE", "PEPSI"]];
let chosenCategory = Math.floor(Math.random() * cate.length);
let WORD = wordList[chosenCategory][Math.floor(Math.random() * cate.length)].toUpperCase();

function App() {
	const [playable, setPlayable] = useState(true)
	const [correctLetters, setCorrectLetters] = useState([])
	const [wrongLetters, setWrongLetters] = useState([])
	const [showNotification, setShowNotification] = useState(false)

	function playAgain(){
		setPlayable(true)
		setCorrectLetters([])
		setWrongLetters([])
		chosenCategory = Math.floor(Math.random() * cate.length);
		WORD = wordList[chosenCategory][Math.floor(Math.random() * cate.length)].toUpperCase();
	}
	
	const btnHandler = e =>{
		let letter = e.target.value
		if(WORD.includes(letter)){
			if(!correctLetters.includes(letter)){
				setCorrectLetters(currentLetters => [...currentLetters, letter])
			} else{
				show(setShowNotification)
			}
		} else{
			if(!wrongLetters.includes(letter)){
				setWrongLetters(currentLetters => [...currentLetters, letter])
			} else{
				show(setShowNotification)
			}
		}
	}

	return (
		<>
		<Header/>
		<div className="container">
			<div className="row justify-content-center">
				<Figure wrongLetters={wrongLetters}/>
				<WrongLetter wrongLetters={wrongLetters}/>
			</div>
			<div className="row justify-content-center">
				<Word selectedWord={WORD} correctLetters={correctLetters} category={cate[chosenCategory]}/>
			</div>
			<div className="row justify-content-center py-auto">
				<Choices alphabetList = {alphabet} btnHandler = {btnHandler}/>
			</div>
		</div>
		<div className="container">
			<Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord ={WORD} setPlayable={setPlayable} playAgain ={playAgain}/>
		</div>
		<Notifications showNotification = {showNotification}/>
		</>
	);
}

export default App;
