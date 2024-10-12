import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function infoBox({info}){
  
    
   
    return(
        <div>
           
            <Card sx={{maxWidth:345}}>
            <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Mumidity={info.humidity}&deg;C</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>the weather can be descrided as<i> {info.weather} </i> and feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
            
    </Card>
  
            

            
    </div>
    )
}