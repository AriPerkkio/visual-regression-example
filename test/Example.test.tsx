import { test } from "vitest";

test("example test", async () => {
  const heading = document.createElement("h1");
  heading.textContent = "Hello, world!";
  document.body.appendChild(heading);
});
