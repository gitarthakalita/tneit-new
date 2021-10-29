import { Button } from '@material-ui/core'
import React from 'react'

import Link from 'next/link';

const EditorialToday = ({item}) => {
    return (
        <div className="editorial-today-card">
            <Button className="editorial-label">Editorial</Button>
           <div className="editorial-wrapper">
           <Link href={`/${item.category}/${item.slug}`} >
           <h3>{item.title}</h3>
            </Link>
            <p>{item.excerpts} </p>
            <div className="editor-name">Editor-In-Chief, The Northeast India Times</div>
           </div>
        </div>
    )
}

export default EditorialToday
