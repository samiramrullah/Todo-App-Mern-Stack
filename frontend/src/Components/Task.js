import { Button, Card } from 'antd';
import { useState } from 'react';
const Task = () => {
    const gridStyle = {
        width: '100%',
    };
    const [showedit, setshowedit] = useState(false);
    const editButtonHandler=()=>{
         if(showedit===false)
         {
            setshowedit(true);
         }
         else
         {
            setshowedit(false);
         }
    }
    const deleteHandler=()=>{
        window.alert('deleted')
    }
    return (
        <div >
            <Card title="Remaining Task" >
                <Card.Grid style={gridStyle}>{showedit === true ? (
                    <input />
                ) : (
                    <p>Buy laptop</p>
                )} <Button onClick={deleteHandler}>Delete</Button> <Button onClick={editButtonHandler}>{showedit===true?(<p>Save</p>):(<p>Edit</p>)}</Button>  </Card.Grid >
            </Card>
        </div>
    )
}
export default Task;