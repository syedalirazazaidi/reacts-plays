import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api/config";
import { TaskType, TTask } from "../types/interface";
import { Heading, VStack } from "@chakra-ui/react";
import TodoCard from "./todoCard";

function AllTodos() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setTodo(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!todo.length) {
    <p>Loading..</p>;
  }
  return (
    <VStack>
      <ul>
        {todo.map((data: TTask) => (
          <TodoCard dataProps={data} />
        ))}
      </ul>
    </VStack>
  );
}

export default AllTodos;
