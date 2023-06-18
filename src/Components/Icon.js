import React from "react";
import * as Ionic5 from "react-icons/io5";
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import * as Ci from "react-icons/ci";
import * as Si from "react-icons/si";
import * as Fi from "react-icons/fi";

const ReactIcon = (props) => {

    const {
        iconName,
        iconType,
        iconColor = "text-white",
        classname = "",
    } = props;

    let icon = "";
    if (iconName !== null && iconName !== "") {
        switch (iconType) {
            case "ionic5":
                icon = React.createElement(Ionic5[iconName]);
                break;
            case "ai":
                icon = React.createElement(Ai[iconName]);
                break;
			case "bi":
				icon = React.createElement(Bi[iconName]);
				break;
            case "si":
                icon = React.createElement(Si[iconName]);
                break;
            case "ci":
                icon = React.createElement(Ci[iconName]);
                break;
            case "fi":
                icon = React.createElement(Fi[iconName]);
                break;
            default:
                break;
        }
    }
    
    return (
        <span className={`${classname.toString()} ${iconColor.toString()}`}>
            {icon}
        </span>
    );
};

export default ReactIcon;