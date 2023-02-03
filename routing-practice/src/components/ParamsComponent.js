import React from 'react';
import { useParams } from 'react-router-dom';
const ParamsComponent = (props)=>{
    const {word, color, bgCol} = useParams();//this is a object that 
    return(
        <div>
            {
                isNaN(word)? //what isNaN?
                //what it does is interprets the variable type of the "word" you put in the link. 

                <p style={
                    color? //if the 
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    This is a word: {word}
                </p>
                : //If the word param IS a number:
                <p>
                    This is a number: {word}
                </p>
            }
        </div>
    )
}
export default ParamsComponent;