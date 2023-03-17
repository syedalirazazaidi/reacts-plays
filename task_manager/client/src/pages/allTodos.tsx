import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api/config";
import { TTask } from "../types/interface";
import { VStack } from "@chakra-ui/react";
import TodoCard from "./todoCard";

function AllTodos() {
  const [todo, setTodo] = useState([]);
  const [renderUI, setRenderUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setTodo(res.data.tasks);
        setRenderUI((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [renderUI]);

  if (!todo.length) {
    <p>Loading..</p>;
  }
  return (
    <VStack>
      <ul>
        {todo.map((data: TTask) => (
          <TodoCard dataProps={data} setRenderUI={setRenderUI} />
        ))}
      </ul>
    </VStack>
  );
}

export default AllTodos;
//
