import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { hostStyle, fragmentStyle } from './style';

const Alert = React.lazy(() => import('app2/Alert'));

const App = () => {

  const [isVisible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!isVisible);
  }

  const alertContent = {
    title: 'Hello World',
    text: 'This is text from App1'
  }
  return (
    <div style={hostStyle}>
      <h2 className="text-5xl font-bold py-4">Hello from Host Container</h2>
      <button
        className="bg-blue-600 font-bold text-white px-4 py-3 rounded transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
        onClick={handleClick}>
          Toggle Alert
      </button>
      <div className="fragment" style={fragmentStyle}>
        { isVisible &&
          <React.Suspense fallback='Loading Alert...'>
            <Alert
              alertTitle={alertContent.title}
              alertText={alertContent.text}
            />
          </React.Suspense>
        }
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
