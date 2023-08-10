import axios from "axios";

const baseApiUrl =
  process.env === "production" ? "/api/v1" : "http://localhost:8000/api/v1";

const userEndPoint = baseApiUrl + "/user";
const bookEndPoint = baseApiUrl + "/book";
const transactionEndPoint = baseApiUrl + "/transaction";

//USER

//get user id
const getUserId = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    return user?._id;
  }
  return;
};

//create new user
export const postNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userEndPoint, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userEndPoint + "/login", userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//update password
export const updatePassword = async (passInfo) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.patch(
      userEndPoint + "/password-update",
      passInfo,
      {
        headers: {
          Authorization: userId,
        },
      }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//BOOK

//add books
export const addBook = async (bookInfo) => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      };
    }
    const { data } = await axios.post(bookEndPoint, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//get books
export const getBooks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.get(bookEndPoint, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const borrowBook = async (bookId) => {
  console.log("borrowing");
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      };
    }

    const { data } = await axios.get(
      bookEndPoint + "/borrow",
      { bookId },
      {
        headers: {
          Authorization: userId,
        },
      }
    );

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//delete books
export const deleteBook = async (bookId) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      };
    }

    const { data } = await axios.delete(bookEndPoint, {
      data: { bookId },
      headers: { Authorization: userId },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// get borrowedBooks
export const getBorrowedBooks = async () => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      };
    }
    const { data } = await axios.get(bookEndPoint + "/boorrowedBooks", {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// return books
export const returnBook = async (bookId) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.patch(
      bookEndPoint + "/return",
      { bookId },
      {
        headers: {
          Authorization: userId,
        },
      }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Transaction

export const getAllTransactions = async () => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "Please login first!",
      };
    }
    const { data } = await axios.get(transactionEndPoint, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
