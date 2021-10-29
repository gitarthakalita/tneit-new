import React from 'react'

const CommonEditorialCard = ({title, imageUrl,content}) => {
    return (
        <section className="common-editorial-card">

            <div className="wrapper">
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
                <div className="image" style={{
                    backgroundImage:`url(${imageUrl})`
                }} ></div>
            </div>
            
        </section>
    )
}

export default CommonEditorialCard
