import s from "./FormControls.module.scss";

export const FormElement =
  (Element) =>
  ({ input, meta, ...props }) => {
    return (
      <div
        className={`${s.formControl} ${
          meta.visited && meta.error ? s.error : null
        }`}
      >
        <Element className={s.field} {...input} {...props} />
        <span className={s.errorText}>{meta.error}</span>
      </div>
    );
  };
