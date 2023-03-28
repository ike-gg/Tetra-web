import { DiscordGuild } from "../discord/DiscordGuild";
import { DiscordInteraction } from "../discord/DiscordInteraction";
import { TetraApiEmote } from "./TetraApiEmote";

export interface TaskPostProcess {
  emote: TetraApiEmote;
  guild: DiscordGuild;
  interaction: DiscordInteraction;
  taskId: string;
}
