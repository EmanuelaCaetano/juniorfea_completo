import React from 'react';

interface RedLineProps {
  fullWidth?: boolean;
}

const RedLine: React.FC<RedLineProps> = ({ fullWidth = true }) => {
  return (
    <div className={`h-2 bg-red-600 rounded-b-full ${fullWidth ? 'w-full' : ''}`} />
  );
};

export default RedLine;
