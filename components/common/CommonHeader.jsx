import { Button } from '@material-ui/core'
import React from 'react'



const CommonHeader = ({headerTitle, headerCategories}) => {
    return (
        <section className="common-header">
            <div className="wrapper">
                <h3>{headerTitle}</h3>
                <div className="category-container">                            
                    {
                        headerCategories.map((item, index) => (
                            <Button key={index}>{item}</Button>
                        ))
                    }
                    
                    
                </div>
            </div>
        </section>
    )
}

export default CommonHeader
