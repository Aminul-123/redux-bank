import { connect } from "react-redux";

function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
  
  function BalanceDisplay({balance}) {
    return <div className="balance">{formatCurrency(balance)}</div>;
  }
  // below is the old way of connecting react component with react-redux . 
  //This does exactly same what useSelector does.
  function mapStateToProps (state) {
    return {
      balance : state.account.balance,
    }
  }
  
  export default connect(mapStateToProps) (BalanceDisplay);