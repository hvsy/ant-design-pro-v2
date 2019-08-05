import React from 'react';
export declare type TrendProps = {
    colorful?: boolean;
    flag: 'up' | 'down';
    style?: React.CSSProperties;
    reverseColor?: boolean;
    className?: string;
};
export declare const Trend: React.FunctionComponent<TrendProps>;
