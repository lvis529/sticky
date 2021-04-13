import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { Container, Grid, Paper,IconButton,makeStyles, Typography ,Avatar} from '@material-ui/core'
import {user} from '../pages/Notes'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
const styles=makeStyles({
    ava:{
        backgroundColor:(note)=>{
            if(note.categories =='work'){
                return yellow[700]
            }
            if(note.categories =='money'){
                return green[500]
            }
            if(note.categories =='todos'){
                return pink[500]
            }
            return blue[500]
        }
    }
})
function Notecard() {
    const context=useContext(user)
    console.log(context)
    const classes=styles(context.note)

    return (
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader
                 avatar={
                    <Avatar className={classes.ava}>
                      {context.note.categories[0].toUpperCase()}
                    </Avatar>
                  }
                title={context.note.title}
                subheader={context.note.categories}
                  action={
                    <IconButton onClick={()=>{
                        context.handle(context.note.id)


                    }}>
                      <DeleteOutlined />
                    </IconButton>
                  } 
                 />
                 <CardContent>
                     <Typography variant="body2" color="textSecondary">
                         {context.note.details}
                     </Typography>
                 </CardContent>
            </Card>
            
        </div>
    )
}

export default Notecard
