import { Button, ButtonGroup, Typography,Container,makeStyles,TextField,Radio, RadioGroup, FormControlLabel ,FormLabel,FormControl} from '@material-ui/core'
import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SendIcon from '@material-ui/icons/Send';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
// make styles is used for creating css through js (ie) jss
const useStyles=makeStyles({
  field:{
    marginTop:20,
    marginBottom:20,
    display:'block'

  }
  
})
export default function Create() {
  const classes=useStyles()
  const[title,setitle]=useState('')
  const[details,setdetails]=useState('')
  const[data,setdata]=useState({})
  const[titlerror,setitler]=useState('')
  const[detailserror,setdetailser]=useState('')
  const[categories,setcat]=useState('todos')
  const history=useHistory()
  const handler=(e)=>{
    e.preventDefault()
    setitler(false)
    setdetailser(false)
    if(title && details && categories){
      setdata({
        title:title,
        details:details,
        categories:categories
      }
      )
      // console.log(data)
      fetch('https://sticky-notess.herokuapp.com/notes',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title,details,categories})

      })
      .then((res)=>{
        console.log(res)
        history.push("/")

      })
     
      
      
    }
    else{
      setitler(true)
      setdetailser(true)
    }

  }
  return (

    <Container>
      
     <Typography variant="h6" component='h6'  gutterBottom>
       Create a New Note
     </Typography>
     {/* <Button variant='outlined' type="submit" color="secondary"></Button>
     <Button variant='contained' type="submit" color="secondary">
       Submit
     </Button>
     <ButtonGroup color='secondary' variant="contained">

       <Button>One</Button>
       <Button>Two</Button>
       <Button>Three</Button> */}

     {/* </ButtonGroup> */}
     <form noValidate autoComplete='off' onSubmit={handler}>
       <TextField variant="outlined"
       value={title}
       onChange={(e)=>setitle(e.target.value)}
       label="Note Title"
       color="secondary"
       fullWidth
       required
       className={classes.field}
       error={titlerror}
       ></TextField>
       <TextField variant="outlined"
       value={details}
       onChange={(e)=>{
         setdetails(e.target.value)

       }}
       label="Details"
       color="secondary"
       fullWidth
       required
       className={classes.field}
       multiline
       rows={4}
       error={detailserror}
       ></TextField>
       <FormControl className={classes.field}>
       <FormLabel>Note Category</FormLabel>
       <RadioGroup value={categories}  onChange={(e)=>{
         setcat(e.target.value)
       }}>
       <FormControlLabel value="money" control={<Radio />} label="Money" />
       <FormControlLabel value="todos" control={<Radio />} label="Todos" />
       <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
       <FormControlLabel value="work" control={<Radio />} label="Work" />
       </RadioGroup>
       </FormControl>
       <Button type='submit' color="secondary" variant="contained" startIcon={<SendIcon />}
     endIcon={<KeyboardArrowRightIcon />}>Submit</Button>

     </form>
     
     {/* // icons */}
     <br />
      
    </Container>
    
   
  )
}
