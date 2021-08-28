import React from 'react'

const LiveUpdate = ({livedata}) => {
    return (
        <div className="live-update-wrapper">
            <h4>Live Update</h4>

            <div className="snippets-container">
            {
                livedata.map((item, index)=> (
                    <LiveUpdateSnippet
                        snippet={item}
                        key={index}
                    />
                ))
            }
            </div>

        </div>
    )
}

export default LiveUpdate



export const LiveUpdateSnippet = ({snippet}) => {
    return (
        <div className="live-update-snippet">
            <div className="content-category">{snippet.category}</div>
            <p>{snippet.content}</p>
            <span>11 minutes ago</span>
        </div>
    )
}
