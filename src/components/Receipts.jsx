import Receipts from './components/Receipts';
import receipts from './records.js';

function Receipts({person, order, paid}) {
  const [satisfied, setSatisfied] = useState(satisfied);

  function checkPayment(){
    setSatisfied((bill) =>(bill ? "satisfied : notSatisfied"))
  }
  return (
    <div>
      <div>
        <h1>My Receipts</h1>
      </div>

      <button className="paymentButton" onClick={checkPayment}></button>

      <div className="receiptCard">
        <p>Customer: {person}</p>
        <p>Order: {order}</p>
      </div>

        <h3>{satisfied}</h3>
      </div>
  )
};

export default Receipts;
