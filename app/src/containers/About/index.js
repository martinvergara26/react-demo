import React from 'react';
import Layout from "../Layout/Layout";
import Typography from "@material-ui/core/Typography";

export default function About () {
  return (
    <Layout title={'About'}>
      <Typography>This is a simple React App, intended to show my skills</Typography>
      <Typography>The map is rendered with Leaflet</Typography>
      <Typography>No state framework used, since it is a simple app</Typography>
      <Typography>User data is stored on localStorage</Typography>
    </Layout>
  )
}