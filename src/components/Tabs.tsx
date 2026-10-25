import React, { useRef, useState, ReactNode, KeyboardEvent } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

const idFor = (label: string) => label.toLowerCase().replace(/\s+/g, '-');

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectTab = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  // Arrow keys, Home and End move between tabs (WAI-ARIA tabs pattern).
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = children.length - 1;
    const next: Record<string, number> = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    };
    if (e.key in next) {
      e.preventDefault();
      selectTab(next[e.key]);
    }
  };

  return (
    <div className='w-[90%] m-auto'>
      <div
        role='tablist'
        aria-label='Projects'
        className='flex border-b border-secondary_text justify-center'
      >
        {children.map((child, index) => {
          const id = idFor(child.props.label);
          const selected = index === activeIndex;
          return (
            <button
              key={id}
              ref={(el) => (tabRefs.current[index] = el)}
              type='button'
              role='tab'
              id={`tab-${id}`}
              aria-selected={selected}
              aria-controls={`panel-${id}`}
              tabIndex={selected ? 0 : -1}
              className={`px-8 ${
                selected
                  ? 'border-b-2 border-primary_yellow !text-primary_yellow'
                  : ''
              }  text-secondary_text font-medium py-2`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleKeyDown}
            >
              {child.props.label}
            </button>
          );
        })}
      </div>
      <div className='py-12'>
        {children.map((child, index) => {
          const id = idFor(child.props.label);
          return (
            <div
              key={id}
              role='tabpanel'
              id={`panel-${id}`}
              aria-labelledby={`tab-${id}`}
              hidden={index !== activeIndex}
            >
              {index === activeIndex && child.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className='hidden'>{children}</div>;
};

export { Tabs, Tab };
