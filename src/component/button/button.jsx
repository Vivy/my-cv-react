import * as S from './button.style';

const Button = ({ link, icon, small, color, downloadButtonLabel}) => {
  return (
      <>
        {small ?<S.SmallButton href={link}>{icon}😀😀</S.SmallButton>
        :
        <S.Button color={color}>😀{downloadButtonLabel}</S.Button>
        }
      </>
  );
};

export default Button
