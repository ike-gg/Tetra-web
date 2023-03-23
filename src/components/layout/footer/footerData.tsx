interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  name: string;
  items: FooterLink[];
}

export const footerData: FooterColumn[] = [
  {
    name: "Discord",
    items: [
      {
        name: "Support server",
        href: "https://discord.com/invite/dNqBstzs4p",
      },
      {
        name: "Discord server",
        href: "https://discord.com/invite/dNqBstzs4p",
      },
      {
        name: "Bot invite link",
        href: "https://discord.com/api/oauth2/authorize?client_id=1029899066911490158&permissions=413390915648&scope=applications.commands%20bot",
      },
      {
        name: "Author",
        href: "https://discordapp.com/users/224978978362884096/",
      },
    ],
  },
  {
    name: "GitHub",
    items: [
      {
        name: "Tetra Repo",
        href: "https://github.com/ike-gg/tetra",
      },
      {
        name: "Tetra Web Repo",
        href: "https://github.com/ike-gg/tetra-web",
      },
      {
        name: "Author",
        href: "https://github.com/ike-gg",
      },
    ],
  },
  {
    name: "Legal",
    items: [
      {
        name: "Privacy Policy",
        href: "https://github.com/ike-gg/Tetra/blob/main/privacy-policy.md",
      },
      {
        name: "Terms of Service",
        href: "https://github.com/ike-gg/Tetra/blob/main/terms-of-service.md",
      },
    ],
  },
];
