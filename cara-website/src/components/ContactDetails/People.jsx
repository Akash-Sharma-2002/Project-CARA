import React from "react";
import style from "./ContactDetails.module.css";
import { people } from "../../assets/asset";

const People = () => {
  return (
    <div className={style.people}>
      <div>
        <img src={people.h1} alt="" />
        <p>
          <span>Jhon Doe</span>Senior Marketing Manager <br />
          Phone: + 000 123 000 77 88 <br />
          Email: conatct@example.com
        </p>
      </div>
      <div>
        <img src={people.h2} alt="" />
        <p>
          <span>William Smith</span>Senior Marketing Manager <br />
          Phone: + 000 123 000 77 88 <br />
          Email: conatct@example.com
        </p>
      </div>
      <div>
        <img src={people.h3} alt="" />
        <p>
          <span>Emma Stone</span>Senior Marketing Manager <br />
          Phone: + 000 123 000 77 88 <br />
          Email: conatct@example.com
        </p>
      </div>
    </div>
  );
};

export default People;
