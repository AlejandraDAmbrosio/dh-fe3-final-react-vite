import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

import React from "react";
import { Link } from "react-router-dom";


const Dentists = ({ dentists, dispatch }) => {
    return (
        <div>
            {dentists.map((dentist) => {

                return (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height=""
                                image="https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
                                alt="dentist"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    {$`{dentist.name}`}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <Link to={`/dentist/${dentist.id}`}>
                                    <Button variant="text" size="small" color="primary">
                                        Detalles
                                    </Button>
                                </Link>
                        </CardActions>
                    </Card>
                );
            }
        </div>
    )
}

export default Dentists;