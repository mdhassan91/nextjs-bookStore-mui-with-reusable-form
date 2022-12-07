import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";


function BookList({ data, featuredPage }) {
  return (
    <div>
      <Grid padding={1} spacing={2} container>
        {data.map((book) => (
          <Grid
            xs={6}
            sm={4}
            md={3}
            lg={2}
            height={featuredPage?"500px":"400px"}
            width={"100%"}
            item
            key={book._id}
          >
            <BookItem
              title={book.title}
              imgUrl={book.imgUrl}
              featured={book.featured}
              price={book.price}
              id={book._id}
              author={book.author}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BookList;
