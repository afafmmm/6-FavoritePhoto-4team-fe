import React from "react";
import clsx from "clsx";

const Button = ({
  type,
  size: sizeProp,
  disabled = false,
  children,
  className,
  ...rest
}) => {
  // 모든 버튼이 공유하는 기본 스타일
  const baseStyles = clsx(
    "rounded-[2px]",
    "flex",
    "items-center",
    "justify-center",
    "text-center",
    "gap-[10px]",
    "transition-colors"
  );

  let variant = "primary";
  let thickness = "thin";
  let defaultChildrenText = "Button";

  switch (type) {
    case "purchase":
      variant = "primary";
      thickness = "thick";
      defaultChildrenText = "포토카드 구매하기";

      break;
    case "exchangeGreen":
      variant = "primary";
      thickness = "thin";
      defaultChildrenText = "포토카드 교환하기";

      break;
    case "approve":
      variant = "primary";
      thickness = "thin";
      defaultChildrenText = "승인";

      break;
    case "exchangeBlack":
      variant = "secondary";
      thickness = "thin";
      defaultChildrenText = "포토카드 교환하기";

      break;
    case "reject":
      variant = "secondary";
      thickness = "thin";
      defaultChildrenText = "거절";

      break;
    case "sellDown":
      variant = "secondary";
      thickness = "thick";
      defaultChildrenText = "판매 내리기";

      break;
    case "edit": // 수정하기 case 추가함
      variant = "primary";
      thickness = "thick";
      defaultChildrenText = "수정하기";
      break;
    default:
      console.warn("Button: Unknown type prop provided -", type);
  }

  // Variant (색상 테마) 및 disabled 상태에 따른 스타일
  const variantStyles = clsx({
    "bg-main text-my-black": variant === "primary" && !disabled,
    "bg-gray-400 text-my-black": variant === "primary" && disabled,
    "bg-my-black text-white border border-gray-100": variant === "secondary",
  });

  // 텍스트 크기 (type별로 조절)
  const textSize =
    type === "edit" || type === "sellDown"
      ? "text-xs font-semibold"
      : "text-700-16";

  const verticalPadding = thickness === "thick" ? "py-[25px]" : "py-[17px]";
  let sizeSpecificStyles = "";

  switch (type) {
    case "purchase":
      sizeSpecificStyles = clsx(
        verticalPadding,
        "w-[345px] h-[75px]",
        "md:w-[342px] md:h-[75px]",
        "lg:w-[440px] lg:h-[80px]"
      );
      break;
    case "exchangeGreen":
    case "exchangeBlack":
      sizeSpecificStyles = clsx(
        verticalPadding,
        "w-[345px] h-[55px]",
        "md:w-[440px] md:h-[55px]",
        "lg:w-[520px] lg:h-[60px]"
      );
      break;
    case "sellDown":
    case "edit":
      sizeSpecificStyles = clsx(verticalPadding, "h-[45px]", "lg:h-[45px]");
      break;
    case "approve":
    case "reject":
      sizeSpecificStyles = clsx("w-[150px] h-[40px]", verticalPadding);
      break;

    default:
      break;
  }

  // 모든 스타일 클래스를 결합
  const allStyles = clsx(
    baseStyles,
    variantStyles,
    sizeSpecificStyles,
    textSize,
    className,

    { "cursor-not-allowed": disabled && variant === "primary" }
  );

  return (
    <button className={allStyles} disabled={disabled} {...rest}>
      {children || defaultChildrenText}
    </button>
  );
};

export default Button;
