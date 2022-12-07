import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStateContext } from "../context/StateContext";

function BookItem({ title, id, imgUrl, price, author, featured }) {
  const { deleteBook } = useStateContext();
  const [user, setUser] = useState({
    isAdmin:false
  });
  // const {user,setUser} = useStateContext();
  useEffect(() => {
    // Perform localStorage action
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleDeleteBook = () => {
    deleteBook(id);
  };
  const handleUser = () => {
    console.log(user);
  };
  return (
    <div>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 3,
          boxShadow: "5px 5px 10px #ccc",
        }}
      >
        <div style={{ width: "100%", height: "500%", position: "relative" }}>
          {featured && (
            <div
              style={{
                position: "absolute",
                top: 0,
                backgroundColor: "black",
                color: "white",
                padding: "2px",
                width: "70px",
              }}
            >
              Featured
            </div>
          )}
          <img src={imgUrl} alt={title} width="100%" height="30%" />
        </div>

        <CardContent sx={{ width: "100%", height: "500%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
        <CardActions>
          {user.isAdmin ? (
            <>
              <Link href={`books/${id}`}>
                <Button size="small" sx={{ color: "red" }}>
                  Edit
                </Button>
              </Link>

              <Button
                onClick={handleDeleteBook}
                size="small"
                sx={{ color: "red" }}
              >
                Delete
              </Button>
            </>
          ) : (
            <Button
              onClick={handleUser}
              size="small"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              Add to Cart
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default BookItem;
