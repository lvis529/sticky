
import { makeStyles,Drawer, Typography,LIST
,ListItem,ListItemIcon,ListItemText, List,AppBar,Toolbar,Avatar } from '@material-ui/core'
import { SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import {format} from 'date-fns'
const drawWidth=240

const use=makeStyles((theme)=>{
    return{
        app:{
            width:`calc(100% -${drawWidth}px )`

        },
        avatar:{
            marginLeft:theme.spacing(2)

        },
        page:{
            backgroundColor:'#F5F5F5',
            width:'100%',
            padding:theme.spacing(3)
    
        },
        toolbar:theme.mixins.toolbar,
        drawers:{
            marginLeft:'250px',
            flexGrow:1
        },
        drawer:{
            width:drawWidth,
    
    
        },
        drawerpaper:{
            width:drawWidth,
    
    
        },
        root:{
            display:'flex'
        },
        active:{
            backgroundColor:"#f4f4f4"
        },
        title:{
            padding:theme.spacing(2)
        }
    } 
})
function Layout(props) {
    const history=useHistory()
    const classes=use()
    const loc=useLocation()
    const menuItems=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color="secondary" />,
            path:'/'
        },
        {
            text:'Create Notes',
            icon:<SubjectOutlined color="secondary" />,
            path:'/create'
        }
    ]
    return (
        <div className={classes.root}>
            <AppBar className={classes.app} elevation={0}>
                <Toolbar>
                    <Typography className={classes.drawers}>
                       Today is the {format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/th.jpg" className={classes.avatar} />
                </Toolbar>
            </AppBar>
            <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper:classes.drawerpaper
            }}


            >
                <Typography variant="h5" className={classes.title}>
                    Sticky Notes
                </Typography>

                <List>
                {
                    menuItems.map((note)=>{
                       return(
                        <ListItem key={note.text}
                        className={loc.pathname == note.path ? classes.active : null}
                        onClick={
                            ()=>{
                                history.push(note.path)
                                
                            }
                        }
                        
                        >
                        <ListItemIcon>{note.icon}</ListItemIcon> 
                        <ListItemText primary={note.text}></ListItemText>
                     </ListItem>
                       )

                    })
                }
                
            </List>

            </Drawer>
            
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {props.children}
                </div>
            
        </div>
    )
}

export default Layout
