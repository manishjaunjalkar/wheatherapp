import React, {useState} from 'react';


const App = () =>{
      
     let [cord, setCord] = useState({latitude: "", longitude: ""})
     let [hemisphere, setHemisphere] = useState("")
     let [month, setMonth] = useState(new Date().getMonth())

     let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
      "October", "November", "December"]
     

     let {latitude, longitude} = cord

       function findLocation(){
                if(navigator.geolocation){
                     navigator.geolocation.getCurrentPosition(
                      (position) => {
                         console.log(position)
                         setCord({latitude: position.coords.latitude, longitude: position.coords.longitude})
                         findHemisphere(position.coords.latitude) 
                         console.log("Hello World", latitude, longitude, hemisphere)
                      }
                     )
                }
                       
         }

         function findHemisphere(latitude){
           if(latitude>0){
             setHemisphere("Northern Hemisphere")
           }else if(latitude<0){
             setHemisphere("Southern Hemisphere")
           }else if(latitude===0){
             setHemisphere("Equator")
           }
         }
         
      

  return(
      <div>
            <h1> LAtitude: {latitude}, Longiitude: {longitude}</h1>
            <button onClick={findLocation}>Find Location</button>
            {/* <h1> {latitude>0? "Northen Hemisphere":  latitude<0? "Southern Hemisphere": "Equator"} </h1> */}
            <h1 > {hemisphere} </h1>
            <h1> {monthArr[month]} </h1>

      </div>
  )
}

export default App;

