import './App.css';
import image from './download.jpeg';
import {Typewriter} from 'react-simple-typewriter'; 

function App() {
  return (
    <div className="App">
        <h1 class="logo">JS</h1>
    <div class="navigation-bar">
      <nav>
        <ul>
          <a href="#home"><li id="list-element">Home</li></a>
          <a href="#about"><li id="list-element">About</li></a>
          <a href="#projects"><li id="list-element">Projects</li></a>
          <a href="#contact"><li id="list-element">Contact</li></a>  
        </ul>
      </nav>
    </div>
    
    <section>
    <div class="home" id="home">
      <div class="div-1">
      <h1><Typewriter words={["Hii👋🏼.I'am K.Jaya Sree"]} loop={true} typeSpeed={150} deleteSpeed={100} delaySpeed={2000}/></h1>
      <h4>I am a entusiastic Full Stack Developer.</h4>
      </div>
      <div class="div-2">  <img src={image} alt="Not Found"></img></div>
    </div></section>


    <section id='about'>
      <div>
        <center><h1 id="heading">About</h1></center>
      <center>
        <p id="about">I am a enthusiastic Computer Science student with a strong foundation in programming,
           problem-solving, and software development. Eager to apply academic knowledge, learn new technologies, and contribute to innovative solutions in a fast-paced, technology-driven environment.</p>
      </center>
      </div>
      <div>
        <center>
        <h2 id="heading">Skills</h2>
        <div>
          <p><ul>Languages : Cpp,Python,C#</ul></p>
          <p><ul>Frontend  : HTML,CSS,javascript,React.js</ul></p>
          <p><ul>Backend :  Node.js, Express.js, RESTful APIs, MongoDB</ul></p>
          <p><ul>DevOps / Cloud: Azure Basics, CI/CD Pipelines, Docker</ul></p>
          <p><ul>Database : Mysql,MongoDB</ul></p>
        </div>
        </center>
      <div></div>
      </div>
    </section>

    <section id='projects'>
       <div >
        <center><h1 id="heading">Projects</h1>
        <div style={{width:'100%'}}>
        <h2 id='proj1'>Items Management Application <p>HTML,CSS,JS,NODE,EXPRESS,MONGODB</p></h2>
         <p><u1>It is a simple item management application using MongoDB that allows users to create, read, update, and delete items.</u1></p>
         <p><ul>From this project, I learned about the MVC model and worked on MongoDB Database.</ul></p>
          </div>
        <div style={{width:'100%'}}>
        <h2 id='proj2'>Idea Spark <p>HTML,CSS,JS,NODE,EXPRESS,MYSQL</p></h2>
         <p><u1>This website serves as a platform where anyone can submit their ideas and where individuals can explore a various ideas.</u1></p>
         <p><ul>From this project, I have learned about the end-to-end development of a website and how it works.</ul></p>
          </div>
         <div style={{width:'100%'}}>
        <h2 id='proj3'>CMR Quora<p>HTML,CSS,JS,PHP</p></h2>
         <p><u1>Developed a student related website CMR Quora which helps students to build a student community. </u1></p>
         <p><ul>From this project, I have learned about Php and how to build application by using it. </ul></p>
          </div> 
       </center>
        </div>
    </section>

    <section id='contact'>
      <div>
        <center><h1 id="heading">Contact</h1>
        <div id="contact-details">
          <h2>You can reach out to me through linkedin and can use below mail.</h2>
        <h1>Mail At 📩 :<a class="button" href="mailto:kjs562004@gmail.com">Click to Send Email</a></h1>
          <h1>Linkedin  : <a href='https://www.linkedin.com/in/jaya-sree-kachi-reddy-6a3114251/'>click here</a></h1>
          <h1>Github : <a href='https://github.com/jaya3526'>Click here</a></h1>
        </div>
        </center>
      </div>

    </section>

     </div>
  );
}

export default App;
