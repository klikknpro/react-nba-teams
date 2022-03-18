import {React, useState} from 'react';
import http from "axios";
import {Button, IconButton} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';

const Team = ({team}) => {
  const [isShown, setIsShown] = useState(false);

  const vote = async(playerId) => {
    const response = await http.post("https://demoapi.com/api/vote",
      {
        id: playerId
    });
    console.log("did vote ", response);
  };

  return (
    <div>
      <h2>{team.name}</h2>
      <h3>{team.stadium}</h3>
      <Button onClick={() => setIsShown(!isShown)} size="small" color="warning" variant="outlined">
        {!isShown ? "Show players" : "Hide players"}</Button>
      {isShown &&
        <ul>
          {team.franchisePlayers.map((player, i) => (
            <li key={i} playerId={player.id}>
              {player.name}
              <IconButton onClick={() => vote(player.id)} color="warning" size="small"><StarRateIcon/></IconButton>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Team
