 import Carousel from 'react-multi-carousel';
 import 'react-multi-carousel/lib/styles.css'
 import {Container,Row ,Col} from 'react-bootstrap';
 import hmtlIcon from '../assets/img/html-icon.svg';
 import cssIcon from '../assets/img/css-icon.svg';
 import jsIcon from '../assets/img/JS-icon.svg';
 import reactIcon from '../assets/img/react-icon.svg';
 import gitIcon from '../assets/img/git-icon.svg';
 import netlifyIcon from '../assets/img/netlify-3628945-3030170.png'
 import { SkillsItem } from './UI/SkillsItem'

 export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Skills
              </h2>
              <p>
                Culpa care adipisicing labore aliqua aliquip ut et exercitation mollit proident irure commodo adipisicing anim qui. Esse ullamco consequat dolor mollit laboris aliqua dolor id aliqua dolor minim laborum. 
              </p>
              <Carousel className='skill-slider' responsive={responsive} infinite >
                
                <SkillsItem percentage={100} icon={hmtlIcon} name={'HTML 5'}/>
                
                <SkillsItem percentage={100} icon={cssIcon} name={'CSS 3'}/>
                
                <SkillsItem percentage={95} icon={jsIcon} name={'JavaScript'}/>
                
                <SkillsItem percentage={95} icon={reactIcon} name={'React'}/>

                <SkillsItem percentage={100} icon={gitIcon} name={'GIT'}/>

                <SkillsItem percentage={100} icon={netlifyIcon} name={'Netlify'} />

                <SkillsItem percentage={85} icon={'Sanity'} name={'Sanity'} />

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
 }