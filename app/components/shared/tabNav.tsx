import type {ReactElement} from 'react';
import {NavLink} from '@remix-run/react';
import {clsx} from 'clsx';

interface TabNavProps {
  children: ReactElement<TabNavProps>[];
}

interface TabProps {
  to: string;
  displayText: string;
}

function Tab({displayText, to}: TabProps) {
  return (
    <NavLink
      className={({isActive}) => clsx('tab w-full sm:w-auto', {'tab-active': isActive})}
      to={to}
    >
      {displayText}
    </NavLink>
  );
}

function TabNav({children}: TabNavProps) {
  return (
    <div
      className="tabs tabs-boxed flex
                 flex-col items-center bg-inherit
                 sm:flex-row sm:items-end"
    >
      {children}
    </div>
  );
}

export default Object.assign(TabNav, {Tab});
