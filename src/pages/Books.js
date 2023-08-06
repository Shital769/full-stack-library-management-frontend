import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { Container, Row } from "react-bootstrap";

const Books = () => {
  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookList />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
