import NavbarAnchor from "./NavbarAnchor";

const Navbar = () => {
  const links = [
    { name: "Author", href: "" },
    { name: "Support", href: "" },
    { name: "Pricing", href: "" },
  ];

  return (
    <nav className="sticky top-0 backdrop-blur-md z-30 bg-black/80 p-6 flex justify-between items-center">
      <h1 className="font-heading text-4xl">Tetra</h1>
      <div className="hidden md:flex gap-6 font-normal text-lg">
        {links.map((link) => (
          <NavbarAnchor key={link.name} {...link} />
        ))}
      </div>
      <div>
        <p>Project</p>
      </div>
    </nav>
  );
};

export default Navbar;
