import React from 'react';
import Button from "../Button/Button";
import {useEffect} from "@types/react";

const tg = window.Telegram.WebApp

const Header = () => {

    useEffect(() => {
        tg.ready()
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={"username"}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;