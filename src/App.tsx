import { createElement } from "react";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/route";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./pages/ProtectedRoute";
import { DataUserProvider } from "./context/useDataUser";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "./components/theme-provider";
import { Cloudinary } from "@cloudinary/url-gen";
function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'dv6jkcl0z'}});
  const router = createBrowserRouter(routes.map((route) =>({
    ...route,
    element : route.isProtected ? <ProtectedRoute children={createElement(route.element)}/>: createElement(route.element),
    children:route.children?.map((child) =>({
      ...child,
      element: child.isProtected ? <ProtectedRoute children={createElement(child.element)}/>: createElement(child.element)
    }))
    }))
  );


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DataUserProvider>
          <MantineProvider>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
              <RouterProvider router={router} />
            </ThemeProvider>
          </MantineProvider>
        </DataUserProvider>
      </PersistGate>
    </Provider>
      
      
  );
}

export default App
