import * as S from './flex.style'

const Flex= ({gap, padding, children, align, shadow, vertical, justify}) => {
  return (<S.Flex gap={gap} padding={padding} align={align} shadow={shadow} justify={justify} vertical={vertical}>
        {children}
    </S.Flex>);
};

export default Flex
