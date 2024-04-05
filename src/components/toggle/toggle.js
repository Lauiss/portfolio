import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Toggle = ({ condition, onToggle, lightIcon, darkIcon }) => {
  const handleClick = () => {
    onToggle(!condition);
  };

  return (
    <div className="toggle-icon">
      <FontAwesomeIcon icon={condition ? lightIcon : darkIcon} onClick={handleClick}/>
    </div>
  );
};

export default Toggle;