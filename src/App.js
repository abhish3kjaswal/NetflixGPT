import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);

export default App;
