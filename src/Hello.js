import React from 'react';

function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}

const element = <Welcome name="Sara" />;

function UsingWelcome() {
  return (
    <div>
      <h1> Name list!</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function Hello() {
  return UsingWelcome();
}

export default Hello;
