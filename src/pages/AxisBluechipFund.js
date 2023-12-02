import Navbar from '../components/Navbar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

export default function AxidBluechipFunds(){
    return(
        <>
            <Navbar/>
            <div style={{marginLeft: '150px', marginTop: '40px'}}>
            <Card sx={{ maxWidth: 1200 }}>
                <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Axis Bluechip Fund - Growth
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The fund has 94.03% investment in domestic equities of which 74.47% is in Large Cap stocks, 4.86% is in Mid Cap stocks.The fund has 0.89% investment in Debt, of which 0.89% in Government securities.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Investors who are looking to invest money for at least 3-4 years and looking for high returns. At the same time, these investors should also be ready for possibility of moderate losses in their investments.
                        </Typography>
                        <CardMedia
                        component="img"
                        height="300"
                        image={require('./Images/axisGraph.png')}
                        alt="green iguana"
                        />
                        <h2>Tax Treatment</h2>
                        <Typography variant="body2" color="text.secondary">
                        If sold after 1 year from purchase date, long term capital gain tax will be applicable. Current tax rate is 10%, if your total long term capital gain exceeds 1 lakh. Any cess/surcharge is not included.|If sold before 1 year from purchase date, short term capital gain tax will be applicable. Current tax rate is 15%. Any cess/surcharge is not included in the 15%.
                        </Typography>
                        <h2>Portfolio</h2>
                        <Typography variant="body2" color="text.secondary">Portfolio Turnover Ratio : 31.00%  |   Category average turnover ratio is 220.42% </Typography>
                        <Button color='inherit'>
                            <Link to='/largeCapdetails'>
                                Go Back..!!
                            </Link>
                        </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </>
    )
}