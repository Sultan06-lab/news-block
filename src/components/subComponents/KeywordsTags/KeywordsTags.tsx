import { FC, useState } from "react";

import { Space, Tag, Button } from "antd";

import { IData_TagItem } from "../../../types";
import styles from "./KeywordsTags.module.css";

interface KeywordsTagsProps {
  keywords: IData_TagItem[];
  initialVisibleCount?: number;
}

export const KeywordsTags: FC<KeywordsTagsProps> = (props) => {
  const { keywords, initialVisibleCount = 5 } = props;

  const [showAll, setShowAll] = useState(false);
  const visibleKeywords = showAll
    ? keywords
    : keywords.slice(0, initialVisibleCount);
  const hiddenCount = keywords.length - initialVisibleCount;

  return (
    <Space size={[8, 8]} wrap>
      {visibleKeywords.map((keyword, index) => (
        <Tag key={index} className={styles.tag}>
          {keyword.value} <span className="keyword-count">{keyword.count}</span>
        </Tag>
      ))}
      {keywords.length > initialVisibleCount && (
        <Button type="link" size="small" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : `Show All +${hiddenCount}`}
        </Button>
      )}
    </Space>
  );
};
