import axios from "axios";

const baseApiUrl =
  process.env === "production" ? "/api/v1" : "http://localhost:8000/api/v1";

const userEndPoint = baseApiUrl + "/user";

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
      message: "Please login first.",
    };
  }
};
