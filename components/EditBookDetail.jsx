import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { useState } from "react";
import Form from "./Form";

function EditBookDetail() {
  const [book, setbook] = useState();
  const { getBookById,updateBook } = useStateContext();
  const router = useRouter();
  console.log(router.query.id);
  const id = router.query.id;

  useEffect(() => {
    getBookById(id)
      .then((data) => setbook(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(book);
  const getFormData = (data) =>{
updateBook(id,data);
  }

  return( <div>
    {book? <Form data={book} onSubmit={getFormData}/>:"" }
    </div>);
}

export default EditBookDetail;
