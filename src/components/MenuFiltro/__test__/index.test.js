import React from "react";
import { render,  } from "@testing-library/react";
import MenuFiltro from "..";

test("Verifica a quantidade", () => {
  const { getByText } = render(<MenuFiltro tamanho={20} />);
  expect(getByText(/Encontrados 20 heróis/i)).toBeInTheDocument();
});
