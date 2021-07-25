import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menuitem/MenuItem';
import { useSelector } from 'react-redux';

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);
  return (
    <div className='directory-menu'>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
