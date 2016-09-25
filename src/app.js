function Greeting({userName}) {
  return (
      React.createElement('span', {className: 'greeting'},
          `Hello `,
          React.createElement('b', null,
            userName
          ),
          '!'
      )
  );
}

function App() {
  return (
      React.createElement('div', null,
          React.createElement(Greeting, {userName: 'BETLAB'})
      )
  )
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('container')
);