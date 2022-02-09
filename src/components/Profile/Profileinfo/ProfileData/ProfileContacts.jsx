import s from "./ProfileData.module.scss";
import facebookIcon from "../../../../assets/images/contactsLogo/Facebook_icon.png";
import githubIcon from "../../../../assets/images/contactsLogo/github_icon.png";
import vkIcon from "../../../../assets/images/contactsLogo/VK_icon.svg";
import twitterIcon from "../../../../assets/images/contactsLogo/twitter-icon.svg";
import instagramIcon from "../../../../assets/images/contactsLogo/Instagram-Logo.png";
import websiteIcon from "../../../../assets/images/contactsLogo/websiteIcon.png";
import youTubeIcon from "../../../../assets/images/contactsLogo/YouTubeIcon.png";
import mainLinkIcon from "../../../../assets/images/contactsLogo/mainLink.png";

const ProfileConstacts = ({ contacts }) => {
  const contactIcons = {
    facebook: facebookIcon,
    vk: vkIcon,
    github: githubIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    website: websiteIcon,
    youtube: youTubeIcon,
    mainLink: mainLinkIcon,
  };

  const contactsList = Object.entries(contacts).filter(
    ([contact, link]) => link
  );

  return (
    <div className={s.profileContacts}>
      Contacts:
      {contactsList.length > 0 ? (
        contactsList.map(([contact, link]) => (
          <ContactItem key={contact} icon={contactIcons[contact]} link={link} />
        ))
      ) : (
        <span className={s.noContactsSpan}>No Contacts</span>
      )}
    </div>
  );
};

const ContactItem = ({ link, icon }) => {
  return (
    <a href={`https://${link}`} rel="noreferrer" target="_blank">
      <img className={s.contactItem} src={icon} alt="contactItem" />
    </a>
  );
};

export default ProfileConstacts;
