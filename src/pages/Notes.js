import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Grid, Paper } from '@material-ui/core'
import Notecard from '../Components/Notecard'
import Masonry from 'react-masonry-css'
export const user=React.createContext()
export default function Notes() {
  const[data,setdata]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8001/notes')
    .then(res=>res.json())
    .then(data=>setdata(data))
},[])
const handle= async (id)=>{
  await fetch('http://localhost:8001/notes/'+ id,{
    method:'DELETE'
  })
  const newNotes=data.filter(note =>note.id !=id)
  setdata(newNotes)

}
const breakpoints={
  default:3,
  1100:2,
  700:1
}


  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6}  md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
   
   <Masonry
          
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
      {
        data.map(note=>{
          
          return( 
           
            <div key={note.id} >
          <user.Provider value={{note:note,handle:handle}}>
          <Notecard></Notecard>
          </user.Provider>
          
          </div>)
            
         
          
          
        
      })
    }
     </Masonry>
    
    </Container>
  )
}
