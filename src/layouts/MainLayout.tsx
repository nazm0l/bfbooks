import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 px-32">
        <Outlet />
      </div>
    </div>
  );
}