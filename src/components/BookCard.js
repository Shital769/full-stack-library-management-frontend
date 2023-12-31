import React from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { borrowBook, deleteBook } from "../helpers/AxiosHelpers";

const BookCard = ({ book, fetchBooks }) => {
  const handleBorrow = async (bookId) => {
    if (bookId) {
      const { status, message } = await borrowBook(bookId);
      status === "success" ? toast.success(message) : toast.warning(message);
    }
  };

  const handleDelete = async (bookId) => {
    if (
      window.confirm(
        "Are youb sure you want to delete this book from the system?"
      )
    ) {
      if (bookId) {
        const { status, message } = await deleteBook(bookId);

        toast[status](message) && fetchBooks();
      }
    }
  };

  return (
    // <Card style={{ width: "18rem", border: "none" }}>
    //   <Card.Img
    //     src={book?.thumbnail}
    //     style={{ width: "50%", margin: "1rem auto" }}
    //   ></Card.Img>
    //   <Card.Body className="text-center">
    //     <Card.Title>{book.title}</Card.Title>
    //     <div className="d-flex gap-2 justify-content-center">
    //       <Button variant="info" onClick={() => handleBorrow(book._id)}>
    //         Borrow
    //       </Button>
    //       <Button
    //         variant="danger"
    //         onClick={() => {
    //           handleDelete(book._id);
    //         }}
    //       >
    //         Delete
    //       </Button>
    //     </div>
    //   </Card.Body>
    // </Card>

    <Card className="book-card">
      <Card.Img variant="top" src={book?.thumbnail} className="book-thumbnail" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <div className="buttons-container">
          <Button variant="info" onClick={() => handleBorrow(book._id)}>Borrow</Button>
          <Button variant="danger" onClick={() => handleDelete(book._id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
