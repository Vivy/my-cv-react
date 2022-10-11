import * as S from './welcome.style';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Welcome = () => {
  const [summary, update] = useState({});

  useEffect(() => {
    const bub = async () => {
      const { data } = await axios.get(`http://localhost:3002/welcome`);
      update(data);
    };

    bub();
  }, []);
  return (
    <>
      <S.Welcome>{summary.nameTitle} </S.Welcome>
      <S.Welcome>{summary.jobTitle}</S.Welcome>
    </>
  );
};

export default Welcome;
