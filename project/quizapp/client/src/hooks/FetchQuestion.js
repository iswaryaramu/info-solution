import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
// import data,{answers} from "../database/data";
import { getServerData } from "../helper/helper";

/** redux actions */
import * as Action from '../redux/question_reducer'

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () =>{
    const dispatch = useDispatch();
    const {getData, setGetData} =useState({loading : false, apiDate : [], serverError: null})

    useEffect(() =>{
        setGetData(prev =>({...prev, isLoading : true}));

        /** asyn function fetch backend data */

        (async () => {
            try {
                
                const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data) 
               if(questions.length > 0){
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, apiDate : questions}));

                /** dispatch on action */
                dispatch(Action.startExamAction({question : questions, answers}))
               } else{
                  throw  new Error("No Question Avalibale");
               }
            } catch(error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, { dispatch});
    return {getData, setGetData};
} 
/**MoveAction Dispatch function */
export const MoveNextQuestion = () =>async (dispatch) => {
   try{
       dispatch(Action.moveNextAction());
   } catch(error){
    console.log(error)

   }
}
/**PrevAction Dispatch function */
export const MovePrevQuestion = () =>async (dispatch) => {
    try{
        dispatch(Action.movePrevAction());
    } catch(error){
     console.log(error)
    }
}

