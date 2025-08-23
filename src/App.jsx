import "./App.css";
import MainPage from "./components/MainPage";
import MealInfo from "./components/MealInfo";
import MealCards from "./components/MealCards";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
     <Routes>
      <Route path='/'  element={<MainPage/>}/>
      <Route path="/:mealid" element={<MealInfo/>}/>
     </Routes>
  )
}

export default App;
