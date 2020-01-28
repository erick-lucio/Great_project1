import React from 'react';

import laptopImg from '../imgs/laptop.png';
import calendarImg from '../imgs/calendar.png';
import descriptionListImg from '../imgs/descriptionList.png';


export default class UpRightDiv extends React.Component{
    render(){
        return(
            <div className="w3-container UpRightDiv">
                <h1 className="WorkclassTittle">Work Experience</h1>
                <div className="EachCourseDiv">
                    <p className="Jobtitle"><img alt="" src={laptopImg} className="JobImg"></img>HALFTIME</p>
                    <p className="jobDate"><img src={calendarImg} alt="" className="jobdateImg" ></img>2019 UNTIL NOW</p>
                    <p className="jobDescription"><img src={descriptionListImg} alt="" className="descriptionImg" ></img>CREATE AND DO THINGS</p>
                    
                    
                </div>

                <div className="EachCourseDiv">
                    <p className="Jobtitle"><img alt="" src={laptopImg} className="JobImg"></img>DATAANALIST</p>
                    <p className="jobDate"><img src={calendarImg} alt="" className="jobdateImg" ></img>2019 UNTIL NOW</p>
                    <p className="jobDescription"><img src={descriptionListImg} alt="" className="descriptionImg" ></img>CREATE AND DO THINGS</p>
                    
                    
                </div>

                <div className="EachCourseDiv">
                    <p className="Jobtitle"><img alt="" src={laptopImg} className="JobImg"></img>FREE LANCER</p>
                    <p className="jobDate"><img src={calendarImg} alt="" className="jobdateImg" ></img>2019 UNTIL NOW</p>
                    <p className="jobDescription"><img src={descriptionListImg} alt="" className="descriptionImg" ></img>CREATE AND DO THINGS</p>
                    
                    
                </div>

                <div className="EachCourseDiv">
                    <p className="Jobtitle"><img alt="" src={laptopImg} className="JobImg"></img>BODYBUIILDER</p>
                    <p className="jobDate"><img src={calendarImg} alt="" className="jobdateImg" ></img>2019 UNTIL NOW</p>
                    <p className="jobDescription"><img src={descriptionListImg} alt="" className="descriptionImg" ></img>CREATE AND DO THINGS</p>
                    
                    
                </div>

                <div className="EachCourseDiv">
                    <p className="Jobtitle"><img alt="" src={laptopImg} className="JobImg"></img>HALFTIME</p>
                    <p className="jobDate"><img src={calendarImg} alt="" className="jobdateImg" ></img>2019 UNTIL NOW</p>
                    <p className="jobDescription"><img src={descriptionListImg} alt="" className="descriptionImg" ></img>CREATE AND DO THINGS</p>
                    
                    
                </div>
             
            </div>
        );
    }
}