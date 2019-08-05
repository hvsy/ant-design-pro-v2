import React from 'react';

const styles = require('./Field.less');

export type FieldProps = {
    label : string,
    value : any,
};

export const Field : React.FunctionComponent<FieldProps> = ({ label, value, ...rest }) => (
    <div className={styles.field} {...rest}>
        <span className={styles.label}>{label}</span>
        <span className={styles.number}>{value}</span>
    </div>
);

