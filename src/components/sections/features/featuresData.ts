import { CommandPreview } from "@/components/discord/commandPreview/CommandPreview";

interface CommandDesc {
  label: string;
  command: CommandPreview;
  explanation: {
    value: string;
    text: string;
  }[];
}

export interface Feature {
  id: string;
  height: number;
  name: string;
  shortDesc: string;
  longDesc: (string | CommandDesc)[];
  command?: string;
  videoUrl?: string;
  label: string;
}

const featuresData: Feature[] = [
  {
    id: "addemote",
    height: 24,
    label: "command",
    name: "Add emotes",
    shortDesc: "Add emotes with ease",
    longDesc: [
      "Add emote command splits into 3 subcommands. byname, bylink and bychannel.",
      "Each of them takes on sligtly different values, look at the examples below.",
      {
        label: "by name",
        command: [
          "/addemote byname",
          { name: "name", exampleValue: "peepo", optional: false },
          { name: "ignoretags", exampleValue: "true", optional: true },
        ],
        explanation: [
          {
            value: "byname",
            text: "Subcommand of addemote command. Allows to search for an emote by its name, and select from list of the found emotes.",
          },
          {
            value: "name",
            text: "Name of the emote you looking for.",
          },
          {
            value: "ignoretags",
            text: "Specify whether bot should consider tags when searching for emotes.",
          },
        ],
      },
      {
        label: "by link",
        command: [
          "/addemote bylink",
          {
            name: "link",
            exampleValue: "https://7tv.app/emotes/6042089e77137b000de9e669",
            optional: false,
          },
        ],
        explanation: [
          {
            value: "bylink",
            text: "Subcommand of addemote command, allows to add emotes directly from a reference to it.",
          },
          {
            value: "link",
            text: "Reference ID or URL to the emote.",
          },
        ],
      },
      {
        label: "by bychannel",
        command: [
          "/addemote bychannel",
          {
            name: "channelname",
            exampleValue: "xQc",
            optional: false,
          },
          {
            name: "search",
            exampleValue: "peepo",
            optional: true,
          },
        ],
        explanation: [
          {
            value: "bychannel",
            text: "Subcommand of addemote command, allows to add emotes from the 7TV twitch channel's emotes set.",
          },
          {
            value: "channelname",
            text: "Name of twitch channel.",
          },
          {
            value: "search",
            text: "Filter emote set by this value",
          },
        ],
      },
    ],
    videoUrl: "https://maxcore.s3.eu-central-1.amazonaws.com/addemote+(1).mp4",
  },
  {
    id: "autooptimize",
    height: 16,
    label: "FEATURE",
    name: "Auto optimization",
    shortDesc: "Every emote is automatically optimized if necessary.",
    longDesc: [
      "Tetra when adding an emote checks if it has the right file size, if it is too big, emote is automatically optimized.",
      "Due to the small file size limit for emotes on discord, the final result is not always satisfying.",
      "In the near future we will release a feature that will allow you to manually correct the optimization to make emote looks better.",
    ],
    videoUrl:
      "https://cdn.discordapp.com/attachments/1087185070583980093/1088526069558157312/autoopt.mp4",
  },
  {
    id: "tiktok",
    height: 20,
    name: "TikTok",
    shortDesc: "Send plain video extracted from provided link.",
    longDesc: [
      "Use direct link to tiktok video and the bot responds with plain video without watermark",
      {
        label: "tiktok",
        command: [
          "/tiktok",
          {
            name: "url",
            exampleValue:
              "https://www.tiktok.com/@tiktok/video/7181534058810248490",
            optional: false,
          },
        ],
        explanation: [
          {
            value: "url",
            text: "Direct link to the tiktok video.",
          },
        ],
      },
    ],
    label: "EXPERIMENTAL",
    videoUrl: "https://maxcore.s3.eu-central-1.amazonaws.com/tiktok.mp4",
  },
  {
    id: "scalingopt",
    height: 16,
    label: "FEATURE",
    name: "Fitting options",
    shortDesc: "Choose fitting option for emote",
    longDesc: [
      'While adding an emote, you can choose how it fits best. You can choose from "Stretch to fit" and "Center and crop to fit"',
    ],
    videoUrl: "https://maxcore.s3.eu-central-1.amazonaws.com/scaleop.mp4",
  },
  {
    id: "addtwitchemotes",
    height: 22,
    label: "command",
    name: "Add twitch emotes",
    shortDesc: "Fetch sub emotes from twitch channel.",
    longDesc: [
      "Easily import sub emotes from your favourite twitch channel.",
      {
        label: "add sub emote",
        command: [
          "/addsubemote bychannel",
          { name: "channelname", exampleValue: "pokimane", optional: false },
        ],
        explanation: [
          {
            value: "channelname",
            text: "Name of twitch channel",
          },
        ],
      },
    ],
    videoUrl: "https://maxcore.s3.eu-central-1.amazonaws.com/subemote.mp4",
  },
  {
    id: "webedit",
    height: 18,
    name: "Tetra Panel",
    shortDesc: "Expand possibilites with Tetra Panel",
    longDesc: ["https://panel.tetra.lol 🤭"],
    label: "Check out",
  },
];

export default featuresData;
