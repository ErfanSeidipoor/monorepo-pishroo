import { render } from "@testing-library/react";

import WebsiteComponents from "./website-components";

describe("WebsiteComponents", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<WebsiteComponents />);
    expect(baseElement).toBeTruthy();
  });
});
