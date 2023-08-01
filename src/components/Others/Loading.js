import { Space, Spin } from 'antd';

const Loading = () => (
    <div className='text-center mt-5'>
    <Space direction="vertical">
      <Spin size="large"/>
    </Space>
    </div>
  );

export default Loading;
