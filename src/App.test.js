import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { waitFor, fireEvent, getByTestId } from "@testing-library/react";
import React from 'react';
import expect from 'expect';
import Todolist from './Todolist';
import axios from "axios";

let container = null;
jest.mock("axios");

const todos = [
  {
    userId: 1,
    id: 1,
    title: "titleTest",
    completed: false,
  },
];

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  axios.get.mockResolvedValue({
    data: todos,
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders component with or without todos", () => {

  act(() => {
    render(
      <Todolist
      todos={[]}
      onDelete={() => {}}
      onCompleted={() => {}}
      />,
      container
    );
  });
  expect(container.textContent).not.toContain(todos[0].title);

  act(() => {
    render(
      <Todolist
      todos={todos}
      onDelete={() => {}}
      onCompleted={() => {}}
      />,
      container
    );
  });

  expect(container.textContent).toContain(todos[0].title);
});

it("possible to remove todo",() => {

  act(() => {
    render(
      <Todolist
      todos={todos}
      onDelete={() => {}}
      onCompleted={() => {}}
      />,
      container
    );
  });
  waitFor(() => {
    expect(container.textContent).toContain(todos[0].title);
    document.getElementsByClassName("DeleteTodo")[0].click();
    expect(container.textContent).not.toContain(todos[0].title);
  })
})

it("possible to complete todo",() => {

  act(() => {
    render(
      <Todolist
      todos={todos}
      onDelete={() => {}}
      onCompleted={() => {}}
      />,
      container
    );
  });
  waitFor(() =>{
    expect(todos[0].completed).toBe(false);
    fireEvent.doubleClick(getByTestId('todo'))
    expect(todos[0].completed).toBe(true);
  })
})