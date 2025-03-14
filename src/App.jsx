import { Route, Routes } from "react-router"
import HtmlQuiz from "./assets/pages/quiz/HtmlQuiz"
import Welcome from "./assets/pages/welcome/Welcome"


function App() {
   const questions =  [
    {
        id: 1,
        question: 'What does HTML stand for?',
        answer: 'Hypertext markup language'
    },
    {
        id: 2,
        question: 'What is the correct HTML element for the largest heading:',
        answer: 'h1'
    },
    {
        id: 3,
        question: 'What is the correct HTML element for inserting a line break?',
        answer: 'br'
    },
    {
        id: 4,
        question: 'What is the correct HTML element to define important text',
        answer: 'strong'
    },
    {
        id: 5,
        question: 'What is the correct HTML element to define emphasized text',
        answer: 'em'
    },
    {
        id: 6,
        question: 'What attribute do we use to open a link in a new tab/browser window?',
        answer: 'target'
    },
    {
        id: 7,
        question: 'Inline elements are normally displayed without starting a new line.',
        answer: 'true'
    },
    {
        id: 8,
        question: 'How can you make a numbered list?',
        answer: 'ol'
    },
    {
        id: 9,
        question: 'How can you make a bulleted list?',
        answer: 'ul'
    },
    {
        id: 10,
        question: 'An iframe is used to display a web page within a web page.',
        answer: 'true'
    },
]

  return (
    <div className="wrapper">
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path="quiz" element={<HtmlQuiz question={questions} />}/>
      </Routes>
    </div>
  )
}

export default App
