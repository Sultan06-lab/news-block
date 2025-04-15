import { FC, useState } from "react";

import { Button, Card, Flex, Space, Typography } from "antd";

import styles from "./NewsMetaCard.module.css";
import { IData_SnippetNews } from "../../../types";
import {
  CheckOutlined,
  FlagOutlined,
  GlobalOutlined,
  InfoOutlined,
} from "@ant-design/icons";
import { AuthorsList } from "../AuthorList/AuthorList";

const { Text, Title } = Typography;

type INewsMetaCard = Pick<
  IData_SnippetNews,
  "TI" | "AU" | "CNTR" | "DOM" | "REACH"
>;

interface NewsMetaCardProps {
  day: string | number;
  montAndYear: string | number;
  data: INewsMetaCard;
}

export const NewsMetaCard: FC<NewsMetaCardProps> = (props) => {
  const { day, montAndYear, data } = props;
  const { TI, AU, CNTR, DOM, REACH } = data;

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card className={styles.card}>
      <Flex justify="space-between">
        <Space size="large">
          <Space size={5}>
            <Text strong>{day}</Text>
            <Text>{montAndYear}</Text>
          </Space>
          <Space size={3}>
            <Text strong>{REACH}K</Text>
            <Text>Reach</Text>
          </Space>
        </Space>
        <Flex gap="small" align="center">
          <Button
            size="small"
            className={styles.info_btn}
            color="default"
            variant="solid"
          >
            <InfoOutlined />
          </Button>
          <Button
            className={styles.check_btn}
            type={isChecked ? "primary" : "default"}
            icon={isChecked ? <CheckOutlined /> : <></>}
            color="default"
            variant="solid"
            onClick={handleClick}
          ></Button>
        </Flex>
      </Flex>
      <Title level={5}>
        <a target="_blank" rel="noopener noreferrer">
          {TI}
        </a>
      </Title>
      <Flex gap="small" className={styles.meta}>
        <Space size={5} align="center">
          <GlobalOutlined />
          <a target="_blank" rel="noopener noreferrer">
            {DOM}
          </a>
        </Space>
        <Space>
          <FlagOutlined />
          <Text>{CNTR}</Text>
        </Space>
        <AuthorsList authors={AU} />
      </Flex>
    </Card>
  );
};
