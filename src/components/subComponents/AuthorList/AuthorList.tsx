import { FC } from "react";

import { Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface AuthorsListProps {
  authors: string[];
  maxVisible?: number;
}

export const AuthorsList: FC<AuthorsListProps> = (props) => {
  const { authors, maxVisible = 2 } = props;
  const visibleAuthors = authors.slice(0, maxVisible);
  const hasMoreAuthors = authors.length > maxVisible;

  return (
    <Space size={3} align="center">
      <UserOutlined />
      {visibleAuthors.map((author, index) => (
        <>
          <Text key={index}>{author},</Text>
        </>
      ))}
      {hasMoreAuthors && <Text>et al.</Text>}
    </Space>
  );
};
