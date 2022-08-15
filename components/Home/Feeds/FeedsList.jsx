import { Grid } from '@mui/material'
import React from 'react'
import Feed from './Feed'

const FeedsList = () => {
  return (
    <Grid container height="100%" spacing={2}>
      {[0,1,2,3].map((item, index) => (
        <Feed key={index} />
      ))}
    </Grid>
  )
}

export default FeedsList