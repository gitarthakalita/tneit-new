import { Button } from '@material-ui/core'

import React from 'react'

const FeaturedExclussive = ({data}) => {
    
    return (
        <div className="featured-exclussive-card">
            <div className="featured-exclussive-wrapper">
                <Button className="exclussive-label">Exclussive</Button>
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
