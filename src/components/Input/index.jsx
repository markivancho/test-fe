import React from "react";
import classNames from "classnames";

import Text from "../Type/Text";

import styles from "./styles.module.css";

const Input = ({
  children,
  value,
  type,
  label,
  name,
  error,
  forwardedRef,
  ...props
}) => (
  <div className={styles.field}>
    {label && <Text color={error ? "red" : "grey"}>{label}</Text>}
    {children ? (
      children
    ) : (
      <input
        {...props}
        className={classNames(styles.input, {
          [styles.error]: error,
          [styles.active]: value,
        })}
        name={name}
        type={type}
        value={value}
        ref={forwardedRef}
      />
    )}
    {error && <Text color="red">{error}</Text>}
  </div>
);

export default React.forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));
