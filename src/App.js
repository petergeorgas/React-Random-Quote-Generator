import './App.css';
import './components/QuoteBox'
import QuoteBox from './components/QuoteBox';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div>
      <Helmet>
        <title>Random Quotes!</title>
        <meta name="description" content="Random Quotes!"></meta>
      </Helmet>
      <QuoteBox/>
    </div>
  );
}

export default App;
