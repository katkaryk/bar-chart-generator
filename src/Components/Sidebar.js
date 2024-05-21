import React from 'react';
import '../Styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Sidebar Header
            </div>
            <ul className="sidebar-menu">
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                {/* Add more menu items as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
