import React, { Component } from "react";

import { Debounce } from "react-beco";

export default class App extends Component {
  render() {
    return (
      <div>
        <Debounce
          wait={300}
          call={value => {
            console.log("call", value);
          }}
        >
          {({ call }) => (
            <input
              type="text"
              onChange={e => {
                console.log("onChange", e.target.value);
                call(e.target.value);
              }}
            />
          )}
        </Debounce>
      </div>
    );
  }
}
