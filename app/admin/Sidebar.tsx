import {
  FaHome,
  FaClipboardList,
  FaHeart,
  FaCommentDots,
  FaUsers,
  FaSignOutAlt,
} from 'react-icons/fa'; // Importing FontAwesome icons
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64  bg-gray-100 p-4">
      <nav className="flex flex-col space-y-4">
        <Link href="/admin/dashboard">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-100 active:bg-green-200">
            <FaHome className="w-6 h-6 text-gray-600" />
            <span className="text-gray-800">Dashboard</span>
          </div>
        </Link>
        <Link href="/admin/products">
          <div className="flex items-center space-x-2 p-2 rounded-lg bg-green-500 text-white">
            <FaClipboardList className="w-6 h-6" />
            <span>Products</span>
          </div>
        </Link>
        <Link href="/admin/orders">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-100 active:bg-green-200">
            <FaClipboardList className="w-6 h-6 text-gray-600" />
            <span className="text-gray-800">Order Lists</span>
          </div>
        </Link>
        <Link href="/admin/favorites">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-100 active:bg-green-200">
            <FaHeart className="w-6 h-6 text-gray-600" />
            <span className="text-gray-800">Favorites</span>
          </div>
        </Link>
        <Link href="/admin/inbox">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-100 active:bg-green-200">
            <FaCommentDots className="w-6 h-6 text-gray-600" />
            <span className="text-gray-800">Inbox</span>
          </div>
        </Link>
        <Link href="/admin/team">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-100 active:bg-green-200">
            <FaUsers className="w-6 h-6 text-gray-600" />
            <span className="text-gray-800">Team</span>
          </div>
        </Link>
        <Link href="/admin/logout">
          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-green-100 active:bg-green-200">
            <FaSignOutAlt className="w-6 h-6 text-gray-600" />
            <span className="text-gray-800">Logout</span>
          </div>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
