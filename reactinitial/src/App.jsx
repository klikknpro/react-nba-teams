import React, { useEffect, useState } from "react";
import http from "axios";
import Team from "./components/Team";

const App = () => {
  const [teams, setTeams] = useState("");

  const load = async() => {
    const response = await http.get("https://demoapi.com/api/teams");
    setTeams(response.data);
  };

  useEffect(() => {
    load();
  },[]);


  return (
    <div>
      <h1>NBA teams - all star voting</h1>
      {!teams ? "Loading teams..." : teams.map((team, i) => (
        <Team team={team} key={i}/>
      ))}
    </div>
  )
}

export default App
