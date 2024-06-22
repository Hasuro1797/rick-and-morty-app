import { Route, Routes } from "react-router-dom";
// import useDarkMode from "./hooks/useDarkMode";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import routes from "./utils/routes";
import Error404 from "./pages/Error404";
import LocationPage from "./pages/LocationPage";
import CharacterPage from "./pages/CharacterPage";
import EpisodesPage from "./pages/EpisodesPage";


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>} path={routes.home} />
        <Route index element={<CharacterPage/>} path={`${routes.character}`} />
        <Route element={<LocationPage />} path={routes.location} />
        <Route element={<EpisodesPage />} path={routes.episodes} />
        <Route element={<Error404 />} path={routes.error} />
      </Route>
    </Routes>
  )
}

export default App
