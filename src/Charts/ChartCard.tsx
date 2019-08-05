import * as React from "react";
import {CardProps} from "antd/lib/card";
import {Card} from "antd";
import classNames from 'classnames';
const styles = require('./ChartCard.less');

export type ChartCartProps = CardProps & {
    contentHeight? : number,
    avatar? : React.ReactNode,
    action? :any,
    total? : any,
    footer? : any,
};
const renderTotal = (total:any) => {
    let totalDom;
    switch (typeof total) {
        case 'undefined':
            totalDom = null;
            break;
        case 'function':
            totalDom = <div className={styles.total}>{total()}</div>;
            break;
        default:
            totalDom = <div className={styles.total}>{total}</div>;
    }
    return totalDom;
};
export const ChartCardContent : React.FunctionComponent<ChartCartProps> = (props)=>{
    const { contentHeight, title, avatar, action, total, footer, children, loading } = props;
    if (loading) {
        return null;
    }
    return (
        <div className={styles.chartCard}>
            <div
                className={classNames(styles.chartTop, {
                    [styles.chartTopMargin]: !children && !footer,
                })}
            >
                <div className={styles.avatar}>{avatar}</div>
                <div className={styles.metaWrap}>
                    <div className={styles.meta}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.action}>{action}</span>
                    </div>
                    {renderTotal(total)}
                </div>
            </div>
            {children && (
                <div className={styles.content} style={{ height: contentHeight || 'auto' }}>
                    <div className={contentHeight && styles.contentFixed}>{children}</div>
                </div>
            )}
            {footer && (
                <div
                    className={classNames(styles.footer, {
                        [styles.footerMargin]: !children,
                    })}
                >
                    {footer}
                </div>
            )}
        </div>
    );
};
export const ChartCard : React.FunctionComponent<ChartCartProps> = (props)=>{
    const {
        loading = false,
        contentHeight,
        title,
        avatar,
        action,
        total,
        footer,
        children,
        ...rest
    } = props;
    return (
        <Card loading={loading} bodyStyle={{ padding: '20px 24px 8px 24px' }} {...rest}>
            <ChartCardContent {...props}/>
        </Card>
    );
};