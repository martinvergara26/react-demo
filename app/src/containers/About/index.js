import React from 'react';
import Layout from "../Layout/index";
import Typography from "@material-ui/core/Typography";

export default function About () {
  return (
    <Layout title={'About'}>
      <Typography>This is a simple React App, intended to show my skills</Typography>
      <Typography>Using Material-UI as UI framework</Typography>
      <Typography>The map is rendered with Leaflet</Typography>
      <Typography>No state framework used, like Redux, since it is a simple app</Typography>
      <Typography>Markers are stored on localStorage</Typography>
    </Layout>
  )
}