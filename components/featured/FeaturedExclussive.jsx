import React from 'react'

const FeaturedExclussive = ({data}) => {
    
    return (
        <div className="featured-exclussive-card">
            <div className="featured-exclussive-wrapper">
            <h3>{data.title}</h3>
            <p>{data.excerpt}</p>
            <div className="image-box"
                style={{
                    backgroundImage:`url(${data.image_url})`
                }}
            ></div>
            </div>
        </div>
    )
}

export default FeaturedExclussive
