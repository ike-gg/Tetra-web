import { useEmoteSelector } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import { API_URL } from "@/constants";
import { useRouter } from "next/router";
import { FC } from "react";
import Label from "../ui/label/Label";

interface Props {
  taskId: string;
}

const SubmitEmote: FC<Props> = ({ taskId }) => {
  const router = useRouter();

  const { guildId, modifiedEmote, name, hasExceededLimit, guildName } =
    useEmoteSelector((state) => state.emote);

  const submitEmote = async () => {
    const response = await fetch(`${API_URL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guildId,
        emote: modifiedEmote,
        name,
        taskId,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Something went wrong");
      return;
    }

    router.replace("/");
  };

  return (
    <div className="flex flex-col max-w-md">
      <Label>Submit emote</Label>
      <div className="flex gap-2">
        <h6>Name:</h6>
        <p>{name}</p>
      </div>
      <div className="flex gap-2">
        <h6>Guild:</h6>
        <p>{guildName}</p>
      </div>
      {hasExceededLimit && (
        <p className="text-red-500">Emote exceeds the limit of size.</p>
      )}
      <Button
        onClick={submitEmote}
        disabled={hasExceededLimit}
        className="mt-auto"
      >
        {"Submit " + name + " to " + guildName}
      </Button>
    </div>
  );
};

export default SubmitEmote;
