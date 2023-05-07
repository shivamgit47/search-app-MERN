import React from 'react'
import './card.css'

const Card = ({addata}) => {
  return (
        <>
  <div className="wrap">
 { addata.length>0 ? addata.map((val)=>{
   return(
  <div className="box" key={val._id}>    
     <div className="box-top">
       <img className="box-image" src={val.results.imageUrl} alt="Girl Eating Pizza"/>
       <div className="title-flex">
         <h3 className="box-title">{val.name}</h3>
         <h5 className="user-follow-info">{val.results.headline}</h5>
       </div>
       <p className="description">{val.results.description}</p>
       <p className="primarytext">{val.results.primaryText}</p>
       <a href={val.url} className="button">{val.results.CTA}</a>
     </div>
   </div>
   ) }) : <div className='emtpyContainer'><h1 >No Ads Result Found</h1></div>}
 
   </div>
        </>
  
  )
}



export default Card