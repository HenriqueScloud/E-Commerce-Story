
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { useContext } from "react";
import { TodoContext } from "../providers/TodoContext";
export function HomePage(){
  const { Theme } = useContext(TodoContext);
  const html = document.querySelector("html");

  Theme == false
    ? html.classList.add("darkMode")
    : html.classList.remove("darkMode");

  return (
    <main>
      <Header />
      <h1>banner</h1>
      <Main />
      <h1>sobre</h1>
      <h1>footer</h1>
    </main>
  );

}