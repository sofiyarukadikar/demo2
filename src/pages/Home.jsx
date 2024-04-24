import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { CodeSimple, Lightbulb, Lightning, PencilSimple } from 'phosphor-react'

const Home = () => {
    return (
        <div className='home-styled'>
            <Navbar />
            <div className='content'>
                <div className='title'>
                    <h1>Hello, Sofiya</h1>
                    <h2>How can i help you today?</h2>
                </div>
                <div className='grid'>
                    <div className='item'>
                        <p>Provide questions to help me prepare for interview</p>
                        <span><PencilSimple weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Recommend me new types of water sports</p>
                        <span><Lightbulb weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Draft an emailto recruiter to accept a job offer</p>
                        <span><Lightning weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Give me a biginners guide to an activity</p>
                        <span><CodeSimple weight='bold' size={25} /></span>
                    </div>
                </div>
            </div>
            <Search />
        </div>
    )
}

export default Home