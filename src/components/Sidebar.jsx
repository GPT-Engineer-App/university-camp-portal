import { NavLink } from "react-router-dom";
import { FaUsers, FaCogs, FaList, FaBell, FaUserShield } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-gray-200 dark:bg-gray-900 p-4">
      <nav className="space-y-4">
        <NavLink to="/" className="flex items-center space-x-2">
          <FaList />
          <span>Overview</span>
        </NavLink>
        <div>
          <p className="flex items-center space-x-2">
            <FaUsers />
            <span>Society</span>
          </p>
          <div className="ml-4 space-y-2">
            <NavLink to="/excos">EXCOs</NavLink>
            <NavLink to="/beat-cheers">Beat/Cheers</NavLink>
          </div>
        </div>
        <div>
          <p className="flex items-center space-x-2">
            <FaList />
            <span>Content</span>
          </p>
          <div className="ml-4 space-y-2">
            <NavLink to="/groups">Groups</NavLink>
            <NavLink to="/rundown">Rundown</NavLink>
            <NavLink to="/campfire-steps">Campfire Steps</NavLink>
            <NavLink to="/sponsorship">Sponsorship</NavLink>
          </div>
        </div>
        <div>
          <p className="flex items-center space-x-2">
            <FaBell />
            <span>Reminder</span>
          </p>
          <div className="ml-4 space-y-2">
            <NavLink to="/needs">Needs</NavLink>
            <NavLink to="/precaution">Precaution</NavLink>
          </div>
        </div>
        <div>
          <p className="flex items-center space-x-2">
            <FaUserShield />
            <span>Management</span>
          </p>
          <div className="ml-4 space-y-2">
            <NavLink to="/user-groups">User Groups</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;