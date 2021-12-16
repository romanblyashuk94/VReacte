import s from "./FormControls.module.scss";

export const FormElement =
  (Element) =>
  ({ input, meta, ...props }) => {
    return (
      <div
        className={`${s.formElement} ${
          !meta.active && meta.error ? s.error : null
        }`}
      >
        <Element className={s.field} {...input} {...props} />
        <span className={s.errorText}>{meta.error}</span>
      </div>
    );
  };

export const requiredFormElement =
  (Element) =>
  ({ input, meta, ...props }) => {
    return (
      <div
        className={`${s.formElement} ${
          meta.touched && meta.error ? s.error : null
        }`}
      >
        <Element className={s.field} {...input} {...props} />
        <span className={s.errorText}>{meta.error}</span>
      </div>
    );
  };
