import { FC, useState } from "react";

import { Button, Card, Flex, Space, Typography } from "antd";
import {
  InfoOutlined,
  GlobalOutlined,
  FlagOutlined,
  TranslationOutlined,
  DownOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import { IData_SnippetNews } from "../../types";
import { formatDate } from "../../utils";
import {
  AuthorsList,
  ExpandableText,
  KeywordsTags,
  NewsMetaCard,
} from "../subComponents";
import styles from "./News.module.css";

const { Text, Title } = Typography;

interface NewsProps {
  item: IData_SnippetNews;
}

export const News: FC<NewsProps> = ({ item }) => {
  const { TI, DP, REACH, TRAFFIC, SENT, DOM, CNTR, LANG, AU, AB, KW } = item;

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const [day, montAndYear] = formatDate(DP);

  return (
    <Card className={styles.container}>
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
          <Space size={3}>
            <Text>Top Traffic: </Text>
            {TRAFFIC.map((traffic) => (
              <>
                <Text>{traffic.value}</Text>
                <Text strong>{traffic.count}</Text>
              </>
            ))}
          </Space>
        </Space>
        <Flex gap="small" align="center">
          <Button color="red" variant="solid">
            {SENT}
          </Button>
          <Button
            className={styles.info_btn}
            size="small"
            variant="solid"
            color="default"
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
      <Flex gap="small" className={styles.mb}>
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
        <Space>
          <TranslationOutlined />
          <Text>{LANG[0].toLocaleUpperCase() + LANG[1]}</Text>
        </Space>
        <AuthorsList authors={AU} />
      </Flex>
      <ExpandableText text={AB} keyWords={KW} />
      <KeywordsTags keywords={KW} />
      <Button
        variant="solid"
        className={`${styles.source_btn} ${styles.dark_outlined_btn}`}
      >
        <Text className={styles.source_text}>Original Source</Text>
      </Button>
      <Flex justify="space-between" className={styles.mb}>
        <Space size={5}>
          <Text>Duplicates:</Text>
          <Text strong>{198}</Text>
        </Space>
        <Space>
          <Text>By Relevance</Text>
          <DownOutlined />
        </Space>
      </Flex>
      <NewsMetaCard
        day={day}
        montAndYear={montAndYear}
        data={{ TI, AU, DOM, CNTR, REACH }}
      />
      <Button
        className={`${styles.view_btn} ${styles.dark_outlined_btn}`}
        icon={<DownOutlined />}
      >
        <Text strong>View Duplicates</Text>
      </Button>
    </Card>
  );
};
//
