import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className, ...otherProps } = props

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    )
}
