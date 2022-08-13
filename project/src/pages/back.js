// import '../App.css' 
import { useHistory } from 'react-router-dom';


function Back () {
let history = useHistory();
const goToPreviousPath = () => {
    history.goBack()
}

}

 
// export default back;

// let btnBack=document.querySelector('button');

// btnBack.addEventListener('click',() => {
//     window.history.back();
// });

export default Back;