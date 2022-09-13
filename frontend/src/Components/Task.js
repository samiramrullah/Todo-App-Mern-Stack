import { Button, Card } from 'antd';
import { useState } from 'react';
const Task = () => {
    const gridStyle = {
        width: '100%',
    };
    const [showedit, setshowedit] = useState(false);
    return (
        <div >
            <Card title="Remaining Task" >
                <Card.Grid style={gridStyle}>{showedit === true ? (
                    <input />
                ) : (
                    <p>Buy laptop</p>
                )} <Button>Delete</Button> <Button onClick={()=>setshowedit(true)}>Edit</Button>  </Card.Grid >
            </Card>
        </div>
    )
}
export default Task;