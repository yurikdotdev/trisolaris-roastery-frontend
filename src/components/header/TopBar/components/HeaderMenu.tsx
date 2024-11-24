import { Link } from 'react-router-dom';

export const HeaderLinks = ({
  links,
}: {
  links: { label: string; route: string }[];
}) => {
  return (
    <div className="hidden gap-8 font-inter text-sm font-semibold lg:flex">
      {links.map((link, idx) => (
        <Link
          key={idx}
          to={link.route}
          className="cursor-pointer duration-300 ease-in-out hover:text-custom-accent"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
