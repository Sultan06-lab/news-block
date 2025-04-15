import { useEffect, useState } from "react";
import "./App.css";
import { News } from "./components/News/News";
import { fetchNews } from "./api";
import { Spin } from "antd";
import { IData_SnippetNews } from "./types";

function App() {
  const [data, setData] = useState<IData_SnippetNews | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchNews();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          throw error;
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) return <Spin size="large" />;
  if (error) return <span>Ошибка !</span>;
  if (!data) return <span>Нет данных</span>;

  return (
    <div className="main">
      <News item={data} />
    </div>
  );
}

export default App;
