import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Completed Notes</FilterLink>
    {' '}
    <FilterLink>Active Notes</FilterLink>
  </div>
)

export default Footer;
