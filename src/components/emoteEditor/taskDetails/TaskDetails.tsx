import { TaskPostProcess } from "@/types/tetraApi/TaskPostProcess";
import { FC } from "react";
import TaskDestination from "./TaskDestination";
import TaskEmote from "./TaskEmote";
import TaskUser from "./TaskUser";

interface Props {
  taskDetails: TaskPostProcess;
}

const TaskDetails: FC<Props> = ({ taskDetails }) => {
  const { emote, guild, interaction, taskId } = taskDetails;
  return (
    <main className="flex gap-4 p-8 rounded-2xl justify-between bg-blackplus-900">
      <TaskUser interaction={interaction} />
      <TaskDestination guild={guild} interaction={interaction} />
      <TaskEmote emote={emote} />
    </main>
  );
};

export default TaskDetails;
