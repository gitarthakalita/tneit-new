import { Button } from '@material-ui/core'
import React from 'react'

const EditorialToday = () => {
    return (
        <div className="editorial-today-card">
            <Button className="editorial-label">Editorial</Button>
           <div className="editorial-wrapper">
           <h3>China dam over Brahmaputra will be a disaster</h3>
            <p>China is approving a mega dam on the world’s largest and the deepest gorge over the Tsangpo/ Siang/ Brahmaputra. Actually, it is a Giga dam as it is going to produce 60GW of energy. China’s aim to achieve carbon neutrality by 2060 by building a Giga dam for cheap electricity is outrageous. China already has an excess of energy, who will benefit from this electricity done at the expense of billions of people, including the death of the river Siang/Brahmaputra? </p>
            <div className="editor-name">Editor-In-Chief, The Northeast India Times</div>
           </div>
        </div>
    )
}

export default EditorialToday
