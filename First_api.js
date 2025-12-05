// ______________________________________________________ //
//---------------  Fetch Dog Pics Images form Api  ---------- //
//______________________________________________________ //

// import React, { useEffect, useState } from 'react'

// const First_api = () => {
//     const [storedata, setstoredata] = useState([])
//     useEffect(() => {
//       const fetchdatafromapi=async ()=>{
//         const api= await fetch(`https://dog.ceo/api/breed/husky/images`)
//         const data=await api.json()
//         console.log(data.message)
//         // setstoredata(data.message)
//         setstoredata(data.message.slice(0, 10))
//       }
//       fetchdatafromapi()
//     }, [])
    
//   return (
//     <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
//         {storedata.map((data,index)=><div key={index}>
//           <div>
//             <img src={data} style={{width:"250px", border:"2px solid yellow"}}></img>
//           </div>
//         </div>)}
//     </div>
//   )
// }

// export default First_api

// ______________________________________________________ //

//---------------  Fetch Simple Data id text  ------------- //

//______________________________________________________ //

// import React, { useEffect, useState } from 'react'

// const First_api = () => {
//   const [storedata, setstoredata] = useState([])
//   useEffect(() => {
//     const fetchdatafromapi=async ()=>{
//       const api= await fetch(`https://api.thedogapi.com/v1/breeds`)
//       const data=await api.json()
//       console.log(data)
//       setstoredata(data)
//     }
//     fetchdatafromapi()
//   }, [])
  
//   return (
//     <div>
//       {storedata.map((data)=><div key={data.id}>
//         {data.id}
//         {/* {data.reference_image_id} */}
//         {data.name}
//       </div>)}
//     </div>
//   )
// }

// export default First_api

// ______________________________________________________ //

//-----------------Recipie Api with pics and title-----------

//______________________________________________________ //

// import React, { useEffect, useState } from 'react'

// const First_api = () => {
//   const [storedata, setstoredata] = useState([])
//   useEffect(() => {
//    const fetchdatafromapi=async ()=>{
//     const api=await fetch(`https://dummyjson.com/recipes`)
//     const data= await api.json()
//     console.log(data.recipes)
//     setstoredata(data.recipes)
//    }
//    fetchdatafromapi()
//   }, [storedata])
  
//   return (
//     <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
//       {storedata.map((data)=><div key={data.id}>
//         <div>
//           <img src={data.image} style={{width:"300px"}}></img>
//         </div>
//         {data.name}
//       </div>)}
//     </div>
//   )
// }

// export default First_api

// ______________________________________________________ //

//-----------------Cat images Api-----------

//______________________________________________________ //

// import React, { useEffect, useState } from 'react'

// const First_api = () => {
//   const [storedata, setstoredata] = useState([])
//   useEffect(() => {
//     const fetchdatafromapi= async ()=>{
//       const api= await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
//       const data=await api.json()
//       console.log(data)
//       setstoredata(data)
//     }
//     fetchdatafromapi()
//   }, [
//   ])
  
//   return (
//     <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
//       {storedata.map((data)=><div key={data.id}>
//         <div>
//           <img src={data.url} style={{width:"300px"}}></img>
//         </div>
//         {data.id}
//       </div>)}
//     </div>
//   )
// }

// export default First_api