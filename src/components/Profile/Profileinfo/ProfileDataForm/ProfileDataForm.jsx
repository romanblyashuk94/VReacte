import s from "./ProfileDataForm.module.scss";
import closeIcon from "../../../../assets/images/Close.svg";
import { maxLength, required } from "../../../../helpers/validators/validators";
import { Field, reduxForm } from "redux-form";
import { ProfileDataFormElement } from "../../../common/FormControls/FormControls";

const maxLength200 = maxLength(200);
const maxLength500 = maxLength(500);
const Input = ProfileDataFormElement("input");

const ProfileDataForm = ({ handleSubmit, setEditMode, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.profileDataForm}>
        <div className={s.popUpBody}>
          <div className={s.formContent}>
            <img
              onClick={() => setEditMode(false)}
              className={s.closeForm}
              src={closeIcon}
              alt="closePopUp"
            />
            <h2 className={s.contactsTitle}>Profile Information:</h2>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Full Name</div>
              <Field
                type="text"
                placeholder="Full Name"
                component={Input}
                validate={[required, maxLength200]}
                name={"fullName"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>About Me</div>
              <Field
                type="text"
                placeholder="Something about me"
                component={Input}
                validate={[required, maxLength500]}
                name={"aboutMe"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Looking for a Job?</div>
              <Field
                className={s.checkboxInput}
                type="checkbox"
                component={"input"}
                validate={[]}
                name={"lookingForAJob"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Job Description</div>
              <Field
                type="text"
                placeholder="What job are you looking?"
                component={"input"}
                validate={[]}
                name={"lookingForAJobDescription"}
              />
            </div>
            <h2 className={s.contactsTitle}>Contacts:</h2>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Facebook</div>
              <Field
                type="text"
                placeholder="facebook.com/*****"
                component={"input"}
                validate={[]}
                name={"contacts.facebook"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Github</div>
              <Field
                type="text"
                placeholder="github.com/*****"
                component={"input"}
                validate={[]}
                name={"contacts.github"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>VK</div>
              <Field
                type="text"
                placeholder="vk.com/id*****"
                component={"input"}
                validate={[]}
                name={"contacts.vk"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Instagram</div>
              <Field
                type="text"
                placeholder="instagram.com/******"
                component={"input"}
                validate={[]}
                name={"contacts.instagram"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Twitter</div>
              <Field
                type="text"
                placeholder="twitter.com/*****"
                component={"input"}
                validate={[]}
                name={"contacts.twitter"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Website</div>
              <Field
                type="text"
                placeholder="yourwebsite.com"
                component={"input"}
                validate={[]}
                name={"contacts.website"}
              />
            </div>
            <div className={s.inputWraper}>
              <div className={s.fieldDiscription}>Youtube</div>
              <Field
                type="text"
                placeholder="youtube.com/****"
                component={"input"}
                validate={[]}
                name={"contacts.youtube"}
              />
            </div>
            {error && <div className={s.submitError}>{error}</div>}
            <button className={s.submitButton}>Save</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "profileDataForm",
})(ProfileDataForm);
