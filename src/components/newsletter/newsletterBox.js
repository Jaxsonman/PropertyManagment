import React from 'react';

const months = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
]

export default function NewsletterBox(date) {
    return(
        <div className='newsletter-box'>
            <div className='newsletter-box__Day'>{date.getDate()}</div>
            <div className='Newsletter-box__month-year'>{months[date.getMonth()]} {date.getFullYear()}</div>
        </div>
    )
}