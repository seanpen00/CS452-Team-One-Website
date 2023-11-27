import logo from "./logo.svg";
import "./App.css";
import thumbnail from "./assets/thumbnail.PNG";
import pic1 from "./assets/pic1.PNG";
import pic2 from "./assets/pic2.PNG";
import pic3 from "./assets/pic3.PNG";
import talking from "./assets/talking.gif";
import loading from "./assets/loading.gif";

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
          <p style={{marginBottom: 0}}><b>Abstract</b></p>
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
            <p style={{marginBottom: 25}}><b>Screenshots</b></p>
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
            <img src={thumbnail} className="screenshot"></img>
            <br />
            <br />
          </div>

          <p><b>Team Profile</b></p>
          <img src={thumbnail} className="screenshot"></img>
          <img src={thumbnail} className="screenshot"></img>
          <img src={thumbnail} className="screenshot"></img>
          <img src={thumbnail} className="screenshot"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
