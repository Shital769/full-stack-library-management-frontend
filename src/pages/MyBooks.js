import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { Button, Container, Row, Table } from "react-bootstrap";
import { getBorrowedBooks, returnBook } from "../helpers/AxiosHelpers";
import {toast} from "react-toastify"

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const fetchBooksBorrowed = async () => {
    const response = await getBorrowedBooks();
    setBooks(response);
  };

  useEffect(() => {
    fetchBooksBorrowed();
  });

  const handleReturn = async (bookId) => {
    if (window.confirm("Are you sure you want to return this Book?")) {
      const { status, message } = await returnBook(bookId);

      status === "success"
        ? toast.success(message) && fetchBooksBorrowed()
        : toast.error(message);
    }
  };

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book, i) => (
                <tr key={book._id} className="text-center">
                  <td>{i + 1}</td>
                  <td style={{ width: "35%" }}>
                    <img
                      src={book.thumbnail}
                      alt="thumbnail"
                      style={{ width: "35%" }}
                    />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleReturn(book._id)}
                    >
                      Return Book
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default MyBooks;
