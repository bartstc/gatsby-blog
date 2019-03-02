import React from 'react';
import Bio from './bio';

const Sidebar = ({ path }) => {

  return (
    <aside>
      {path !== '/about' && <Bio />}
    </aside>
  )
};

export default Sidebar;