import { useEffect, useRef } from 'react'
import pages from './pages'

import './index.css'

const Index = ({moduleIdx=-1}) => {
    const ref = useRef()
    useEffect(() => {
        ref.current?.scrollTo(0,0)
    })
    const Page = pages[moduleIdx]

    return(
        <article className='pages-s' ref={elRef => ref.current = elRef}>
            <Page />
        </article>
    )
}

export default Index