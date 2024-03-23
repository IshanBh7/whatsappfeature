import whatsappLogo from "../src/whatsappIcon.png";
import messilogo from "../src/messi wc.jpg";
import './App.css';
import ronaldologo from '../src/ronaldo mutd.jpg';

function App() {
  return (
    
    <div className="App"><div className="container">
      <div className="image-container">
        <img src={messilogo} width="300" alt="image" />
      </div>
      <div className="description-container">
        <p style={{ color: "white", fontSize: "18px" }}>Lionel Messi has conquered his final peak. Lionel Messi has shaken hands with paradise. Lionel Messi, a man, who has more than any other, decorated our beautiful game…to receive from that game now, its most beautiful decoration. Messi’s meant-to-be moment. His fulfilment. His completion. It is done.</p>
      </div>
    </div>

    <div className="container">
      <div className="image-container">
        <img src={ronaldologo} width="300" alt="image" />
      </div>
      <div className="description-container">
        <p style={{ color: "white", fontSize: "18px" }}>Madeira, Manchester, Madrid, Turin, and Manchester again. Wreathed in red. Restored to this great gallery of the game. A walking work of art. Vintage. Beyond valuation, beyond forgery or imitation. 18 years since that trembling teenager of touch and tease first tiptoed onto this storied stage. Now in his immaculate maturity. CR7 reunited.</p>
      </div>
    </div>
    
    <div className="whatsapp" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "6" }}>
  <a href="https://wa.me/917742093001?text=SIUUUU" target="_blank">
    <img src={whatsappLogo} width="60" alt="meta" />
  </a>
</div>
</div>
      
    
  );
}

export default App;
