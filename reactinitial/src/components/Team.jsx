import {React, useState} from 'react';
import {Button} from "@mui/material";
import Player from './Player';


const Team = ({team}) => {
  const [isShown, setIsShown] = useState(false);
  const [disableVoting, setDisableVoting] = useState(false);

  return (
    <div>
      <h2>{team.name}</h2>
      <h3>{team.stadium}</h3>
      <Button onClick={() => setIsShown(!isShown)} size="small" color="warning" variant="outlined">
        {!isShown ? "Show players" : "Hide players"}</Button>
      {isShown &&
        <ul>
          {team.franchisePlayers.map((player, i) => (
            <Player player={player} key={i} disableVoting={disableVoting} setDisableVoting={setDisableVoting}/>
          ))}
        </ul>
      }
    </div>
  )
}

export default Team
