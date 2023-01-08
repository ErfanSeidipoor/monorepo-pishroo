import { render } from "@testing-library/react";

import AdminComponents from "./admin-components";

describe("AdminComponents", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AdminComponents />);
    expect(baseElement).toBeTruthy();
  });
});
