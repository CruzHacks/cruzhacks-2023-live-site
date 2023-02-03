import React from "react"
import ReactDOM from "react-dom/client"
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory"
import { BrowserRouter } from "react-router-dom"
import { styled } from "@mui/material"
import { SnackbarProvider } from "notistack"
import App from "./App"
import "./index.css"

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENTID, VITE_AUTH0_AUDIENCE } =
  import.meta.env

const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItem-contentRoot {
    background-color: #1b1b37;
  }
`
console.log(window.location.origin)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory
        domain={VITE_AUTH0_DOMAIN || ""}
        clientId={VITE_AUTH0_CLIENTID || ""}
        audience={VITE_AUTH0_AUDIENCE || ""}
        redirectUri={window.location.origin}
      >
        <StyledSnackbarProvider maxSnack={3}>
          <App />
        </StyledSnackbarProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
)
