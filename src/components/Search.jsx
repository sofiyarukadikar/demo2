import { Image, Microphone } from 'phosphor-react'
import React from 'react'

const Search = () => {
    return (
        <div className='search-styled'>
            <div>
                <input autoFocus type="text" placeholder='Ingresa una instrucción aqui' />
                <Image weight='bold' size={25} />
                <Microphone weight='bold' size={25} />
            </div>
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
        </div>
    )
}

export default Search