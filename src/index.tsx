import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  </ChakraProvider>,
  document.getElementById("root"),
)

serviceWorker.unregister()

reportWebVitals()
