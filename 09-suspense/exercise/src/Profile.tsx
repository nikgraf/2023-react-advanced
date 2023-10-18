import React from "react";
import useFetch from "./useFetch";

type Profile = { avatar_url: string; login: string };

export const Profile: React.FC = () => {
  const data = useFetch<Profile>("https://api.github.com/users/nikgraf");
  return (
    <div>
      <img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      <div>Username: {data.login}</div>
    </div>
  );
};
