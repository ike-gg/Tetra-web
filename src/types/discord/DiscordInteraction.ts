export interface DiscordInteraction {
  channel: {
    name: string;
  };
  channelId: string;
  id: string;
  user: {
    avatarURL: string;
    tag: string;
    discriminator: string;
    username: string;
    id: string;
  };
}
