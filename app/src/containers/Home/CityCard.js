import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function CityCard({city}) {
  const [open, setOpen] = React.useState(false);

  return [
    <Card>
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
        <Button size={'small'} color={'primary'} onClick={() => setOpen(true)}>
          View photo
        </Button>
      </CardActions>
    </Card>,
    open &&
    <Dialog onClose={() =>setOpen(false)} open={open} maxWidth={'xl'}>
      <DialogTitle id="simple-dialog-title">Photo of {city.name}</DialogTitle>
      <img style={{width: '100%'}} src={city.image} />
    </Dialog>
  ]

}
