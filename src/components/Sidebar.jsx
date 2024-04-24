import React from 'react'
import { ClockCounterClockwise, Gear, List, Plus, Question } from 'phosphor-react'

const Sidebar = () => {

    return (
        <aside className='sidebar-styled'>
            <div>
                <List weight='bold' size={20} />
                <button><Plus weight='bold' size={20} />New Chat</button>
            </div>
            <div className='sidebar-bottom'>
                <div><Question weight='bold' size={20} />Help</div>
                <div><ClockCounterClockwise weight='bold' size={20} />Activity</div>
                <div><Gear weight='bold' size={20} />Settings</div>
              
            </div>
        </aside>
    )
}

export default Sidebar