import * as React from "react";
import { CardProps } from "antd/lib/card";
export declare type ChartCartProps = CardProps & {
    contentHeight?: number;
    avatar?: React.ReactNode;
    action?: any;
    total?: any;
    footer?: any;
};
export declare const ChartCardContent: React.FunctionComponent<ChartCartProps>;
export declare const ChartCard: React.FunctionComponent<ChartCartProps>;
