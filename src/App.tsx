import { Route, Routes } from "react-router-dom";
import { Fragment} from "react";
import './App.css';
import { HomeModule } from "./pages/HomeContent/views";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomeModule />} />
        {/* <Route path='/about-us' element={<AboutUsModule />} />
        <Route path='/class-details' element={<ClassDetailsModule />} />
        <Route path='/services' element={<ServicesModule />} />
        <Route path='/team' element={<TeamModule/>} />
        <Route path='/contact' element={<ContactUsModule />} />
        <Route
          path="*"
          element={<PageNotFoundModule />}
        /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
