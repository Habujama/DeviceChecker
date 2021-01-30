import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders login form", () => {
  render(<App />)
  const loginText = screen.getByText("Přihlaste se, prosím")
  expect(loginText).toBeInTheDocument()
})
