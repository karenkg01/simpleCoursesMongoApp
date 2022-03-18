import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inq = (props) => {

    const [data, setData] = useState();


    useEffect(() => {

        axios.get(`http://localhost:3005/courses/${props.course_id}`).then((response) => {
            setData(response.data);
            console.log(response);
        })

    }, [])


    return (
        <div className="card">
            <div className="card-body">
                <h3>{props.name}</h3>
                <p>{props.details}</p>
                <p>{props.course_id}</p>
                <p>{data && data.title}</p>
            </div>
        </div>

    );
}


const Inquiries = () => {
    
    const [data, setData] = useState();


    useEffect(() => {
     
        axios.get(`http://localhost:3005/inquiries`).then((response) => {
            setData(response.data);
            console.log(response);
        })
        
    }, [])


    return (

        < div className='courses'>
            <h1>Inquiries</h1>
            {data && data.map(x => <Inq {...x} />)}
        </div>

    );
}

export default Inquiries;

