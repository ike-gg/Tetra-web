import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";
import NavbarAnchor from "./NavbarAnchor";

const Navbar = () => {
  const BOT_INVITE_LINK =
    "https://discord.com/api/oauth2/authorize?client_id=1029899066911490158&permissions=413390915648&scope=applications.commands%20bot";

  const links = [
    { name: "Support", href: "https://discord.com/invite/dNqBstzs4p" },
    { name: "GitHub", href: "https://github.com/ike-gg/tetra" },
    { name: "Dashboard", href: "", label: "upcoming" },
  ];

  return (
    <nav className="sticky top-2 backdrop-blur-md z-30 bg-black/80 rounded-xl md:m-2 p-4 md:p-6 md:px-8 flex justify-between items-center">
      <Heading>Tetra</Heading>
      <div className="hidden md:flex gap-6 font-normal text-lg">
        {links.map((link) => (
          <NavbarAnchor key={link.name} {...link} />
        ))}
      </div>
      <div>
        <Button href={BOT_INVITE_LINK}>Invite bot</Button>
      </div>
    </nav>
  );
};

export default Navbar;
