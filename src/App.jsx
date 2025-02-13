import { Card, Col, Row, Typography, Button, ConfigProvider } from 'antd';
import { useState } from 'react';
import {  CalendarFilled, HourglassFilled, EllipsisOutlined, CheckCircleOutlined } from "@ant-design/icons";


const { Title, Text } = Typography;

const tasks = [
  {
    id: 1,
    title: "Написать код",
    date: "10.01.2025",
    complited: false,
  },
  {
    id: 2,
    title: "Прочитать 5 книг",
    date: "20.02.2025",
    complited: true,
  },
  {
    id: 3,
    title: "Стать успешным frontend разработчиком апрар попрор",
    date: "30.05.2025",
    complited: false,
  },
];

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const darkTheme = {
    token: {
      colorPrimary: '#8B5DFF',
      colorBgBase: '#8B5DFF',
      colorTextBase: '#F7F7F7',
    },
  };

  const lightTheme = {
    token: {
      colorPrimary: '#1890ff',
      colorBgBase: '#ffffff',
      colorTextBase: '#000000',
    },
  };

 
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
   
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <div style={{ 
          padding: '20px',
          backgroundColor: isDark ? '#1f1f1f' : '#ffffff', 
          minHeight: '100vh'
           }}>
        <Button
          type="default"
          style={{ marginBottom: '20px' }}
          onClick={toggleTheme}
        >
          {isDark ? 'Светлая тема' : 'Темная тема'}
        </Button>

        <Row gutter={[16, 16]}>
          {tasks.map((task) => (
            <Col xs={24} sm={12} md={8} key={task.id}>
              <Card
                extra={<Button type="link" icon={<EllipsisOutlined />} />}


                variant="borderless"
                title={<Title level={4}
                style={{
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
                  maxWidth: '100%',
                }}>{task.title}</Title>}


                style={{
                  boxShadow: isDark ?'1px 2px 4px rgba(167, 67, 203, 0.9)' : '1px 2px 4px rgba(0, 0, 0, 0.1)',
                  transform: task.complited ? "scale(0.9)" : "scale(1)", 
                  transition: "transform 0.3s ease",
                  backgroundColor: task.complited
                    ? (isDark ? '#333' : '#f0f0f0') 
                    : (isDark ? '#222' : 'white'),
                    cursor: 'pointer',
                }}

                onMouseEnter={(e) => {e.currentTarget.style.transform = task.complited ? "scale(0.95)" : "scale(1.05)"}}
                onMouseLeave={(e) => {e.currentTarget.style.transform = task.complited ? "scale(0.9)" : "scale(1)"}}
              >
                <Text 
                type="secondary"
                style={{ color: task.complited
                    ? (isDark ? '#F7F7F7' : '#000000') 
                    : (isDark ? '#F7F7F7' : '#000000') }}><> <CalendarFilled 
                    style={{ 
                              marginRight: 5, 
                              transform: "scale(1.1)",
                              color: 'grey' }} /> Дата: {task.date}</> </Text>
                <br />
                <Text 
                 strong
                 style={{ color: task.complited
                    ? (isDark ? '#F7F7F7' : '#000000') 
                    : (isDark ? '#F7F7F7' : '#000000'), }}>
                  {task.complited ? (<>
                            <CheckCircleOutlined style={{ 
                              marginRight: 5, 
                              transform: "scale(1.05)",
                              color: 'green' }} /> Завершено
                          </>) : (<> <HourglassFilled style={{color: 'orange', marginRight: 5, transform: "scale(1.05)"}} />  В процессе </>)}
                </Text>
                <br />
                <br />
                {!task.complited && (
                  <Button type="primary" onClick={() => alert('Задача выполнена!')}>
                    Done
                  </Button>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default App;
