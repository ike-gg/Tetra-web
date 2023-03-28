export interface TetraApiEmote {
  animated: boolean;
  author?: string;
  data: {
    type: "Buffer";
    data: any;
  };
  id: string;
  name: string;
  origin: string;
  preview: string;
  delay: number[];
  pages: number;
}
