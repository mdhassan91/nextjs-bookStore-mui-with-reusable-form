import React from "react";
import { useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

import {
  Button,
  Typography,
  FormLabel,
  FormField,
  TextField,
  Box,
} from "@mui/material";
import { useStateContext } from "../context/StateContext";

const labelSx = { marginTop: "5px" };

function Login() {
  const { login } = useStateContext();
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  login;
  const handleChange = (e) => {
    // console.log(">>>>>",inputs);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(">>>>>", inputs);
    login(inputs);
    router.push('/')
  }

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
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
          Login Page
        </Typography>
        <Box padding={3} display="flex" flexDirection="column">
          <FormLabel sx={labelSx}>Email</FormLabel>
          <TextField
            value={inputs.email}
            onChange={(e) => handleChange(e)}
            name="email"
            margin={"normal"}
          />
          <FormLabel sx={labelSx}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            margin={"normal"}
          />
   



          <Button
            type="submit"
            variant="contained"
            //  onClick={handleSubmit}
          >
            Submit
          </Button>
          <br/>
        <Link href={`/auth/register`}>
        <Button>
          Create Account
        </Button>
        </Link>
        </Box>
      </form>
    </div>
  );
}

export default Login;
