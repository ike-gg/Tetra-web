import Button from "@/components/ui/button/Button";
import { useEmoteSelector } from "@/app/taskStore/taskStore";
import { useEmoteDispatch } from "@/app/taskStore/taskStore";
import { EmoteActions } from "@/app/taskStore/emoteSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SubmitProcess = () => {
  const { originalEmote } = useEmoteSelector((state) => state.emote);
  const options = useEmoteSelector((state) => state.process);

  const dispatch = useEmoteDispatch();
  const [rateLimit, setRateLimit] = useState(false);
  const [rateLimitCount, setRateLimitCount] = useState(0);

  useEffect(() => {
    if (!rateLimit) return;
    const timeout = setTimeout(() => {
      setRateLimit(false);
    }, 3000);
    const interval = setInterval(() => {
      setRateLimitCount((prev) => prev - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [rateLimit]);

  const handleSubmit = async () => {
    if (!originalEmote) return;
    const response = await fetch("https://api.tetra.lol/buffer/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        buffer: originalEmote,
        options,
      }),
    });
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      alert(data.message || "Something went wrong");
      return;
    }

    //@ts-ignore
    const buffer = Buffer.from(data);

    dispatch(EmoteActions.updateBuffer(buffer));

    setRateLimit(true);
    setRateLimitCount(3);
    console.log("everything went well");
  };

  return (
    <section className="flex flex-col justify-end">
      {Object.entries(options).map(([key, value]) => (
        <p key={key}>
          {Array.isArray(value)
            ? `${key}: ${value.join(" - ")}`
            : `${key}: ${value}`}
        </p>
      ))}
      <Button disabled={rateLimit} onClick={handleSubmit}>
        {"Submit process " + (rateLimit ? `(${rateLimitCount})` : "")}
      </Button>
    </section>
  );
};

export default SubmitProcess;
