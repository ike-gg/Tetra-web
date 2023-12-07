export type SupportedEmotesOrigin =
  | "discord"
  | "7tv"
  | "twitch"
  | "bttv"
  | "ffz";

export interface TetraApiEmote {
  id: string;
  name: string;
  animated: boolean;
  origin: SupportedEmotesOrigin;
  author: string;
  data: Buffer;
  finalData: Buffer;
  file: {
    url: string;
    preview: string;
  };
  delay: number[];
  pages: number;
}
