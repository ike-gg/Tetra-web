import { useRouter } from "next/router";
import { useEffect } from "react";

const AuthDashboard = () => {
  const { query, isReady } = useRouter();

  const { code } = query;

  useEffect(() => {
    if (!isReady) return;

    const fetchGuilds = async () => {
      const request = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
          authorization: `Bearer ${code}`,
        },
      });
      const data = await request.json();

      console.log(data);
    };

    fetchGuilds();
  }, [isReady]);

  return <div>authorising...</div>;
};

export default AuthDashboard;
