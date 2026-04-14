import { test, expect } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";
import { takeSnapshot, disableAutoSnapshot } from "@chromatic-com/vitest";

import { Button } from "@/components/retroui/Button";

test("default", async () => {
  await render(<Button>Submit</Button>);

  await expect.element(page.getByRole("button", { name: "Submit" })).toBeInTheDocument();
});

test("hover", async () => {
  await render(<Button>Submit</Button>);

  await page.getByRole("button", { name: "Submit" }).hover();
});

test("many states", async () => {
  disableAutoSnapshot();

  await render(
    <Box>
      <Button>Default</Button>
      <Button>Testing</Button>
    </Box>,
  );

  await page.getByRole("button", { name: "Testing" }).hover();
  await takeSnapshot("Hovering");

  await page.getByRole("button", { name: "Testing" }).unhover();
  await takeSnapshot("Unhover");
});

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: 15,
        padding: 30,
      }}
    >
      {children}
    </div>
  )
}