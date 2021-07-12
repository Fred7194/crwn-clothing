import React from 'react';
import './directory.styles.scss';
import sections from './directory.data';
import MenuItem from '../menuitem/MenuItem';

const Directory = () => {
  return (
    <div className='directory-menu'>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
