import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header className="py-4 bg-white">
            <div className="mx-auto px-6 max-w-[1240px] container">
                <Link className="text-2xl font-bold" to={"/"}>
                    LOGO
                </Link>
            </div>
        </header>
    );
};

export default Header;
