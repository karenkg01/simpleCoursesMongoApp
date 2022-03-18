import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const InquireForm = () => {

    const navigate  = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3005/courses/${id}`).then((response) => {
                setData(response.data);
                console.log(response);
            })
        }
    }, [id])

    const handleSubmit = ()=> {
        axios.post('http://localhost:3005/inquiries', {name, id, message})
        .then((response) => {
            navigate('/inquiries'); 
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
            {data &&
            <>
                <form>
                <h1>inquirie Form</h1>
                <h2>{data.title}</h2>
                {/* <p>{data.description}</p> */}
                <div className="form-group">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=> setName(e.target.value) } />
                </div>
                <div className="form-group">
                    <label for="message" className="form-label">message</label>
                    <textarea className="form-control" id="message" rows="3" onChange={(e)=> setMessage(e.target.value) }></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </>
            }


            
        </>
    );
}

export default InquireForm;

