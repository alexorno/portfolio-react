import { ProgressBarSkills } from "./ProgressBarSkills";

export const SkillsItem = (props) =>{

  return(
              <div>
                <div className='item'>
                  
                    <div className='item-inside'>
                    <ProgressBarSkills percentage={props.percentage} />
                      <img src={props.icon} alt={props.name} />
                      <h5>{props.name}</h5>
                    </div>   
                    <h6>{props.percentage} %</h6>
                </div>
                
              </div>
  );
}

// <div>
// <div className='item'>
//   <ProgressBarSkills percentage={props.percentage} />
//     <div className='item-inside'>
//       <img src={props.icon} alt={props.name} />
//       <h5>{props.name}</h5>
//     </div>   
// </div>
// <h6>{props.percentage} %</h6>
// </div>