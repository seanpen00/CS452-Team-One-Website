import logo from "./logo.svg";
import "./App.css";
import thumbnail from "./assets/thumbnail.PNG";

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
          <p style={{ fontSize: "80%" }}>Abstract</p>
          <p style={{ fontSize: "80%" }}>
          Our objective is to develop a virtual reality experience that allows users to interact through conversation with an AI in a variety of ways. This would mean giving the player the ability to speak and having those spoken words converted to text. This text would then be communicated to an AI whose response would be returned via text-to-speech. Above this basic underlying structure, the player would be able to see a human model representing the AI being communicated with.
          </p>
          <br />

          <p style={{ fontSize: "80%" }}>Screenshots</p>

            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <br/>
            <br/>
            <p style={{ fontSize: "80%" }}>Video</p>
            <img src={thumbnail} className="screenshot" ></img>
            <br/>
            <br/>
            <p style={{ fontSize: "80%" }}>Team Profile</p>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
            <img src={thumbnail} className="screenshot" ></img>
        </div>
      </header>
    </div>
  );
}

export default App;
