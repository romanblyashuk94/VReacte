import s from './NewMessage.module.scss'

const NewMessage = () => {
  return (
    <div className={s.newMessage}>
      <form action="#">
        <textarea
          placeholder="Write message"
          className={s.messageArea}
          name="message"
        ></textarea>
        <button className={s.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default NewMessage 