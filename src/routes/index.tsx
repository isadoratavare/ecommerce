import Categories from 'pages/Categories';
import Home from 'pages/Home/Home';
import Reservations from 'pages/Reservations';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  );
};

export default AppRouter;
