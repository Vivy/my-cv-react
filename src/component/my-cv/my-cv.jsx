
  import content from "../asset/content.json"
  import { Button, Header, Welcome, Flex, Reset } from '..'

const MyCV = () => { 
  return (
    <div>
      {/* <Reset/> */}
      <Header color='red' sectionTitle={content.welcome.sectionTitle}/>
      <Flex vertical align='center'>
        <Button small link='www.google.com'/>
      </Flex>
      <Flex vertical align='center'>
        <Welcome nameTitle={content.welcome.nameTitle} jobTitle={content.welcome.jobTitle}></Welcome>
      </Flex>
      <Button color='green' downloadButtonLabel={content.welcome.downloadButtonLabel}></Button>
      <Header color='orange' sectionTitle={content.skills.sectionTitle}/>
    </div>
  )
}

export default MyCV
