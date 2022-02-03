import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './index.scss';

type MenuRoute = {
  label: string;
  path: string;
};

export type MenuProps = {
  className?: string;
  routes: MenuRoute[];
};

const Menu: React.FC<MenuProps> = ({
  className,
  routes,
}) => (
  <nav className={classNames(className, 'menu')}>
    {routes.map(({ label, path }) => (
      <NavLink key={path} to={path} className="menu__link" activeClassName="menu__link--active">{label}</NavLink>
    ))}
  </nav>
);

export default Menu;
