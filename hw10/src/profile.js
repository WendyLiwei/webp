import React, { Component } from "react";
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import GridViewIcon from '@mui/icons-material/GridView';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const styles={
    content:{
        position:"center",
    },
    icon:{
        marginTop:"20px",
        marginRight:"5px",
        marginBottom:"-5px",
        fontSize:"23px"
    }
}
class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            name: null,login:null,id:null,node_id:null,
            followers:null,following:null,location:null,blog:null,
        }
    }
    
    componentDidMount(){
        fetch("https://api.github.com/users/cjwu",{method:"GET"})
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            this.setState({name:data.name})
            this.setState({login:data.login})
            this.setState({id:data.id})
            this.setState({node_id:data.node_id})
            this.setState({followers:data.followers})
            this.setState({following:data.following})
            this.setState({location:data.location})
            this.setState({blog:data.blog})
        })
        .catch(e=>{
            console.log("error")
        })
    }
    render(){
        return(
            <div style={{ padding: 200 }}>
                <Grid align='center'>
                <Box sx={{width:"720px"}} style={styles.box}>
                    <Avatar
                        src= 'https://avatars.githubusercontent.com/u/1336309?v=4'
                        alt="Travis Howard"
                        sx={{ width: 150, height: 150 ,left: 10 }}
                    />
                    <div style={styles.content}>
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.login}</h2>
                    </div>
                        <Grid item xs={12}><GridViewIcon style={styles.icon}/>id: {this.state.id} <FiberManualRecordIcon style={styles.icon}/>node_id: {this.state.node_id}</Grid>
                        <Grid item xs={12}><SupervisorAccountIcon style={styles.icon}/>{this.state.followers} followers {this.state.following} following</Grid>
                        <Grid item xs={12}><FmdGoodIcon style={styles.icon}/>location: {this.state.location}</Grid>
                        <Grid item xs={12}><InsertLinkIcon style={styles.icon}/>link: {this.state.blog}</Grid>
                </Box>
                </Grid>
            </div>
        )
    }
   
}
export default Profile