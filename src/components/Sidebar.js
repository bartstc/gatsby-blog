import React from 'react';
import Bio from './SidebarComponents/Bio'
import Tags from './SidebarComponents/Tags';

const Sidebar = ({ path }) => {

  return (
    <aside>
      {path !== '/about' && <Bio />}
      <Tags />
    </aside>
  )
};

export default Sidebar;