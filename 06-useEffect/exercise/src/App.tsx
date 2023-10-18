import { useState, useEffect } from "react";
import { fetchBio } from "./api";

export default function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndUpdate = async () => {
      const result = await fetchBio(person);
      setBio(result);
    };

    setBio(null);
    fetchAndUpdate();
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}
