import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Props {
    onSelect: Function;
    isActive: boolean,
    router: string,
    name: string
}

export const TabLink: FunctionComponent<Props> = ({ onSelect, isActive, router, name }: Props) => {
    return (
        <li>
            <Link to={router}
                className={`${isActive ? "active" : ""}`}
                onClick={() => onSelect(router)}
            >{name}</Link>
        </li>
    )


}

