import { ReactNode } from "react";
import { TitleText } from "../Typography";
import {
  InfoContainer,
  IconContainer,
  InfoWithIconContainer,
} from './styles';

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
  title: string;
}

export function InfoWithIcon({ icon, text, title, iconBg }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer
        iconBg={iconBg}
      >{icon}
      </IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
      <InfoContainer>
        <TitleText size='l'>{title}</TitleText>
      </InfoContainer>
      <TitleText>{title}</TitleText>
    </InfoWithIconContainer>
  );
}
