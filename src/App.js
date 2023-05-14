import { Button, DatePicker, Space, version } from "antd";

import "antd/dist/reset.css";
import "./styles.css";

function MyButton({ name }) {
  return <Button type="primary">{name}</Button>;
}

export default function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <MyButton name="Submit" />
      </Space>
    </div>
  );
}
