import * as S from './sociallist.style';
import { Disc } from '..';

const List = ({ socialList }) => {
  return (
    <>
      {socialList &&
        socialList.map(({ icon, title, description, label, link }, key) => (
          <S.SocialRow icon={icon} title={title} link={link} key={key}>
            <Disc>{label.slice(0,3)}</Disc>
            {/* {description} */}
          </S.SocialRow>
        ))}
    </>
  );
};

export default List;
