import Heading from "@/components/ui/heading/Heading";
import { footerData } from "./footerData";

const Footer = () => {
  const linksList = footerData.map(({ items, name }) => {
    return (
      <ul key={name} className="flex flex-col gap-2 ">
        <h4 className="font-heading text-lg tracking-wide">{name}</h4>
        {items.map(({ href, name }) => {
          return (
            <li key={name}>
              <a
                target="_blank"
                href={href}
                className="opacity-50 hover:opacity-80"
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  });

  return (
    <footer className="flex flex-col gap-6 p-6 md:p-12 border-4 rounded-2xl border-neutral-900">
      <header className="flex justify-between items-center">
        <Heading>Tetra</Heading>
        <a href="https://github.com/ike-gg" target="_blank">
          by <span className="text-tetra-600">@ike</span>
        </a>
      </header>
      <main className="flex flex-wrap gap-12">{linksList}</main>
    </footer>
  );
};

export default Footer;
