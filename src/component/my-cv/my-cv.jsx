import {Header, Connect, Divider, Welcome, Reset, Skills} from '..';

const MyCV = () => {
  return (
    <>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Welcome />
      <Header>Tech I love to work with</Header>
      <Divider height={16}/>
      <Skills />
      <Divider height={64}/>
      <Header>Let`s Connect</Header>
      <Connect/>
    </>
  );
};

export default MyCV;
