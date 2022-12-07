import React from 'react'
import BookList from '../../components/BookList';
import axios from "axios";

function BookDeatisl({books}) {
  return (
    <div>
        <BookList data={books} featuredPage={false}/>
    </div>
  )
}

export default BookDeatisl

export const getStaticProps=async()=>{
    const res=await axios.get("http://localhost:3000/api/book");
    console.log(res);
    const books=res.data.books
    
  
    return {
      props: {
       books,
       
  
      }
    }
  
  }