
  import content from "../asset/content.json"
  import { Button, Header, Welcome } from '..'

const MyCV = () => { 
  return (
    <div>
      <Header color='red' sectionTitle={content.welcome.sectionTitle}/>
      <Button small link='www.google.com'/>
      <Welcome nameTitle={content.welcome.nameTitle} jobTitle={content.welcome.jobTitle}></Welcome>
      <Button color='green' downloadButtonLabel={content.welcome.downloadButtonLabel}></Button>
      <Header color='orange' sectionTitle={content.skills.sectionTitle}/>
    </div>
  )
}

export default MyCV
