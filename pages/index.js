import Head from 'next/head'
import Image from 'next/image'
import axios from "axios";
import { useStateContext } from '../context/StateContext';
import { getAllBooks, getFearturedBooks } from '../api-helper/frontend/util'
import styles from '../styles/Home.module.css'
import BookList from '../components/BookList';

export default function Home({books,featuredBooks}) {

  console.log(featuredBooks);
  // console.log(books);
  
  
  return (
   <>
   <BookList data={featuredBooks} />
   </>
  )
}


export const getStaticProps=async()=>{
  const res=await axios.get("http://localhost:3000/api/book");
  console.log(res);
  const books=res.data.books
  const featuredBooks=books.filter(book=>book.featured==true)

  return {
    props: {
     books,
     featuredBooks,

    }
  }

}