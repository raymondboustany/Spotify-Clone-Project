import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_left'>
          <img className="footer_albumLogo" src="https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/3818953/original/resize:248x186/crop:x0y0w1024h768/hash:1467500609/1386957643_usher.jpg?1467500609" alt="" />
        
          <div className='footer_songInfo'>
            <marquee width='200%' scrolldelay="130">Yeah It's Me Usher </marquee>
            <p className='Artist'>Usher</p>
          </div>
        </div> 
        <div className='footer_center'>
          <ShuffleIcon className='footer_green' />
          <SkipPreviousIcon className='footer_icon' />
          <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
          <SkipNextIcon className='footer_icon' />
          <RepeatIcon className='footer_green' />
        </div>
        <div className='footer_right'>

        </div>
        <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer