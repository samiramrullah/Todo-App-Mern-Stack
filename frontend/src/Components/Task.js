import React from 'react';
import { Button, Card } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios'
const Task = () => {
    useEffect(() => {
        axios.get('http://localhost:5000/task/getalltask')
            .then(res => setalltasks(res.data))
            .catch(err => console.log(err))
    }, []);
    const gridStyle = {
        width: '100%',
    };
    const [showedit, setshowedit] = useState(false);
    const [alltasks, setalltasks] = useState();
    const editButtonHandler = () => {
        if (showedit === false) {
            setshowedit(true);
        }
        else {
            setshowedit(false);
        }
    }
    const deleteHandler = () => {
        window.alert('deleted')
    }
    console.log(alltasks);
    return (
        <div >
            <Card title="Remaining Task" >
                <Card.Grid style={gridStyle}>
                    <div>
                        {alltasks && (
                            alltasks.tasks.map(itm => (
                                <>
                                    <p>{showedit === true ? (<input />) : (itm.task)}</p>
                                    <Button onClick={deleteHandler}>Delete</Button> <Button onClick={editButtonHandler}>{showedit === true ? (<p>Save</p>) : (<p>Edit</p>)}</Button>  </>
                            ))
                        )}
                    </div>
                </Card.Grid >
            </Card>
        </div>
    )
}
export default Task;