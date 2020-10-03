import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import Busca from "../";

test("Verifica se existe placeholder", () => {
  const { getByRole } = render(<Busca />);
  expect(getByRole("input").placeholder).toMatch(/Procure por herói/i);
});

test("Verifica se fez a troca do input", () => {
  const { getByRole, getByText } = render(<Busca salvo={true} />);
  fireEvent.change(getByRole("input"), { target: { value: "hulk" } });
  await wait(()=>{
      expect(getByText("hulk")).toBeInTheDocument();
  })
});

test("Verifica se existe lupa no componente", async () => {
  const { getByRole } = render(<Busca />);
  expect(getByRole("img").src).toMatch(/Lupa/i);

});
