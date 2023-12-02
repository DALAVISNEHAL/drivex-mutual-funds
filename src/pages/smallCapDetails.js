import * as React from 'react';
import Navbar from '../components/Navbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export default function SmallDetails(){
    return(
        <>
            <Navbar/>
            <Card sx={{ maxWidth: 1000, marginLeft: '300px', marginTop: '40px' }}>
                <CardActionArea>
                    <CardContent>
                    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={require('./Images/Axis.jpg')} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Axis Bluechip Fund"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Axis Bank
                        </Typography>
                        {" — The fund has 94.03% investment in domestic equities..."}
                        </React.Fragment>
                    }
                    />
                    <Button>Learn more..</Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={require('./Images/pgim.jpg')} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="PGIM India Small Cap Fund"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            PGIM Funds
                        </Typography>
                        {" — The fund has 95.53% investment in domestic equities"}
                        </React.Fragment>
                    }
                    />
                    <Button>Learn more..</Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={require('./Images/lic.jpg')} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="LIC MF Small Cap Fund"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            LIC Funds
                        </Typography>
                        {' — The fund has 94.63% investment in domestic equities'}
                        </React.Fragment>
                    }
                    />
                    <Button>Learn more..</Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={require('./Images/boi.jpg')} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Bank of India Bluechip Fund"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Bank of India
                        </Typography>
                        {' — The fund has 98.3% investment in domestic equities..'}
                        </React.Fragment>
                    }
                    />
                    <Button>Learn more..</Button>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={require('./Images/mahindra.png')} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Mahindra Manulife Small Cap Fund"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Mahindra & Mahindra Funds
                        </Typography>
                        {' — The fund has 98.3% investment in domestic equities..'}
                        </React.Fragment>
                    }
                    />
                    <Button>Learn more..</Button>
                </ListItem>
                </List>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}