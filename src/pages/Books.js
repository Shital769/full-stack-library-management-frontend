import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { Container, Row } from "react-bootstrap";
import { getBooks } from "../helpers/AxiosHelpers";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    const response = await getBooks();

    setBooks(response.books);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);
  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookList books={books} fetchBooks={fetchAllBooks} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
