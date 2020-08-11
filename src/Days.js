import React from 'react';
import Moment from 'moment';

const Days = (props) => {


    return(
        <div className="card-action row">
                        <a href="#Today" onClick={() => props.day(0)}>
                            {Moment().format('dddd')}
                        </a>
                        <a href="#2ndDay" onClick={() => props.day(8)}>
                            {Moment().add(1, 'days').format('dddd')}
                        </a>
                        <a href="#3rdDay" onClick={() => props.day(16)}>
                            {Moment().add(2, 'days').format('dddd')}
                        </a>
                        <a href="#4thDay" onClick={() => props.day(24)}>
                            {Moment().add(3, 'days').format('dddd')}
                        </a>
                        <a href="#5thDay" onClick={() => props.day(32)}>
                            {Moment().add(4, 'days').format('dddd')}
                        </a>
        </div>
   
    )

}

export default Days