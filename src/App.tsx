import { Box, CssBaseline, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Material UI
import { LinearProgress } from '@mui/material';
// Folders
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/Movies/MovieDetails';
import Navbar from './components/Drawer/Navbar';
import Sidebar from './components/Drawer/Sidebar';
import { StoreProvider } from './store/Store';

import "./style/app.css"


const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie-detail/:id" element={<MovieDetails />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </StoreProvider>
  )
}

export default App

