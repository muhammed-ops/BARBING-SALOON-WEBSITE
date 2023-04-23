import React, { useState } from 'react'
import Header from '../components/Header'
import './reviews.css'

function Reviews() {
    const [name,setName] = useState();
    const [comment,setComment] = useState();
    const [rating,setRating] = useState('5');
    const [noreview,setNoReview] = useState(true);
    const [addButton, setAddButton] = useState(true);
    const [addReview , setAddReview] = useState(true);
    const [input,setInput] = useState(false)
    const [array,setArray] = useState([])
    const [error,setError] = useState(false)

    const Input = () => {
        setAddReview(false)
        setInput(true)
    }

    const AddReview = (e) =>{
      e.preventDefault();
      const updatedArray = [...array,[name,comment,rating]];
      if(name === undefined || comment === undefined || rating === undefined){
        setError(true)
      }else{
      setArray(updatedArray)
      setAddReview(true)
      setNoReview(false)
      setInput(false)
    }}
  

  return (
    <>
    <Header/>
    <div className='box'>
        {array && array.map((data,index)=>(
          <div className='box2' key={index}>
            <ul>
              <li>Name:{data[0]}</li>
              <li>Comment:{data[1]}</li>
              <li>Rating:{data[2]}</li>
            </ul>
          </div>
        ))}
        {noreview && <p>No Reviews Yet....</p>}
        {addReview && <button className='addButton' onClick={Input} >Add a Review</button>}
        {input && <form>
        <label>Name:</label> <br />
        <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='name' /> <br />
        <label>Comment:</label> <br />
        <input type="text" onChange={(e)=>{setComment(e.target.value)}} placeholder='comment' /> <br />
        <label>Rating:</label>
        <select onChange={(e)=>{setRating(e.target.value)}}>
            <option name="1">1</option>
            <option name="2">2</option>
            <option name="3">3</option>
            <option name="4">4</option>
            <option name="5" selected='selected'>5</option>
        </select> <br />
        {error && <p className='error'>All inputs fields are required!!!</p>}
        <button onClick={AddReview} className='addReview'>Add Review</button>
        </form>}
        
    </div>
    </>
  )
}

export default Reviews