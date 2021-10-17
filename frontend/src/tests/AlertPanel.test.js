import React from "react";
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AlertPanel from "../components/AlertPanel";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders Alert with message", () => {
    act(() => {
      render(<AlertPanel />, container);
    });
    expect(container.textContent).toBe("");
  
    act(() => {
      render(<AlertPanel error="Number contains not supported chars or digits, '1' and '0' is not supported." />, container);
    });
    expect(container.textContent).toBe("Number contains not supported chars or digits, '1' and '0' is not supported.");
  });