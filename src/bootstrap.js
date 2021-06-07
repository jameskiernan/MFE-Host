import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Alert = React.lazy(() => import('app2/Alert'));

function App() {
  const alertContent = {
    title: 'Hello ',
    text: 'This is text from App1 sent to App2 via props'
  }
  return (
    <>
      <h2 className="text-xl font-bold py-4">Hello from React component</h2>
      <React.Suspense fallback='Loading Alert...'>
        <Alert
          alertTitle={alertContent.title}
          alertText={alertContent.text}
        />
      </React.Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
