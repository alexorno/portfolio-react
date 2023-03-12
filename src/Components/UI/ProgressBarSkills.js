
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';

 



export const ProgressBarSkills = (props) => {


  
  return(
    <div className='CircularProgressbar'>
        
      <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? props.percentage : 0;
              return (
                <CircularProgressbar 
                    value={percentage} 
                    background={false} 
                    swipeable={true}
                    draggable={true}
                    initialAnimation={true}
                    styles={{
                      path: {
                        stroke:  `rgb(57 35 60)`, 
                        height: '100%',
                        transition: 'stroke-dashoffset 0.6s cubic-bezier(0.74,-0.06, 0.17, 0.81) 0s',},
                        trail: {
                          stroke: 'rgb(237 230 250)',
                        },
                      }}
                />
                );
            }}
          </VisibilitySensor>
      
  
 
    </div>
  );
}