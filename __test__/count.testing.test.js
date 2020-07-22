// counter-rtl.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
/**
 * 不论是hooks写法还是class写法都支持
 */
//import Counter from "../counter";
import Counter from "../counter.hook";

describe("<Counter />", () => {
  it("properly increments and decrements the counter", () => {
    const { getByText } = render(<Counter />);
    const counter = getByText("0");
    const incrementButton = getByText("+");
    const decrementButton = getByText("-");

    fireEvent.click(incrementButton);
    expect(counter.textContent).toEqual("1");

    fireEvent.click(decrementButton);
    expect(counter.textContent).toEqual("0");
  });
});