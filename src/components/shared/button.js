import React from "react";
import Button from "react-bootstrap/Button";
//Components
import Image from "./image";

const ButtonComponent = ({
  title,
  type = "",
  textClass,
  onButtonClick,
  icon,
  altIcon,
  disabled = false,
}) => {
  const showIcon = () => {
    if (!icon) {
      return;
    }
    return <Image icon={icon} altIcon={altIcon} />;
  };

  return (
    <>
      <Button
        className="buttonClass ff-md"
        variant="primary"
        onClick={onButtonClick}
        type={type}
        disabled={disabled}
      >
        {showIcon()}
        <span className={textClass}>{title}</span>
      </Button>
    </>
  );
};

export default ButtonComponent;
