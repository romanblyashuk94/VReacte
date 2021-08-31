import s from './Messages.module.scss'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrap}>
                <form action="#">
                    <input type="text" placeholder='Search' className={s.search} />
                </form>
                <div className={s.dialogs__item}>
                    <div className={s.userInfo}>
                        <img className={s.userAva} src="https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg" alt="UserAva" />
                        <p className={s.userName}>Kolobok Ivanovich</p>
                    </div>
                    <div className={s.onlineInfo}>
                        Online
                    </div>
                </div>
                <div className={s.dialogs__item}>
                    <div className={s.userInfo}>
                        <img className={s.userAva} src="https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg" alt="UserAva" />
                        <p className={s.userName}>Kolobok Ivanovich</p>
                    </div>
                    <div className={s.onlineInfo}>
                        Online
                    </div>
                </div>
            </div>
            <div className={s.messages__wrap}>
                <div className={s.messages}>
                    <div className={s.messageItem + ' ' + s.myMessage}>
                        <div className={s.space}></div>
                        <div className={s.message}>
                            <div className={s.messageText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima assumenda aliquid tempora velit ratione, iste porro eveniet quibusdam, quia recusandae repellendus? Sequi, necessitatibus aperiam assumenda inventore tempora unde culpa.</div>
                            <div className={s.messageTime}>3:00 pm</div>
                        </div>
                    </div>
                    <div className={s.messageItem}>
                    <div className={s.space}></div>
                        <div className={s.message}>
                            <div className={s.messageText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima assumenda aliquid tempora velit ratione, iste porro eveniet quibusdam, quia recusandae repellendus? Sequi, necessitatibus aperiam assumenda inventore tempora unde culpa.!</div>
                            <div className={s.messageTime}>3:03 pm</div>
                        </div>
                    </div>
                </div>
                <div className={s.newMessage}>
                    <form action="#">
                        <textarea placeholder='Write message' className={s.messageArea} name="message"></textarea>
                        <button className={s.sendButton}>Send</button>
                    </form>
                </div>                
            </div>
        </div>
    )
}

export default Dialogs