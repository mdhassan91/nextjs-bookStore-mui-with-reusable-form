import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Context = createContext();

export const StateProvider = ({ children }) => {
  const router = useRouter();
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const sendBook = async (data) => {
    const res = await axios.post("http://localhost:3000/api/book", {
      title: data.title,
      author: data.author,
      imgUrl: data.imgUrl,
      price: Number(data.price),
      featured: Boolean(data.featured),
    });
    const sendData = await res.data;
    return sendData;
  };
  const getBookById = async (id) => {
    const res = await axios.get("http://localhost:3000/api/book/" + id);
    if (res.status !== 200) {
      return new Error("Unable to Fetch Book Data");
    }

    const data = await res.data;
    return data.book;
  };

  const updateBook = async (id, data) => {
    console.log("Id from StateContext>>>>>", id);
    const res = await axios.put(`http://localhost:3000/api/book/${id}`, {
      title: data.title,
      author: data.author,
      imgUrl: data.imgUrl,
      price: Number(data.price),
      featured: Boolean(data.featured),
    });
    const updateData = await res.data;
    return updateData;
  };
  const deleteBook = async (id) => {
    console.log("Id to delete from StateContext>>>>>", id);
    const res = await axios.delete(`http://localhost:3000/api/book/${id}`);
    if (res.status !== 200) return new Error("Unable  to  Delete");
    const deleteData = await res.data;
    return deleteData;
  };

  const login = async (data) => {
    const res = await axios.post("http://localhost:3000/api/auth/login", {
      email: data.email,
      password: data.password,
    });
    const userData = await res.data;
    console.log("Login Data >>>>", userData);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  };
  const register = async (data) => {
    const res = await axios.post("http://localhost:3000/api/auth/register", {
      email: data.email,
      password: data.password,
      isAdmin: Boolean(data.isAdmin),
    });
    const registerData = await res.data;
    return registerData;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser([]);
  };
  return (
    <Context.Provider
      value={{
        logout,
        register,
        login,
        deleteBook,
        updateBook,
        getBookById,
        sendBook,
        user,
        setUser,

      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
