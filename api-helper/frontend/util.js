import axios from "axios";

export const getAllBooks=async()=>{
    const res=await axios.get("http://localhost:3000/api/book");
    if(res.status!==200) {
        return new Error("Error getting all books");
    }
    const data=await res.data.books
    return data;
}

export const getFearturedBooks=async()=>{
    const books=await getAllBooks();
    if(books.length==0) {
        return [];
    }
    const featuredBooks=books.filter(book=>book.featured==true);
    return featuredBooks;
}