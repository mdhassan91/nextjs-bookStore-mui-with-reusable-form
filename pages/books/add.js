import React from "react";
import Form from "../../components/Form";
import { useStateContext } from "../../context/StateContext";

function Add() {
  const { sendBook } = useStateContext();
  const getFormsData = (data) => {
    sendBook(data)
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={getFormsData} />
    </div>
  );
}

export default Add;
