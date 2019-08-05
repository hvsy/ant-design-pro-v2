import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
const styles = require('./Trend.less');

export type TrendProps = {
    colorful?: boolean;
    flag: 'up' | 'down';
    style?: React.CSSProperties;
    reverseColor?: boolean;
    className?: string;
};
export const Trend : React.FunctionComponent<TrendProps> =
    ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
    const classString = classNames(
        styles.trendItem,
        {
            [styles.trendItemGrey]: !colorful,
            [styles.reverseColor]: reverseColor && colorful,
        },
        className
    );
    return (
        <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
            <span>{children}</span>
            {flag && (
                <span className={styles[flag]}>
          <Icon type={`caret-${flag}`} />
        </span>
            )}
        </div>
    );
};

