import {
  Card, Col, Row, Button,
  Input,
} from 'antd';
import { useState } from 'react';
import axios from 'axios'
import './App.css'
import Task from './Components/Task';
const App = () => {
  const [task,settask]=useState();

  const addtask=()=>{
    if(task.length<=1)
    {
      alert("please enter valid task")
    }
    else
    {
        const data={
          task,
        }
        axios.post('http://localhost:5000/task/createtask',data)
        .then(res=>console.log(res))
      console.log(data);
    }
  }
  return (
    <div className='app-main'>
      <div className="site-card-border-less-wrapper">
        <Card
          title="Todo"
          bordered={true}

        >
          <div className='task'>
            <Row>
              <Col>
                <div className="site-input-group-wrapper">
                  <Input.Group compact>
                    <Input onChange={(e)=>settask(e.target.value)}
                      style={{
                        width: '100%',
                      }}
                      defaultValue="sleep"
                    />
                  </Input.Group>
                </div>
              </Col>
              <Col>
                <Button onClick={addtask} type="primary">Submit</Button>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      <Task/>
    </div>
  )
}
export default App