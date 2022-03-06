import { Link } from 'remix';

const links = [
  {
    to: '/',
    title: 'Me',
  },
  {
    to: '/projects',
    title: 'Projects',
  },
  {
    to: '/stack',
    title: 'Tech Stack',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
  {
    to: '/blogs',
    title: 'Blogs',
  },
];

const SideNav: React.FC = (_props) => {
  return (
    <nav className="fixed z-9 px-4 h-full flex flex-col bg-[#202020] w-2 overflow-x-hidden border-0 border-r-1 border-solid border-[#e41749] hover:w-xs">
      <ul className="relative py-4 flex flex-col space-y-4 top-[61px]">
        {links.map((link) => (
          <li key={link.to} className="my-0">
            <Link className="hover:underline text-white" to={link.to}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
