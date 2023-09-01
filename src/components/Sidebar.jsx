import React from 'react';


function Sidebar() {
    return ( 
        <div className='fixed right-8  top-1/4 overflow-hidden p-5'>
            <div>
                <ul className='space-y-10'>
                    <li className='bg-secondary p-5 rounded-full'>Home</li>
                    <li className='bg-secondary p-5 rounded-full'>About</li>
                    <li className='bg-secondary p-5 rounded-full'>Portfolio</li>
                    <li className='bg-secondary p-5 rounded-full'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;