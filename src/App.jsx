import CreateCustomer from "./assets/customer/CreateCustomer";
import Customer from "./assets/customer/Customer";
import {AccountOperations} from "./assets/account/accountOperations";
import BalanceDisplay  from './assets/account/BalanceDisplay'
import { useSelector } from "react-redux";
export default function App () {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <>
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {
        fullName === '' ? (
          <CreateCustomer />  
        ) : (
          <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
          </>
        )
      }
    </div>
    </>
  )
}