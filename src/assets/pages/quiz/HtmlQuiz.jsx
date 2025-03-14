import React from 'react'
import { useState } from 'react'
import Button from '../../components/button/Button'
import { Link } from 'react-router'
import Ull from './Ull'

const HtmlQuiz = ({ question }) => {
    const [answer, setAnswer] = useState('')
    const [next, setNext] = useState(0)
    const [count, setCount] = useState(0)
    const [remark, setRemark] = useState('')
    const disQue = question.map(item => item.question)
    const answers = question.map(item => item.answer)
    const [userAnswer, setUserAnswer] = useState([])
    const [finish, setFinish] = useState(false)

    
    function handleNext(){
        // go to prev
        if(next === disQue.length -1) {
            setFinish(true)
            return
        }

        if(!answer) return alert('Answer the question before going to the next')
        setNext(prev => prev + 1)
        setRemark('')
        setAnswer('')
    }

    function handlePrev(){
        // go to prev
        if(next === 0) return
        setNext(prev => prev - 1)
    }

    function handleSubmit(e){
        // prevent default
        e.preventDefault()
        if(!answer) return alert('invalid input')

        // check answer and update state
        if(answers[next].toLocaleLowerCase() === answer.toLocaleLowerCase()) {
            setCount(prev => prev + 1)
            const user = [...userAnswer]
            user[next] = answer
            setRemark("You're Correct")
            setUserAnswer(user)
            // setAnswer('')
        }else {
            const user = [...userAnswer]
            user[next] = answer
            setRemark("You're Wrong")
            setUserAnswer(user)
            // setAnswer('')
        }

        
    }
    
    
    
    return (
    <div className='container'>
      {
        !finish ? 
        <>
                <h3 className='question'>{disQue[next]}</h3>

                {/* answer */}
                <form action="" className='form' onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text"
                    placeholder='Enter answer'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button className='btn'>Submit</button>
                </form>

                {/* remark */}
                <div className="status">
                <h4>{remark}</h4>
                </div>

                {/* next/prev */}
                <div className='scrolls'>
                <Button direction='prev' handle={handlePrev}/>
                <Button direction='next' handle={handleNext}/>
                </div>

                <div className="homes">
                    <Link className='btn' to='/'>Home</Link>
                </div>
        </>

        :
        <>
            <h3 className='question'>{`You Scored: ${count}`}</h3>
            <div className='correction'>
                <section> 
                    <h4>Correct Answer</h4>
                    <Ull answers={answers}/>
                </section>

                <section>
                    <h4>Your Answers</h4>
                    <Ull answers={userAnswer}/>
                </section>
            </div>
            <p>Refresh to restart</p>
        </>
      }
    </div>
  )
}

export default HtmlQuiz
