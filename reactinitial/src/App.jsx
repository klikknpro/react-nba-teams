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

  // const filter = (filterValue) => {
  //   setInput(filterValue);

  //   if (!filterValue) {
  //     setTeams("");
  //     load();
  //     return;
  //   };

  //   const filteredTeams = teams.filter((team) => (
  //     team.franchisePlayers.some((player) => (
  //       player.name.toLowerCase().includes(filterValue.toLowerCase())
  //     ))
  //   ));

  //   console.log(filteredTeams);
  //   setTeams(filteredTeams);
  // }

  useEffect(() => {
    load();
  },[]);


  return (
    <div>
      <h1>NBA teams - all star voting</h1>
      <TextField onChange={(e) => setInput(e.target.value)} value={input} size="small" color="info" label="Filter by team name" variant="filled"/>
      {!teams ? "Loading teams..." : teams.filter((team) => (
        team.franchisePlayers.some((player) => (
          player.name.toLowerCase().includes(input.toLowerCase())
        ))))
        .map((team, i) => (
          <Team team={team} key={i}/>
      ))}
    </div>
  )
}

export default App
