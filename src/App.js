import logo from './th.jpg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Faculty from './Components/Faculty';
import Student from './Components/Student';
import Course from './Components/Course';
import FeedBackForm from './Components/FeedBackForm';
import StudentCard from './Components/StudentCard';
import AttendanceButton from './Components/AttendanceButton';
import Schedule from './Components/Schedule';
import './App.css';
const user={logo: logo}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={user.logo}></img>
      <Student></Student>
      <Faculty></Faculty>
      <Course></Course>
      <FeedBackForm></FeedBackForm>
      <Schedule></Schedule>
      <Footer></Footer>
    </div>
  );
}

export default App;
