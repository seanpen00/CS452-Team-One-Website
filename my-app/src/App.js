import logo from "./logo.svg";
import "./App.css";
import thumbnail from "./assets/thumbnail.PNG";
import pic1 from "./assets/pic1.PNG";
import pic2 from "./assets/pic2.PNG";
import pic3 from "./assets/pic3.PNG";
import talking from "./assets/talking.gif";
import loading from "./assets/loading.gif";
import ben from "./assets/ben.png";
import alex from "./assets/alex.png";
import sean from "./assets/sean.png";
import logan from "./assets/logan.png";

function ImageWithCaption({ src, caption }) {
  return (
    <div>
      <img src={src} alt={caption} className="screenshot" />
      <p style={{ fontSize: "80%" }}>{caption}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: "1%", marginBottom: 0 }}>Virtual Chat Bot</h1>
        <h5 style={{ marginTop: 0 }}>By: CS452 Team One</h5>
        <img src={thumbnail} style={{ width: "15%" }}></img>
        <br />
        <br />
        <div style={{ maxWidth: "60%" }}>
          <p style={{ marginBottom: 0 }}><b>Abstract</b></p>
          <p style={{ fontSize: "80%", marginTop: 10 }}>
            Our objective is to develop a virtual reality experience that allows
            users to interact through conversation with an AI in a variety of
            ways. The player should have the ability to speak and have their
            speech converted to text. This text would then be communicated to an
            AI whose response would be returned via text-to-speech. Above this
            basic underlying structure, the player would be able to see a human
            model representing the AI being communicated with, allowing for a
            higher degree of immersion.
          </p>
          <br />

          <div>
            <p style={{ marginBottom: 25 }}><b>Screenshots</b></p>
            <div>
              <img src={pic1} className="screenshot"></img>
              <p className="caption">User POV of talking to camper at a campsite</p>
            </div>
            <div>
              <img src={pic2} className="screenshot"></img>
              <p className="caption">User POV of talking to farmer at a farm</p>
            </div>
            <div>
              <img src={pic3} className="screenshot"></img>
              <p className="caption">User POV of talking to lawyer on a bus</p>
            </div>
            <div>
              <img src={talking} className="gif"></img>
              <p className="caption">Talking animation in action</p>
            </div>
            <div>
              <img src={loading} className="gif"></img>
              <p className="caption">Loading dialogue animation in action</p>
            </div>
            <br />
            <br />
            <p><b>Video</b></p>
            <iframe style={{width: "100%", height:"500px"}} src='https://www.youtube.com/embed/gCbuk9eNCZo'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
            />
          </div>
          <br />

          <p><b>Team Profile</b></p>
          <div style={{ display: "flex" }}>
            <div>
              <img src={ben} className="pfp"></img>
              <p className="caption" style={{ margin: "auto" }}><b>Ben Spivy</b></p>
              <p className="caption">I'm currently a senior and computer science major at GMU graduating in May 2024. My role in Team One was both as the team leader and as a developer. I worked on the backend and frontend working to connect the STT and AI Chat as well as integrating the main backend into the VR environment.
              </p>
            </div>
            <div>
              <img src={alex} className="pfp"></img>
              <p className="caption" style={{ margin: "auto" }}><b>Alex Rose</b></p>
              <p className="caption">I am currently a senior majoring in Computer Science at George Mason University.  I will be graduating May 2024 with a BS CS.  My main contributions to the project were the VR implementation, controller handling/modelling, and making the tts/stt work in VR.
              </p>
            </div>
            <div>
              <img src={logan} className="pfp"></img>
              <p className="caption" style={{ margin: "auto" }}><b>Logan Goldfedder</b></p>
              <p className="caption">I am currently a senior majoring in Computer Science at George Mason University.  I will be graduating May 2024 with a Bachelors of Science in Computer Science.  My main contributions to the project were in testing, designing, requirement completion, and document creation.
              </p>
            </div>
            <div>
              <img src={sean} className="pfp"></img>
              <p className="caption" style={{ margin: "auto" }}><b>Sean Pentiboyina</b></p>
              <p className="caption">I'm a senior computer science major at George Mason University. I will be graduating December 2023 with a B.S. in Computer Science. My contributions to this project include implementing text-to-speech, adding NPC animations, and creating this website.</p>
            </div>
          </div>
          <br />
        </div>
      </header>
    </div>
  );
}

export default App;
