function Greeting({userName}) {
  return (
      <span className='greeting'>
          Hello <b>{userName}</b>
      </span>
  );
}

function App() {
  return (
      <div>
        <Greeting userName='BETLAB'/>
      </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);