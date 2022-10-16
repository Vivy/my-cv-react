import * as S from './sociallist.style';
import { Disc } from '..';
import { useState } from 'react';

const List = ({ socialList }) => {
  const [selected, selecteaza] = useState({});
  return (
    <>
      {selected.description && (
        <div style={{gridColumn: '1/-1'}}>
          <h1>neata</h1>
          <div>{selected.description}</div>
        </div>
      )}
      {socialList &&
        socialList.map(({ icon, title, description, label, link }, key) => (
          <S.SocialRow icon={icon} title={title} link={link} key={key}>
            <Disc click={() => selecteaza({ description, title })}>
              {label.slice(0, 3)}
            </Disc>
            {/* {description} */}
          </S.SocialRow>
        ))}
    </>
  );
};

export default List;
