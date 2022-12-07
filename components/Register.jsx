import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import Checkbox from "@mui/material/Checkbox";
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

function Register() {
  const router = useRouter();
  const [message, setmessage] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    cpassword: "",

    isAdmin: false,
  });
  const {register}=useStateContext()
  const handleChange = (e) => {
    // console.log(">>>>>",inputs);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setmessage("Password Do Not Match");

    console.log("inputs>>>>>>>", inputs);
    if (inputs.cpassword === inputs.password) {
      const temp = {
        email: inputs.email,
        password: inputs.password,
        isAdmin: inputs.isAdmin,
      };
      setmessage("");
      console.log("temp>>>>>", temp);
      register(temp)
      router.push("/auth/login")

    }
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
          Register
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
          <FormLabel sx={labelSx}>Confirm Password</FormLabel>
          <TextField
            value={inputs.cpassword}
            onChange={(e) => handleChange(e)}
            type="password"
            name="cpassword"
            margin={"normal"}
          />

          <FormLabel sx={labelSx}>For Admin</FormLabel>
          <Checkbox
            onChange={(e) => {
              setInputs((previousSate) => ({
                ...previousSate,
                isAdmin: e.target.checked,
              }));
            }}
            checked={inputs.isAdmin}
            name="isAdmin"
            sx={{ marginRight: "auto" }}
          />
          <p style={{ color: "red" }}>{message}</p>

          <Button
            type="submit"
            variant="contained"
            //  onClick={handleSubmit}
          >
            {" "}
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Register;
