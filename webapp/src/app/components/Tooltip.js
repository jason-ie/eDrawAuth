import React, { useState } from 'react';

function Tooltip({ children, content, position = 'right'}) {
    const [visible, setVisible] = useState(false);
  
    // Set tooltip position classes based on the `position` prop
    let tooltipPositionClasses = 'left-1/2 -translate-x-1/2 bottom-full mb-2';
    if (position === 'bottom') {
      tooltipPositionClasses = 'left-1/2 -translate-x-1/2 top-full mt-2';
    } else if (position === 'left') {
      tooltipPositionClasses = 'right-full mr-2 top-1/2 -translate-y-1/2';
    } else if (position === 'right') {
      tooltipPositionClasses = 'left-full ml-2 top-1/2 -translate-y-1/2';
    }
  
    return (
      <div
        className="relative flex items-center"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
        {visible && (
          <div
            className={`absolute z-10 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg whitespace-nowrap ${tooltipPositionClasses}`}
            style={{ maxWidth: 'fit-content' }}
          >
            {content}
          </div>
        )}
      </div>
    );
  }

  export default Tooltip;