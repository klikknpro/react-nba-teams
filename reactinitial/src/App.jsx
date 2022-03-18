import React, { useEffect, useState } from "react";
import http from "axios";
import { TextField } from "@mui/material";
import Team from "./components/Team";

const App = () => {
  const [teams, setTeams] = useState("");
  const [input, setInput] = useState("");

  const load = async() => {
    const response = await http.get("https://demoapi.com/api/teams");
    setTeams(response.data);
  };

  const filter = (e) => {
    setInput(e);

    if (!input) {
      setTeams("");
      load();
      return;
    };

    let filteredTeams = [];
    for (const team of teams) {
      for (const player of team.franchisePlayers) {
        if (player.name.toLowerCase().includes(input.toLowerCase())) {
          // console.log(player.name, "from", team.name);
          filteredTeams.push(team);
        };
      };
    };
    console.log(filteredTeams);
    setTeams([...filteredTeams]);
  }

  useEffect(() => {
    load();
  },[]);


  return (
    <div>
      <h1>NBA teams - all star voting</h1>
      <TextField onChange={(e) => filter(e.target.value)} value={input} size="small" color="info" label="Filter by team name" variant="filled"/>
      {!teams ? "Loading teams..." : teams.map((team, i) => (
        <Team team={team} key={i}/>
      ))}
    </div>
  )
}

export default App
