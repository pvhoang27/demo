import React from 'react';
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        Hello from MyComponent
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;