import React from 'react'
import slots from '../helpers/slots'

export default function timeSlots({onSlotClick, schedule, bikes}) {

    return (
        <div className='timeSlots'>
            {slots(8,24).map(
                slot => 
                    <button 
                        key={slot}
                        onClick={()=>{onSlotClick(slot)}}
                        className={schedule[slot] && 'taken'}
                        disabled={!schedule[slot] && !bikes.length}
                        >
                            {`${slot} `}
                            <br></br>
                            {schedule[slot] ? `Bike ${schedule[slot]}` : 'Available'}
                    </button>
            )}
        </div>
    )
}
