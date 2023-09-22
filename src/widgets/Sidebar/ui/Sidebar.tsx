import React, {FC, useState} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className, ...otherProps} = props

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*Lang Switcher*/}
            </div>

        </div>
    );
};

