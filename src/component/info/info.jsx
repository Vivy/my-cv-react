import * as S from './info.style';

const Info = ({ label, title, description, icon, children }) => {
  return (
    <S.InfoTransparent>
      <S.Info  title={title} icon={icon} label={label} description={description}>
        {children}
      <S.Line/>
      <Info icon={icon} label={label}>
        asdad
      </Info>
      </S.Info>
    </S.InfoTransparent>
  );
};

export default Info;
