import { Card, Col, Row, Typography, Button } from "antd";

const { Title, Text } = Typography;

const tasks = [
  {
    id: 1,
    title: "Выучить React",
    date: "10.01.2025",
    complited: false,
  },
  {
    id: 2,
    title: "Разобраться с Redux",
    date: "20.02.2025",
    complited: true,
  },
  {
    id: 3,
    title: "Написать проект",
    date: "30.03.2025",
    complited: false,
  },
];

const App = () => (
  <Row gutter={[16, 16]} style={{ padding: "20px" }}>
    {tasks.map((task) => (
      <Col xs={24} sm={12} md={8} key={task.id}>
        <Card
          title={<Title level={4}>{task.title}</Title>}
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: task.complited ? "#f0f0f0" : "white",
          }}
        >
          <Text type="secondary">📅 Дата: {task.date}</Text>
          <br />
          <Text strong style={{ color: task.complited ? "gray" : "black" }}>
            {task.complited ? "✅ Завершено" : "⏳ В процессе"}
          </Text>
          <br />
          <br />
          {!task.complited && (
            <Button type="primary" onClick={() => alert("Задача выполнена!")}>
              Done
            </Button>
          )}
        </Card>
      </Col>
    ))}
  </Row>
);

export default App;
