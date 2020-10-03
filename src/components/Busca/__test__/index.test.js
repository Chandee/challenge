import React from "react";
import { fireEvent, getByText, render, wait } from "@testing-library/react";
import Busca from "../";

test("Verifica se existe placeholder", () => {
  const { getByPlaceholderText } = render(<Busca />);
  expect(getByPlaceholderText("Procure por heróis")).toBeInTheDocument();
});

test("Verifica se fez a troca do input", () => {
  const { getByPlaceholderText, getByText } = render(<Busca />);

  fireEvent.change(getByPlaceholderText("Procure por heróis"), {
    target: { value: "hulk" },
  });
  expect(getByPlaceholderText("Procure por heróis").value).toBe("hulk");
});

test("Verifica se existe lupa no componente", async () => {
  const { getByRole } = render(<Busca />);
  expect(getByRole("img").src).toMatch(/Lupa/i);
});
