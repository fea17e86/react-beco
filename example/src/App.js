import React, { Component } from "react";

import { Debounce } from "react-beco";

export default class App extends Component {
  render() {
    return (
      <div>
        <Debounce
          wait={300}
          function={value => {
            console.log("call", value);
          }}
        >
          {({ debounced }) => (
            <input
              type="text"
              onChange={e => {
                console.log("onChange", e.target.value);
                debounced(e.target.value);
              }}
            />
          )}
        </Debounce>
      </div>
    );
  }
}
