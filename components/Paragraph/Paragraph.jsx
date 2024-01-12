import { getTextAlign, getFontSizeForParagraph } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";
import { getMarginTop, getMarginBottom, getPaddingTop, getPaddingBottom } from "utils/layout";

export const Paragraph = ({ textAlign = "left", content, textColor, fontSize, marginTop, marginBottom, paddingTop, paddingBottom }) => {
  return (
    <p
      className={`max-w-[1220px] mx-auto break-words ${getPaddingTop(paddingTop)} ${getPaddingBottom(paddingBottom)} ${getMarginTop(marginTop)} ${getMarginBottom(marginBottom)} ${getTextAlign(textAlign)} ${getFontSizeForParagraph(fontSize)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};