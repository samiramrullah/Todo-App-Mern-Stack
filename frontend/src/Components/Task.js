import { Card } from 'antd';
import { useState } from 'react';
import BasicModal from '../modal/BasicModal';
const Task = () => {
    const gridStyle = {
        width: '100%',
    };
    const closeModal=()=>{
        setisModalOpen(false)
    }
    const [isModalOpen,setisModalOpen]=useState(false);
    return (
        <div >
            <Card title="Remaining Task" >
                <Card.Grid onClick={()=>setisModalOpen(true)} style={gridStyle}>Buy Laptop</Card.Grid >
                {isModalOpen && <BasicModal isModalOpen={isModalOpen} setIsModalOpen={closeModal}/>}
            </Card>
        </div>
    )
}

export default Task