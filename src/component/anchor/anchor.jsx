import * as S from './anchor.style';

const Anchor = ({ href, title, children }) => {
  return (
    <S.Anchor target='_blank' href={href} title={title}>
      {children}
    </S.Anchor>
  );
};

export default Anchor;
