import * as S from './sociallist.style';
import { Flex } from '../flex';

const SocialList= ( { list } ) => {
  return (
      {list && list.map(({ icon, title, description, label, link }, key) => { return <S.SocialList icon={icon} title={title} link={link} key={key}>{label}{description}</S.SocialList>
      } 
    )
  }

export default SocialList
