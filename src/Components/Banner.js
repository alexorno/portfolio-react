import { useState, useEffect } from 'react';
import { Col, Row ,Container} from 'react-bootstrap';
import { ChatLeftDots } from 'react-bootstrap-icons';
import header from '../assets/img/header-img.svg'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(0);

  const toRotate = ['Web developer', 'React Developer' , `JavaScript developer`];
  const [text, setText] = useState('');
  const [delta,setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;
 
  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta);

    return() => {
      clearInterval(ticker)
    }
  },[text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta / 2);
    }
    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }

    if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(350 * Math.random());
        
    }
  };

  return (
   <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md='6' xl='7'>
            <span className='tagline'>Welcome to my portfolio
            </span>
            <h1>{'Hi, im Alex '}<span className='wrap'>{text}</span></h1>
            <p> Irure sit fugiat magna fugiat tempor amet Lorem cupidatat. Consectetur amet incididunt tempor ea officia reprehenderit duis. Id cillum enim adipisicing occaecat nostrud dolor aliqua sint qui. Nostrud sit Lorem do occaecat. Esse anim qui incididunt velit. Quis aliqua aute enim cillum. Anim cupidatat reprehenderit laborum labore mollit sit voluptate culpa ipsum tempor non irure tempor.
            </p>
            <button onClick={() => {console.log('button is clicked')}}>Lets Connect <ChatLeftDots /> </button>
          </Col>

          <Col xs={12} md='6' xl='5'>
            <img src={header} alt='HeaderImage' />
          </Col>
        </Row>
      </Container>
   </section> 
  )
}

export default Banner

