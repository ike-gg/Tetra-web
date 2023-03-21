export interface Feature {
  id: string;
  height: number;
  name: string;
  shortDesc: string;
  longDesc: string[];
  command?: string;
  videoUrl?: string;
  label: string;
}

const featuresData: Feature[] = [
  {
    id: "addemotelink",
    height: 20,
    label: "command",
    name: "Add emote (by link)",
    shortDesc: "Add emote using its identificator or link",
    longDesc: [
      "To add emote using link from 7TV you need a reference to it, like ID or URL. It's really easy to obtain. Just visit 7tv.app page and select emote you'd like to add to your server. Bot should accept the reference in many variants, but it must include individual ID (which is included in URL's)\n\nThere's also option to copy emote reference directly from twitch chat, just right click on emote and click *Copy image address*.",
      "To add emote uasdfasdfeed a reference to it, like ID or URL. It's really easy to obtain. Just visit 7tv.app page and select emote you'd like to add to your server. Bot should accept the reference in many variants, but it must include individual ID (which is included in URL's)\n\nThere's also option to copy emote reference directly from twitch chat, just right click on emote and click *Copy image address*.",
      "To add emote using lasdfit must include individual ID (which is included in URL's)\n\nThere's also option to copy emote reference directly from twitch chat, just right click on emote and click *Copy image address*.",
    ],
    videoUrl:
      "https://cdn.discordapp.com/attachments/1087185070583980093/1087191303286181968/bylink.mp4",
  },
  {
    id: "addemotename",
    height: 16,
    label: "command",
    name: "Add emote (by name)",
    shortDesc: "Add emote using its name",
    longDesc: ["heheh"],
    videoUrl:
      "https://cdn.discordapp.com/attachments/1087185070583980093/1087225203702108211/byname.mov",
  },
  {
    id: "tiktok",
    height: 22,
    name: "TikTok",
    shortDesc: "Send plain video extracted from provided link.",
    longDesc: ["heheh"],
    label: "EXPERIMENTAL",
    videoUrl:
      "https://cdn.discordapp.com/attachments/1087185070583980093/1087191303286181968/bylink.mp4",
  },
  {
    id: "addemotechannel",
    height: 18,
    label: "command",
    name: "Add emote (by channel)",
    shortDesc: "Fetch 7tv set emotes from channels",
    longDesc: ["heheh"],
    videoUrl:
      "https://cdn.discordapp.com/attachments/1087185070583980093/1087191303286181968/bylink.mp4",
  },
  {
    id: "addsubemote",
    height: 24,
    label: "command",
    name: "Add sub emote (twitch)",
    shortDesc: "Fetch sub emotes from twitch channel.",
    longDesc: ["heheh"],
    videoUrl:
      "https://cdn.discordapp.com/attachments/1087185070583980093/1087191303286181968/bylink.mp4",
  },
  {
    id: "webedit",
    height: 18,
    name: "Edit emotes through website",
    shortDesc: "Expand possibilites with web version of tetra",
    longDesc: [
      "Sometimes automatically optimising just doesnt work. There are few factors about gifs and their sizes- colors, resolution and length. With Tetra you will have controll of everything.",
    ],
    label: "coming later",
  },
];

export default featuresData;
