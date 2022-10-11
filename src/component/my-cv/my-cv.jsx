import {Header, Divider, Welcome, Reset, Skills} from '..';

const MyCV = () => {
  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Welcome />
      <Header>Tech I love to work with</Header>
      <Divider height={16}/>
      <Skills />
    </div>
  );
};

export default MyCV;
