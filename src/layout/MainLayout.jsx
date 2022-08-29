import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";


function RoutesLayout() {
  return (
    <Routes>
      <Route>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default RoutesLayout
