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
    <div className="hidden sm:navbar bg-light-green text-dark-green shadow-md">
      <div className="flex-1 pl-8">
        <img className="h-14 w-auto" src="/logo.webp" alt="Bearded face wearing glasses" />
      </div>
      <div className="flex-none pr-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className="text-dark-green hover:bg-dark-green hover:text-white rounded-md px-3 py-2 text-sm font-medium mr-3"
          >
            {item.name}
          </NavLink>
        ))}
        <label className="swap swap-rotate hover:text-white">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleDarkMode} />

          <SunIcon className="swap-on fill-current w-6 h-6" />
          <MoonIcon className="swap-off fill-current w-6 h-6" />
        </label>
        <label className="swap swap-flip ml-3 hover:text-white">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleLanguage} />

          <span className="swap-on">En</span>
          <span className="swap-off">Fr</span>
        </label>
      </div>
    </div>
  );
}
