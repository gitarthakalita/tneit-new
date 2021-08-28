import React from "react";

const FeaturedColumn = ({opinionData}) => {
  return (
    <div className="featured-opinion">          
           {
               opinionData.map((item, index)=> (
                <FeaturedOpinionCard
                    item={item}
                    key={index}
                />
               ))
           }
           
           
      </div>
    
  );
};

export default FeaturedColumn;




export const FeaturedOpinionCard = ({item}) => {
    return (
        <div className="featured-opinion-card">
            <h5>{item.title}</h5>            
            <div className="author">{item.author}</div>
        </div>
    )
}


