import { EmoteActions } from "@/app/taskStore/emoteSlice";
import { useEmoteDispatch, useEmoteSelector } from "@/app/taskStore/taskStore";
import EmoteEditor from "@/components/emoteEditor/EmoteEditor";
import { TaskPostProcess } from "@/types/tetraApi/TaskPostProcess";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditTaskPage = () => {
  const dispatch = useEmoteDispatch();
  const emoteState = useEmoteSelector((state) => state.emote);

  const [taskDetails, setTaskDetails] = useState<TaskPostProcess>();
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady) return;

    const fetchTaskDetails = async () => {
      const response = await fetch(
        `https://api.tetra.lol/task/${query.taskId}`
      );

      if (!response.ok) {
        console.log("error");
        return;
      }

      const data = (await response.json()) as TaskPostProcess;

      setTaskDetails(data);

      const emoteBuffer = data.emote.data;
      const { animated, name, delay, pages } = data.emote;
      const { id: guildId, name: guildName } = data.guild;

      console.log(guildName);

      //@ts-ignore
      const buffer = Buffer.from(emoteBuffer);

      dispatch(
        EmoteActions.set({
          animated,
          emote: buffer,
          guildId,
          name,
          delays: delay,
          frames: pages,
          guildName,
        })
      );
    };
    fetchTaskDetails();
  }, [query, isReady]);

  if (!taskDetails) return <p>Loading...</p>;

  return (
    <main className="flex flex-col gap-20 mt-6 min-h-screen">
      <EmoteEditor taskDetails={taskDetails} />
    </main>
  );
};

export default EditTaskPage;
