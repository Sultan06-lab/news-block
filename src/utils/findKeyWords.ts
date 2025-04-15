import { IData_TagItem } from "../types";

export interface TextPart {
  text: string;
  isKeyword: boolean;
}

export const findKeywordsInText = (
  text: string,
  keywords: IData_TagItem[]
): TextPart[] => {
  if (!keywords || keywords.length === 0) return [{ text, isKeyword: false }];

  const keywordValues = keywords.map((kw) => kw.value.toLowerCase());
  const regex = new RegExp(`(${keywordValues.join("|")})`, "gi");

  return text
    .split(regex)
    .filter((part) => part !== undefined && part !== "")
    .map((part) => ({
      text: part,
      isKeyword: keywordValues.includes(part.toLowerCase()),
    }));
};
