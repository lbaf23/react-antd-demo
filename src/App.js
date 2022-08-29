import { BrowserRouter } from 'react-router-dom';
import React, {lazy, Suspense} from "react";
import Loading from "./pages/Loading";

import './App.css';


const MainLayout = lazy(() => import('./layout/MainLayout'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
