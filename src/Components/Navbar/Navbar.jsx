import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a className="text-xl sm:text-3xl md:text-4xl lg:text-4xl text-orange-500 font-mono">SneakersBazar</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
              Home
            </Link>
            {user && (
              <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                Dashboard
              </Link>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                  Login
                </Link>
                <Link to="/register" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                  Register
                </Link>
              </>
            )}
            <div className="relative">
              <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                <img className="h-10 w-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile avatar" />
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700">Home</Link>
                </li>
                {user && (
                  <li>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700">Dashboard</Link>
                  </li>
                )}
                {!user && (
                  <>
                    <li>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700">Login</Link>
                    </li>
                    <li>
                      <Link to="/register" className="block px-4 py-2 text-sm text-gray-700">Register</Link>
                    </li>
                  </>
                )}
                {user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-red-700 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
