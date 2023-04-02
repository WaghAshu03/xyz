import { useEffect, useRef, useState } from "react";
import styles from "./Herosection.module.scss";
import axios from "axios";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const HeroSection = () => {
  const JoinWaitListInput = useRef<HTMLInputElement>();
  const JoinWaitListMessage = useRef<HTMLDivElement>();
  const [SubmitEmailLocked, setSubmitEmailLocked] = useState(false);

  const JoinWaiListMessageVisible = (
    state: boolean,
    color = "#000",
    innerHTML = "Message"
  ) => {
    JoinWaitListMessage.current.innerHTML = innerHTML;
    JoinWaitListMessage.current.style.color = color;
    if (state) {
      JoinWaitListMessage.current.style.opacity = "1";
      JoinWaitListMessage.current.style.bottom = "-1.5rem";
    } else {
      JoinWaitListMessage.current.style.opacity = "0";
      JoinWaitListMessage.current.style.bottom = "0rem";
    }
  };

  const SubmitEmail = async () => {
    if (SubmitEmailLocked) return 1;

    if (JoinWaitListInput.current.value === "") {
      JoinWaiListMessageVisible(true, "#f00", "Please enter your email");
      return 1;
    }
    // console.log(validateEmail(JoinWaitListInput.current.value));

    if (validateEmail(JoinWaitListInput.current.value) === null) {
      JoinWaiListMessageVisible(true, "#f00", "Please enter a valid email");
      return 1;
    }

    setSubmitEmailLocked((prevVal) => true);
    // --------------------------------------------------
    JoinWaiListMessageVisible(
      true,
      "#000",
      "Please Wait&nbsp;&nbsp;&nbsp;&nbsp;"
    );

    let i = 0;

    const PleaseWaitInterval = setInterval(() => {
      let temp = "";
      let temp2 = "";

      for (let j = 0; j < (i % 4) + 1; j++) {
        temp = temp + ".";
      }

      for (let j = 0; j < 3 - (i % 4); j++) {
        temp2 = temp2 + "&nbsp;";
      }
      JoinWaitListMessage.current.innerHTML = "Please Wait " + temp + temp2;
      i++;
    }, 500);

    try {
      let res = await axios.post(
        `https://actual01-coming-soon.onrender.com/api/emails`,
        {
          email: JoinWaitListInput.current.value,
        }
      );
    } catch (err) {
      clearInterval(PleaseWaitInterval);
      console.log(err);

      JoinWaiListMessageVisible(
        true,
        "#f00",
        "This service is unavailable right now. Please try after sometime."
      );
    }

    clearInterval(PleaseWaitInterval);
    JoinWaiListMessageVisible(true, "#000", "Email Registered");

    // --------------------------------------------------
    setSubmitEmailLocked((prevVal) => false);
  };

  useEffect(() => {
    const WetList = document.querySelector(`.${styles.HeroSection} span`);
    const LineThroughVector = document.querySelector(
      `.${styles.HeroSection} span > img`
    );
    const WaitlistVector = document.querySelector(
      `.${styles.HeroSection} span > img:nth-child(2)`
    );

    LineThroughVector.style.width = `${WetList.offsetWidth + 6}px`;

    const JoinWaitlistVectorImg = document.querySelector(
      `.${styles.JoinWaitList} > img`
    );
    if (window.innerWidth < 1040)
      JoinWaitlistVectorImg.src = "/JoinWaitlistVector2.svg";
    else JoinWaitlistVectorImg.src = "/JoinWaitlistVector.svg";

    window.addEventListener("resize", (e) => {
      LineThroughVector.style.width = `${WetList.offsetWidth + 6}px`;

      // console.log(window.innerWidth);

      // Join Waitlist Image

      if (window.innerWidth < 1040)
        JoinWaitlistVectorImg.src = "/JoinWaitlistVector2.svg";
      else JoinWaitlistVectorImg.src = "/JoinWaitlistVector.svg";
    });

    JoinWaitListInput.current?.addEventListener("keyup", (e) => {
      if (e.key === "Enter") SubmitEmail();
    });
  }, []);

  return (
    <div className={`${styles.HeroSection} container`}>
      <div className={`${styles.CommingSoonSubtitle}`}>
        ActualOne Protocol is coming soon ⚡
      </div>
      <div className={`${styles.HeroText}`}>
        Join{" "}
        <span>
          <img src="/line-through-vector.svg" alt="" />
          <img src="/WaitlistVector.svg" alt="" />
          Wetlist
        </span>{" "}
        & Get notified when we <span>Launch</span>. 🚀
        <img src="/HeroTextVector.svg" alt="" />
      </div>

      <div className={`${styles.JoinWaitList}`}>
        <div
          className={`${styles.JoinWaitListMessage}`}
          ref={JoinWaitListMessage}
        ></div>
        <div className={`${styles.JoinWaitListInput}`}>
          <input
            type="text"
            placeholder="What's your email"
            ref={JoinWaitListInput}
          />
          <button onClick={SubmitEmail}>Subscribe</button>
        </div>
        <img src="" alt="" />
      </div>
      <img
        src="/BottomLeftScribble.svg"
        alt=""
        className={styles.BottomLeftScribble}
      />
    </div>
  );
};

export default HeroSection;
