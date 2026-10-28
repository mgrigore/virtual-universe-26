import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

const packageDirectory = new URL("../universe-notes/", import.meta.url);

test("npm run list prints keynote highlight titles grouped by topic", () => {
    const result = spawnSync("npm", ["run", "list"], { cwd: packageDirectory, encoding: "utf8" });

    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, [
        "",
        "> universe-notes@1.0.0 list",
        "> node list.mjs",
        "",
        "The modern GitHub experience",
        "  - AI overview tab",
        "  - Media in issues from the CLI",
        "  - Stacked pull requests",
        "",
        "Open source maintainers",
        "  - Contribution controls",
        "",
        "Agentic software development",
        "  - Copilot automations",
        "  - Security review",
        "",
    ].join("\n"));
});
