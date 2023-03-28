import { useEmoteSelector } from "@/app/taskStore/taskStore";
import { TaskPostProcess } from "@/types/tetraApi/TaskPostProcess";
import { FC } from "react";
import DCMessagePreview from "../discord/messagePreview/MessagePreview";
import EmotePlayground from "./emotePlayground/EmotePlayground";
import SubmitEmote from "./SubmitEmote";
import TaskDetails from "./taskDetails/TaskDetails";

interface Props {
  taskDetails: TaskPostProcess;
}

const EmoteEditor: FC<Props> = ({ taskDetails }) => {
  const { modifiedEmote } = useEmoteSelector((state) => state.emote);
  const { avatarURL, username } = taskDetails.interaction.user;
  const { icon, name } = taskDetails.guild;

  return (
    <section className="flex flex-col gap-6 mb-12">
      <TaskDetails taskDetails={taskDetails} />
      <EmotePlayground interaction={taskDetails.interaction} />
      {modifiedEmote && (
        <div className="flex gap-4">
          <DCMessagePreview
            avatar={avatarURL}
            emoteBuffer={modifiedEmote}
            username={username}
            className="grow"
          />
          <SubmitEmote taskId={taskDetails.taskId} />
        </div>
      )}
    </section>
  );
};

export default EmoteEditor;
