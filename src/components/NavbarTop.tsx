import { NavLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function NavbarTop({
  navigation,
  toggleDarkMode,
  toggleLanguage,
}: {
  navigation: { name: string; href: string }[];
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
}) {
  return (
    <div className="hidden sm:navbar">
      <div className="flex-1 pl-8">
        <span className="text-xl">Title</span>
      </div>
      <div className="flex-none pr-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium mr-3"
          >
            {item.name}
          </NavLink>
        ))}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleDarkMode} />

          <SunIcon className="swap-on fill-current w-6 h-6" />
          <MoonIcon className="swap-off fill-current w-6 h-6" />
        </label>
        <label className="swap swap-flip ml-3">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleLanguage} />

          <span className="swap-on">En</span>
          <span className="swap-off">Fr</span>
        </label>
      </div>
    </div>
  );
}
