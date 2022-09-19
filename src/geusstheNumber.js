import React from 'react'
 
const Result = ({ term , secretNum }) => {
  let result;
  if(term){
    if(secretNum > term){
      result = 'You guessed Lower'
    }
    else if(secretNum < term){
      result ='You guessed Higher'
    }
    else{
      result ='Yippee, guessed it!'
    }
  }
  return <h3>{result}</h3>
}
 
export default Result