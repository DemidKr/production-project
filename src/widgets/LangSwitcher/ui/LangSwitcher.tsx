import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {className, ...otherProps} = props

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={toggle} theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};

