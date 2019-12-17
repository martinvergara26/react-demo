import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export default function CityCard({city}) {

  return <Card>
    <CardMedia
      style = {{ height: 200}}
      image={city.image}
      title={city.name}
    />
    <CardContent>
      <Typography gutterBottom variant={"h4"}>
        {city.name}
      </Typography>
      <Typography>
        {`Points of ${city.name} available soon!`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size={'small'} color={'primary'}>
        Preview
      </Button>
    </CardActions>
  </Card>

}
