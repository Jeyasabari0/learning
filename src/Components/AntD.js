import { Card, Space } from 'antd';
import React from 'react';

function AntD() {
    return (
        <Space >
            <Card title="Default size card" style={{ width: 600}}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>
    );
}
export default AntD