import { Component } from "react";
import { userService } from "../services/UserService.js";
import { bitcoinService } from "../services/BitcoinService.js";
import coinsImg from "../assets/images/coins.png";
import btcImg from '../assets/images/BC_Logo.png'
import { Oval } from "react-loader-spinner";
import { MovesList } from "../components/MovesList.jsx";




export class HomePage extends Component {
  state = {
    user: null,
    coins: 0,
  };

  async componentDidMount() {
    const user = await userService.getUser();
    if (!user) this.props.history.push("/signup");
    this.setState({ user }, () => {
      this.getBitcoinRate();
    });
  }

  
  getBitcoinRate = async () => {
    const coins = await bitcoinService.getRate(this.state.user.coins);
    this.setState({ coins });
  };

  render() {
    const { user, coins } = this.state;
    if (!user) return <Oval color="#03a9f4" height={40} width={40} />;
    return (
      <div className="homePage-container">
        <h2>Hello {user.name}!</h2>
        <div className="userInfo">
          <span>
            Coins: {user.coins}$ <img src={coinsImg} alt="coinsImg" />
          </span>
          <span>
            BTC: {coins}
            <img src={btcImg} alt="btcImg" />
          </span>
        </div>
        <MovesList style={{ height: "200px" }} moves={user.moves.slice(0, 3)} />
      </div>
    );
  }
}

