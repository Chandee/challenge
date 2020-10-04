import React from "react";
import { queryByText, render } from "@testing-library/react";
import WrapperQuadrinho from "../";

test("Verifica verifica as infomações do heroi", () => {
  const { getByText } = render(<WrapperQuadrinho />);
  expect(getByText(/Ultimos lançamentos/i)[0]).toBeInTheDocument();
});
