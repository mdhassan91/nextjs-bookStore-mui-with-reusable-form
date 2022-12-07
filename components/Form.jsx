import React from "react";
import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import {
  Button,
  Typography,
  FormLabel,
  FormField,
  TextField,
  Box,
} from "@mui/material";

const labelSx = { marginTop: "5px" };

function Form({ data, onSubmit }) {
  const [inputs, setInputs] = useState(
    data
      ? {
          title: data.title,
          author: data.author,
          price: data.price,
          imgUrl: data.imgUrl,
          featured: data.featured,
        }
      : {
          title: "",
          author: "",
          price: "",
          imgUrl: "",
          featured: false,
        }
  );
  const handleChange = (e) => {
    // console.log(">>>>>",inputs);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
     e.preventDefault();
     onSubmit(inputs);
console.log("inputs>>>>>>>",inputs);
  }

  return (
    <div>
      <form
       onSubmit={(e)=>handleSubmit(e)}
        style={{
          width: "50%",
          height: "80%",
          margin: "auto",
          boxShadow: "10px 10px 20px #ccc",
          borderRadius: "10px",
        }}
      >
        <Typography
          color={"red"}
          fontWeight={"bold"}
          variant={"h5"}
          mt={1}
          padding={2}
          textAlign="center"
        >
          {data ? "Book Detail" : "Add Book"}
        </Typography>
        <Box padding={3} display="flex" flexDirection="column">
          <FormLabel sx={labelSx}>Title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={(e)=>handleChange(e)}
            name="title"
            margin={"normal"}
          />
          <FormLabel sx={labelSx}>Author</FormLabel>
          <TextField
            value={inputs.author}
            onChange={(e)=>handleChange(e)}
            name="author"
            margin={"normal"}
          />
          <FormLabel sx={labelSx}>Image Url</FormLabel>
          <TextField
            value={inputs.imgUrl}
            onChange={(e)=>handleChange(e)}
            name="imgUrl"
            margin={"normal"}
          />
            <FormLabel sx={labelSx}>Price</FormLabel>
          <TextField
            value={inputs.price}
            onChange={(e)=>handleChange(e)}
            name="price"
            margin={"normal"}
          />
          <FormLabel sx={labelSx}>Featured</FormLabel>
          <Checkbox
        
            onChange={(e)=>{
              setInputs((previousSate)=>({
                ...previousSate,
                featured: e.target.checked,
              }))
            }}
            checked={inputs.featured}
            name="featured"
            sx={{ marginRight: "auto" }}
          />
          <Button type="submit" variant="contained"
          //  onClick={handleSubmit}
           > Submit</Button>
        </Box>
      </form>
    </div>
  );
}

export default Form;
