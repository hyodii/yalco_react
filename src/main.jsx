import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BookProvider>
      <App />
    </BookProvider>
  </BrowserRouter>
)