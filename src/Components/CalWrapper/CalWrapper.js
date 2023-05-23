import Button from "../../common/Button";
import './CalWrapper.css'
const CalWrapper = (props) => {
  const {allButtonArr, allOprationArr} = props;



    const  allButton = allButtonArr ?  allButtonArr.map((btObj) => {
        return    <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />
    }) : [];

    const  allOprationBt = allOprationArr ?  allOprationArr.map((btObj) => {
        return    <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />
    }) : [];


  return (
    

<div className="main-cal">
        
<div className="bt-name">
{allButton}
</div>
<div className="op-name">
{allOprationBt}
</div>
</div>

  );
};

export default CalWrapper;
