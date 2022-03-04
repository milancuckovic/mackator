import React, { useRef } from 'react'

export default function AboutCat({citat}) {
    return (
    <p className='citati-poruka' id='poruka'>
        {citat.poruka}
    </p>
  )
}
