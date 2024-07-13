import React, { useState, ReactNode, MouseEvent } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className='w-[90%] m-auto '>
      <div className='flex border-b border-gray-300 justify-center'>
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`px-2 ${
              activeTab === child.props.label
                ? 'border-b-2 border-purple-500'
                : ''
            }  text-secondary_text font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className='py-12'>
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div className='hidden'>{children}</div>;
};

export { Tabs, Tab };
