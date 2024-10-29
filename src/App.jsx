import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import SearchResultPage from "./pages/Search-result";


const Layout=()=>{
  

 
  return (
    <main >
     
      <Outlet />
    </main>
  )
}


  const App = () => {
   
    
    const router = createBrowserRouter([
      {
        path: "/",
        element:<Layout />,
        children:[
          {
            path: "/",
            element:<Home />
          }, {
            path: "/search-result",
            element:<SearchResultPage />
          },
        
        ]
      },
      // {
      //   path: "/signin",
      //   element:<Signin/>,
        
      // },
     
    ]);
    return (
      <div  >
        <RouterProvider router={router} />
      </div>
    );
  }



export default App
