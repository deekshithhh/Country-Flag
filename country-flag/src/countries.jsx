import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import styles from '../src/countries.module.css'
import { useEffect,useState } from 'react';


function CountryCard({ name, flag}){

   // console.log(name,flag)
return(
    <div>

        <Card variant="outlined"  className={styles.CardImage} sx={{ maxWidth: 100 }}>
        <CardMedia
        component="img"
        height="100px"
        image={flag}
        alt={"Flag of "+ name}
      />
      <Typography variant="body" color="text.primary">
          {name}
        </Typography>
        </Card>
    </div>
)
}


function Countries(){
const API_URL="https://xcountries-backend.azurewebsites.net/all"

const[country,setCountry]=useState([])


  useEffect(()=>{
    const callcountries=async()=>{
        try {
            
          const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
          const data = await response.json();
         
          setCountry(data)
          return data;
        } catch (error) {
          console.error('Error fetching albums:', error);
        }
      }
      callcountries()
  },[])
 
 console.log("API data",country)
 //const temparr=[1,2,3,4,5]
return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
         paddingLeft:"20px",
        // paddingRight:"20px",
         gap: "20px"
    }}>
       {/* temparr.map((ele)=>{
        <Countries key={ele}/>
       }) */}
       {
        country.map((ele) => <CountryCard  key ={ele.abbr} name={ele.name} flag={ele.flag} />)
       }
        
       
    </div>
)
}

export default Countries