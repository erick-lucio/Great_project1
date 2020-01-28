import React from 'react';

import calendarImg from '../imgs/calendar.png';
import homeImg from '../imgs/home.png';
import languagesImg from '../imgs/languages.png';

import mailImg from '../imgs/mail.png';
import telefoneImg from '../imgs/telefone.png';
import diplomaImg from '../imgs/diploma.png';
import school_diplomaImg from '../imgs/school_diploma.png';



export default class UpLeftDiv extends React.Component{
    render(){
        return(
            <div className="w3-container UpLeftDiv"  >
                <h1 className="courseTitleTag">Courses</h1>
                <div className="w3-container everycourse">
                    <h3 className="w3-container eachCourseTitle">Computer Science</h3>
                    <p className="w3-container dateCourse"><img src={calendarImg} alt="" className="Imgcalendar" ></img>2017 until now</p>
                    <p className="w3-container CourseLevel"><img src={diplomaImg}alt="" className="Imgdiploma"></img>Bachelor Degree</p>
                    <p className="w3-container Instituitionname"><img src={school_diplomaImg} alt="" className="ImgSchool_diploma"></img>Instituition:<a href="https://www.pitagoras.com.br/" target="_blank">Pitagoras</a> </p>
                </div>
                <div className="w3-container everycourse">
                    <h3 className="w3-container eachCourseTitle">Data Analist</h3>
                    <p className="w3-container dateCourse"><img src={calendarImg} alt="" className="Imgcalendar" ></img>2017 until now</p>
                    <p className="w3-container CourseLevel"><img src={diplomaImg}alt="" className="Imgdiploma"></img>Bachelor Degree</p>
                    <p className="w3-container Instituitionname"><img src={school_diplomaImg} alt="" className="ImgSchool_diploma"></img>Instituition:<a href="https://www.pitagoras.com.br/" target="_blank">Pitagoras</a> </p>
                </div>
                <div className="w3-container everycourse">
                    <h3 className="w3-container eachCourseTitle">DBA</h3>
                    <p className="w3-container dateCourse"><img src={calendarImg} alt="" className="Imgcalendar" ></img>2017 until now</p>
                    <p className="w3-container CourseLevel"><img src={diplomaImg}alt="" className="Imgdiploma"></img>Bachelor Degree</p>
                    <p className="w3-container Instituitionname"><img src={school_diplomaImg} alt="" className="ImgSchool_diploma"></img>Instituition:<a href="https://www.pitagoras.com.br/" target="_blank">Pitagoras</a> </p>
                </div>
                <div className="w3-container everycourse">
                    <h3 className="w3-container eachCourseTitle">Back-END</h3>
                    <p className="w3-container dateCourse"><img src={calendarImg} alt="" className="Imgcalendar" ></img>2017 until now</p>
                    <p className="w3-container CourseLevel"><img src={diplomaImg}alt="" className="Imgdiploma"></img>Bachelor Degree</p>
                    <p className="w3-container Instituitionname"><img src={school_diplomaImg} alt="" className="ImgSchool_diploma"></img>Instituition:<a href="https://www.pitagoras.com.br/" target="_blank">Pitagoras</a> </p>    
                </div>
              
            </div>
        );
    }
}