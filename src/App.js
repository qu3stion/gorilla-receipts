import {useState} from 'react';
import Receipts from './components/Receipts';
import receipts from './records.js';
import './App.css';


function App() {
  const [receipts, setReceipts] = useState(receipts)

  const info = receipts.map((item, index) => {
  return (
      <Receipts
       {...item}
       key={index}
      />
  )
})

return (
  <div className="App">
    <h1>Hello</h1>
    {info}
  </div>
)
}

export default App;
