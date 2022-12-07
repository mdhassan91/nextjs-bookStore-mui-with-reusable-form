import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Box, Tabs, Toolbar, Tab, Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useStateContext } from "../context/StateContext";

function Navbar() {
  const router = useRouter();
  const { logout } = useStateContext();
  const [user, setUser] = useState({
    isAdmin:false
  });
  // const {user,setUser} = useStateContext();
  useEffect(() => {
    // Perform localStorage action
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const handleLogout = () => {
    logout();
    router.push("/auth/login");

    console.log(user);
  };
  const handleUser = () => {
    console.log(user);
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "black" }}>
      <Toolbar>
        <MenuBookIcon sx={{ fontSize: "26px" }} />
        <Box display="flex" margin={"auto"}>
          {
            <>
              <Link href={`/`}>
                <Button color="inherit">Home</Button>
              </Link>
              {user ? (
                <Link href={`/books/add`}>
                  <Button color="inherit" onClick={handleUser}>
                    Add New Product
                  </Button>
                </Link>
              ):""}

              <Button type="button" onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </>
            // : (
            //   <>
            //     <Link href={`/auth/login`}>
            //       <Button color="inherit">Login</Button>
            //     </Link>

            //     <Link href={`/auth/register`}>
            //       <Button color="inherit">Register</Button>
            //     </Link>
            //   </>
            // )
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

{
  /* <Tabs textColor="inherit" onChange={handleChange} value={value}>
<Tab label="Home" />

<Tab label="All Book" />
<Tab label="Add New Product" />

</Tabs> */
}

// const [value, setValue] = useState(0);
// const handleChange = (e, val) => {
//   setValue(val);
//   if (val === 0) {
//     router.push(`/`);
//   } else if (val == 1) {
//     router.push("/books");
//   } else if (val == 2) {
//     router.push("/books/add");
//   }
// };
