import React from "react";
import { render, fireEvent } from "react-testing-library";

import Debounce from "../Debounce";

function changeText(input, newText) {
  if (input) {
    input.value = newText;
    fireEvent.change(input);
  }
}

test("A debounced onChange handler of a text input", async () => {
  const spy = jest.fn();

  const { getByTestId } = render(
    <Debounce call={spy} watit={10}>
      {({ call }) => (
        <input data-testid="text-input" type="text" onChange={call} />
      )}
    </Debounce>
  );

  const textInput = getByTestId("text-input");

  changeText(textInput, "H");
  changeText(textInput, "He");
  changeText(textInput, "Hel");
  changeText(textInput, "Helo");

  setTimeout(e => {
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe("Helo");
  }, 100);
});
