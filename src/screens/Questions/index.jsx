import React, { useRef, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";

import Heading from "../../components/Type/Heading";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Input from "../../components/Input";
import Masked from "../../components/MaskedInput";

import DataContext from "../../utils/DataContext";
import { QUESTIONS, getSelectOptions } from "./values";

import styles from "./styles.module.css";
import Select from "../../components/Select";

const Questions = ({ questions = QUESTIONS }) => {
  const [currentIndex, bumpIndex] = useState(0);
  const {
    reset,
    register,
    handleSubmit,
    errors,
    control: formControl,
  } = useForm();
  const { push } = useHistory();
  const progress = useRef(0);

  useEffect(() => {
    // Hacky way to reinitialize form so it won't trigger validation on next questions onChange
    reset();
  }, [currentIndex, reset]);

  useEffect(() => {
    progress.current = (100 / questions.length) * (currentIndex + 1);
  }, [currentIndex, questions.length]);

  const [data, setData] = useContext(DataContext);
  const question = questions[currentIndex];

  const onSubmit = (payload) => {
    setData({ ...data, ...payload });
    if (questions.length !== currentIndex + 1) {
      bumpIndex(currentIndex + 1);
    } else {
      push("/result");
    }
  };

  const renderQuestion = ({ title, fields }) => {
    const renderedFields = fields.map(
      ({ name, validation, type, label, mask, control }) => {
        switch (control) {
          case "input":
            return (
              <Input
                key={name}
                ref={register({ ...validation })}
                type={type}
                name={name}
                label={label}
                error={errors[name]?.message}
              />
            );
          case "mask":
            return (
              <Controller
                key={name}
                as={<Masked />}
                rules={{
                  ...validation,
                }}
                type={type}
                name={name}
                label={label}
                mask={mask}
                error={errors[name]?.message}
                control={formControl}
                defaultValue=""
              />
            );
          case "select":
            return (
              <Controller
                key={name}
                render={({ onChange, onBlur, value }) => (
                  <Select
                    options={getSelectOptions(type)}
                    error={errors[name]?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label={label}
                  />
                )}
                rules={{
                  ...validation,
                }}
                name={name}
                control={formControl}
                defaultValue=""
              />
            );
          default:
            return "";
        }
      }
    );

    return (
      <>
        <Heading>{title}</Heading>
        <div
          className={classNames(styles.fields, {
            [styles.separate]: renderedFields.length > 1,
          })}
        >
          {renderedFields}
        </div>
      </>
    );
  };

  return (
    <>
      <ProgressBar progress={progress.current} />
      <div className={styles.container}>
        {renderQuestion(question)}
        <Button className={styles.button} onClick={handleSubmit(onSubmit)}>
          {questions.length === currentIndex + 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </>
  );
};

export default Questions;
