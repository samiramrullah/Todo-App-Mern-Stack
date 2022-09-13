import { Card } from 'antd';
const Task = () => {
    const gridStyle = {
        width: '100%',
        // textAlign: 'center',
    };
    return (
        <div>
            <Card title="Card Title">
                <Card.Grid style={gridStyle}>Buy Laptop</Card.Grid>
            </Card>
        </div>
    )
}

export default Task