import React from 'react';
import Bio from './SidebarComponents/Bio'
import Tags from './SidebarComponents/Tags';
import LatestPosts from './SidebarComponents/LatestPosts';

const Sidebar = ({ path }) => {

  return (
    <aside>
      {path !== '/about' && <Bio />}
      <LatestPosts />
      <Tags />
    </aside>
  )
};

export default Sidebar;