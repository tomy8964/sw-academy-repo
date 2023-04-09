import React, { useEffect, useState } from "react";

import styles from "../../../styles/sidebar.module.css";
import arrowRight from '../../../assets/arrow_right.png';
import arrowLeft from '../../../assets/arrow_left.png';
import SidebarProblem from "./SidebarProblem";
import SidebarSetting from "./SidebarSetting";


function Sidebar(props) {
  const [xPosition, setXPosition] = useState(85);

  const isOpen = props.isOpen;
  const setOpen = props.setOpen;

  useEffect(() => {
    if (isOpen.open) {
      setXPosition(0);
    }
    else {
      setXPosition(85);
    }
  }, [isOpen.open]);

  function onClickSettingButton(e){
    e.preventDefault();
    setOpen({open: true, isSetting: true});
  }
  
  function onClickBackButton(e){
    e.preventDefault();
    setOpen((prev) => {return {open: false, isSetting: prev.isSetting}});
  }

  return (
    <div className={styles.area} style={{ transform: `translatex(${xPosition}%)` }}>
      <div className={styles.icon}>
        {isOpen.open ? <img src={arrowRight} alt="img" onClick={(e) => onClickBackButton(e)} /> : <img src={arrowLeft} alt="img" onClick={(e) => onClickSettingButton(e)} />}
      </div>
        {isOpen.isSetting ? <SidebarSetting/> :
        <SidebarProblem setOpen={setOpen} index={props.index} surveyId ={props.surveyId} setSurveyId={props.setSurveyId}/>}
    </div>
  );
};


export default Sidebar;