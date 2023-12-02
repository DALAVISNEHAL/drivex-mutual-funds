import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Home(){
    return(
        <>
            <Navbar />
            <h1>Explore and Invest with Confidence</h1>
            <div style={{marginLeft: '100px'}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={require('./Images/largeCap.jpeg')}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Large Cap Fund
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        To generate long-term capital appreciation from a diversified portfolio of 
                        predominantly equity & equity related instruments of small cap companies.
                        </Typography>
                        <Button color='inherit'>
                            <Link to='/largeCapdetails'>
                                Details
                            </Link>
                        </Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div style={{marginLeft: '550px', marginTop: '-330px'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={require('./Images/midCap.jpg')}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mid Cap Fund
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    To generate long-term capital appreciation from a diversified portfolio of 
                    predominantly equity & equity related instruments of small cap companies.
                    </Typography>
                    <Button color='inherit'>
                        <Link to='/midCapDetails'>
                            Details
                        </Link>
                    </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
            <div style={{marginLeft: '1000px', marginTop: '-330px'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={require('./Images/smallCap.jpg')}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Small Cap Fund
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    To generate long-term capital appreciation from a diversified portfolio of 
                    predominantly equity & equity related instruments of small cap companies.
                    </Typography>
                    <Button color='inherit'>
                        <Link to='/smallCapDetails'>
                            Details
                        </Link>
                    </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </>
    )
}