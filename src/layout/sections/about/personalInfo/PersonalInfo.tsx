import { FC } from "react";
import { S } from "../About_Styles";

interface PersonalInfoProps {}

const PersonalInfo: FC<PersonalInfoProps> = () => {
  return (
    <S.PersonalInfo>
      <S.Description>
        <p>
          I’m a Frontend Developer who enjoys creating fast, elegant, and
          reliable web applications using React, TypeScript, and Next.js. I
          value clean code and thoughtful UI/UX.
        </p>
        <p>
          In my free time, I study English and read IT books such as “Clean
          Code” by Robert Martin and “Head First Design Patterns” to grow as a
          developer.
        </p>
      </S.Description>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
