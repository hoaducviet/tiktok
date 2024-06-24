import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if(disabled){
        delete props.onClick;
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled
    });
    if (to) {
        props.to = to;
        Comp = Link;
    } else {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    );
}

export default AccountItem;
