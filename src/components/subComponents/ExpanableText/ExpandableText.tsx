import { FC, useState } from "react";

import { Button, Flex, Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import { truncateText, findKeywordsInText } from "../../../utils";
import { IData_TagItem } from "../../../types";
import styles from "./ExpanableText.module.css";

const { Text } = Typography;

interface ExpandableTextProps {
  text: string;
  keyWords: IData_TagItem[];
  maxLength?: number;
}

export const ExpandableText: FC<ExpandableTextProps> = (props) => {
  const { text, keyWords, maxLength = 500 } = props;

  const [expanded, setExpanded] = useState(false);

  const displayText = expanded ? text : truncateText(text, maxLength);
  const textParts = findKeywordsInText(displayText, keyWords);
  const shouldShowButton = text.length > maxLength;

  return (
    <Flex vertical align="flex-start" gap={1} className={styles.mb}>
      <Text>
        {textParts.map((part, index) =>
          part.isKeyword ? (
            <Text key={index} className={styles.keyword}>
              {part.text}
            </Text>
          ) : (
            <>{part.text}</>
          )
        )}
      </Text>
      {shouldShowButton && (
        <Button
          type="link"
          size="small"
          onClick={() => setExpanded(!expanded)}
          className={styles.show_btn}
        >
          {expanded ? "Show less" : "Show more"}
          {expanded ? (
            <UpOutlined className={styles.icon} />
          ) : (
            <DownOutlined className={styles.icon} />
          )}
        </Button>
      )}
    </Flex>
  );
};
