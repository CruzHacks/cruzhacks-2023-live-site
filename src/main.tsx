import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { styled } from "@mui/material"
import { SnackbarProvider } from "notistack"
import App from "./App"
import "./index.css"

const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItem-contentRoot {
    background-color: #1b1b37;
  }
`
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledSnackbarProvider maxSnack={3}>
        <App />
      </StyledSnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
