import React from "react";
import ReactSelect from "react-select";
import Text from "../Type/Text";

import styles from "./styles.module.css";

const commonStyles = {
  color: "#000000",
  fontFamily: "IvyStyle Sans",
  fontSize: "20px",
  lineHeight: "30px",
};

const customStyles = {
  container: (styles) => ({
    ...styles,
    width: "294px",
    height: "46px",
  }),
  control: (styles, { selectProps }) => {
    return {
      ...styles,
      height: "46px",
      boxShadow: "none",
      border: `1px solid ${selectProps.invalid ? "#ff500f" : "#afa7a6"}`,
      "&:hover": {
        border: "1px solid #000000",
      },
    };
  },
  option: (styles) => ({
    ...styles,
    backgroundColor: "#fcfaf9",
    color: "#000000",
    fontFamily: "IvyStyle Sans",
  }),
  value: (styles) => ({
    ...styles,
    ...commonStyles,
  }),
  input: (styles) => ({
    ...styles,
    ...commonStyles,
    "& input": {
      font: "inherit",
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    ...commonStyles,
  }),
};

const Select = ({ label, error, ...props }) => (
  <div className={styles.align}>
    {label && <Text color={error ? "red" : "grey"}>{label}</Text>}
    <ReactSelect
      {...props}
      styles={customStyles}
      components={{
        // Should've used Input: <Input /> but lacking time :(
        IndicatorSeparator: false,
      }}
      placeholder="Select"
      invalid={error}
    />
    {error && <Text color="red">{error}</Text>}
  </div>
);

export default Select;
