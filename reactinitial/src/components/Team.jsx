import {React, useState} from 'react';
import {Button} from "@mui/material";

const Team = ({team}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h2>{team.name}</h2>
      <h3>{team.stadium}</h3>
      <Button onClick={() => setIsShown(!isShown)} >Show players</Button>
      {isShown &&
        <ul>
          {team.franchisePlayers.map((player, i) => (
            <li key={i}>{player.name}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Team
