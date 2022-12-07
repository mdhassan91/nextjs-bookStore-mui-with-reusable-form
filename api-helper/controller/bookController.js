import Book from "../model/Book";

export const getAllBooks = async (req, res) => {
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    return new Error(error);
  }

  if (!books) {
    return res.status(500).json({ message: "No books found!" });
  }
  if (books.length == 0) {
    return res.status(404).json({ message: "No Books Found!" });
  }
  return res.status(200).json({ books });
};

// export const addBook = async (req, res) => {
//   const { title, author, price, imgUrl, featured } = req.body;
// //   if (
// //     !title &&
// //     title.trim() === "" &&
// //     !author &&
// //     author.trim() === "" &&
// //     !price &&
// //     !imgUrl &&
// //     imgUrl.trim() === ""
// //   ) {
// //     return res.status(404).json({ message: "Invalid Input" });
// //   }
//   let book;
//   try {
//     book = new Book(title, author, price, imgUrl, featured);
//     book = await book.save();
//   } catch (error) {
//     return new Error(error);
//   }
//   if(!book){
//     return res.status(500).json({ message: "Invalid Response" });
//   }
//   return res.status(201).json({ book });
// };

export const addBook = async (req, res) => {
  let book;
  try {
    console.log("Creating Document");
    book = await Book.create(req.body);
    console.log("Book created");
    return res.json({ book });
  } catch (error) {
    console.log("Error creating", error);
    res.json({ error });
  }
};

export const updateBook = async (req, res) => {
  const { title, author, price, imgUrl, featured } = req.body;
  const id = req.query.id;
  console.log(">>>", id);

  let book;
  try {
    console.log("Updating Document");
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      price,
      imgUrl,
      featured,
    });
    console.log("Book updated");
    return res.json({ message: "Book Updated Succesfully" });
  } catch (error) {
    console.log("Error creating", error);
    res.json({ error });
  }
};

export const deleteBook = async (req, res) => {
  const id = req.query.id;
  console.log(">>>", id);

  let book;
  try {
    console.log("Deleting Document");
    book = await Book.findByIdAndRemove(id);
    console.log("Book deleted");
    return res.json({ message: "Book Deleted Succesfully" });
  } catch (error) {
    console.log("Error creating", error);
    res.json({ error });
  }
};

export const getBookById = async (req, res) => {
  const id = req.query.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    return res.status(500).json({ message: "No books found by Id" });
  }
  return res.status(200).json({ book });
};
