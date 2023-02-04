import React, { useEffect, useState } from "react";

 const Photos = () => {
   const [photoList, setPhotoList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
     // Make an API call to get all photos
     // update state
     // set isLoading false

     fetch("https://jsonplaceholder.typicode.com/photos")
     .then((response)=>response.json())
     .then((json)=>setPhotoList(json))
     .finally(()=>setIsLoading(false));
   }, []);
   if (isLoading) {
     return <h4>Loading...</h4>;
}
   return (
     <div>
      {photoList.map((photo, index) => {
         <div key={index}>
           <img src={photo.ur1} alt={photo.title} />
         </div>;
      })}
      </div>
   );

};
export default Photos;