import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { Container, Table, Row } from "react-bootstrap";

const Transaction = () => {
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
                <th>Borrowed By</th>
                <th>Borrowed Date</th>
                <th>Returned Date</th>
              </tr>
            </thead>
            <tbody>
              {Transaction?.map((transaction, i) => (
                <tr key={transaction._id} className="text-center">
                  <td>{i + 1}</td>
                  <td style={{ width: "15%" }}>
                    <img
                      src={transaction.borrowedBook.thumbnail}
                      alt="borrowedBook"
                      style={{ width: "35%" }}
                    />
                  </td>
                  <td>{transaction.borrowedBook.title}</td>
                  <td>{transaction.borrowedBook.author}</td>
                  <td>{transaction.borrowedBook.userName}</td>
                  <td>
                    {new Date(transaction.createdAt).toLocaleDateString()}
                  </td>
                  <td
                    className={
                      transaction.returnDate ? "text-success" : "text-danger"
                    }
                  >
                    {transaction.returnDate
                      ? new Date(transaction.returnDate).toLocaleDateString()
                      : "Not returned yet?"}
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

export default Transaction;
