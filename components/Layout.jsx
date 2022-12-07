import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
function Layout({ children }) {
  const router = useRouter();
  let user
useEffect(() => {
 user=localStorage.getItem("user");
}, [])

   const showHeader = router.pathname === "/auth/login" ? false : true;
 const routeHandle=!user || router.push('/auth/login')

  return (
    <>
      <Head>
        <title>Book Store</title>
      </Head>

      <div>
        <Box>
          <header>
            {/* {user?  <Navbar /> :(routeHangler())}    */}
            {showHeader && <Navbar />}
            {/* <Navbar/> */}
           {/* {routeHandle && <Navbar />} */}
          </header>
          <main> {children}</main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </div>
    </>
  );
}

export default Layout;

{
  /* <Box >
<header>
  <Navbar />
</header>
<main>{children}</main>
<footer>
  <Footer />
</footer>
</Box> */
}
