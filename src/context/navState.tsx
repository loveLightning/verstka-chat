import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

interface Props {
    children: React.ReactNode
}

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

const NavState: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
  );
};

NavState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavState;