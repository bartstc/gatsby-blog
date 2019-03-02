import React from 'react';
import Bio from './SidebarComponents/Bio'
import LatestPosts from './SidebarComponents/LatestPosts';
import Tags from './SidebarComponents/Tags';
import Newsletter from './SidebarComponents/Newsletter';

const Sidebar = ({ path }) => {

  return (
    <aside>
      {path !== '/about' && <Bio />}
      <LatestPosts />
      <Tags />
      <Newsletter />
    </aside>
  )
};

export default Sidebar;