import {React, useState} from 'react';
import http from "axios";
import {IconButton} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';

const Player = ({player, disableVoting, setDisableVoting}) => {
  const [voted, setVoted] = useState(false);

  const vote = async(playerid) => {
    setDisableVoting(true);
    const response = await http.post("https://demoapi.com/api/vote",
      {
        id: playerid
    });
    setVoted(true);
    setDisableVoting(false);
  };

  return (
    <div>
      <li playerid={player.id}>
        {player.name}
        {!voted ?
          <IconButton onClick={() => vote(player.id)} disabled={disableVoting} color="warning" size="small">
            <StarRateIcon/>
          </IconButton>
          : <div className="voted">voted</div>
        }
      </li>
    </div>
  )
}

export default Player
