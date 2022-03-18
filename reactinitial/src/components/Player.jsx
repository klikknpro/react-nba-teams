import {React, useState} from 'react';
import http from "axios";
import {Button, IconButton} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';

const Player = ({player}) => {
  const [voted, setVoted] = useState(false);

  const vote = async(playerid) => {
    const response = await http.post("https://demoapi.com/api/vote",
      {
        id: playerid
    });
    setVoted(true);
  };

  return (
    <div>
      <li playerid={player.id}>
        {player.name}
        {!voted ?
          <IconButton onClick={() => vote(player.id)} color="warning" size="small"><StarRateIcon/></IconButton>
          : <div className="voted">voted</div>
        }
      </li>
    </div>
  )
}

export default Player
