import React from "react";
import { shallow } from "enzyme";

import Result from "../index";

let mockContext = [
  { first_name: "Cool", last_name: "Guy", phone: "(111) 333-4444" },
];

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => mockContext,
}));

it("uses data from context", () => {
  const component = shallow(<Result />);

  expect(component.find("Heading").props().children).toEqual(
    "Thanks for Your Answers, Cool Guy. We Will Call You at (111) 333-4444 Within 24 Hours"
  );
});

it("redirects if context is empty", () => {
  mockContext = [{}];
  const component = shallow(<Result />);

  expect(component.find("Redirect").props().to).toEqual("/test-fe");
});
