import * as S from './sociallist.style';
import { Disc, Grid, Info, Text, Line } from '..';
import { useState } from 'react';

const List = ({ socialList }) => {
  const [selected, selecteaza] = useState({});
  return (
    <Grid>
      {socialList &&
        socialList.map(({ icon, title, description, label, link }, key) => (
          <S.SocialRow icon={icon} title={title} link={link} key={key}>
            <Disc click={() => selecteaza({ description, title })}>
              {label.slice(0, 3)}
            </Disc>
          </S.SocialRow>
        ))}
      <Grid>
        {selected.description && (
          <Info icon={selected.icon} link={selected.link}>
            <Text type='h3'>{selected.title}</Text>
            <Text>{selected.description}</Text>
          </Info>
        )}
      </Grid>
    </Grid>
  );
};

export default List;
