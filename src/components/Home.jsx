import React from 'react'
import Herosection from '../pages/Herosection'
import Featuredsection from '../pages/Featuredsection'
import Banner from '../pages/Banner'
import Testimonialpage from '../pages/Testimonialpage'
import Emailsection from '../pages/Emailsection'

function Home() {
    return (
        <main className=''>
            <Herosection/>
            <Featuredsection/>
            <Banner/>
            <Testimonialpage/>
            <Emailsection/>

        </main>
        
    )
}

export default Home
