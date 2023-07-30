import pages from './pages'

import './index.css'

const Index = ({moduleIdx=-1}) => {

    const Page = pages[moduleIdx]
    return(
        <article className='pages-s'>
            <Page />
        </article>
    )
}

export default Index