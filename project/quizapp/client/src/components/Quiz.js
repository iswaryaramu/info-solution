import React, { useEffect, useState } from 'react'
import Questions from './Questions';

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
/** redux store import */
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Quiz(){

    const [check,setChecked] = useState(undefined)

    const state = useSelector(state => state.result.result);
    // const trace = useSelector(state => state.questions.trace);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

    useEffect(() =>{
        console.log(state)
    })

    function onNext(){
        console.log('On next click')
        if(trace > queue.length){

        }
        dispatch(MoveNextQuestion());

        dispatch(PushAnswer(check))
    
}

    function onPrev(){
        console.log('On onPrev click')
        dispatch(MoveNextQuestion());
    }

    function onChecked(check){
        console.log(check)
        setChecked(check)
    }

    if(result.length && result.length >= queue.length){
       return <Navigate to={'/result'} replace={true}></Navigate>
    }
    return(
        <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        
       {/*  display questions */} 
       <Questions onChecked={onChecked}/>


       <div className='grid'>
         { trace > 0 ?<button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>

       </div> 
        </div>
    )
}