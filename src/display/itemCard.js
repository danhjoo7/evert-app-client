import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        maxHeight: 350
    },
})


const ItemCard = (props) => {
    const classes = useStyles()
    const { brand, name, price, size } = props.item

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Item-Main-Picture"
                    height="120"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Item-Main-Picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">{brand}</Typography>
                    <Typography gutterBottom variant="h6" component="h6">{name}</Typography>
                    <br /><Typography variant="h7" color="black" component="h7">${price}</Typography>
                    <br /><Typography variant="h7" component="h7">{size}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to Favorites
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        // <div className="item-card">
        //     <div className="item-card-header">
        //         <h3>{brand}</h3>
        //         <h4>{name}</h4>
        //     </div>
        //     <div className="item-card-details-size">
        //         <h5>{size}</h5>
        //     </div>
        //     <div className="item-card-details-price">
        //         <h5>${price}</h5>
        //     </div>
        // </div>
    )
}

export default ItemCard 