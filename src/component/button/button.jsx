import * as S from './button.style';
import { Anchor } from '..';

const Button = ({ href, title, children, color, download }) => {
  return (
    <S.Button color={color} download={download}>
      {!href && !title && children}{' '}
      {href && title && (
        <Anchor href={href} title={title}>
          {children}
        </Anchor>
      )}
    </S.Button>
  );
};

export default Button;
