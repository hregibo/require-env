import { require_env } from ".";

const original_env = process.env;

describe("expect-env", () => {
  afterEach(() => {
    // resetting env vars
    process.env = original_env;
  });

  it("should run correctly if the env var is present", () => {
    try {
      require_env("NODE_ENV");
    } catch (error) {
      fail("Should have succeeded as NODE_ENV is specified");
    }
  });
  it("should fail if the env var is not present", () => {
    try {
      require_env("NODE_ENX");
      fail("Should have failed as NODE_ENX does not exists");
    } catch (error) {
      // we succeed here
    }
  });
  it("should fail if one of the env vars is not present", () => {
    try {
      require_env(["PATH", "NODE_ENX"]);
      fail("Should have failed as NODE_ENX does not exists");
    } catch (error) {
      // we succeed here
    }
  });
  it("should succeed if all env vars are present", () => {
    try {
      require_env(["PATH", "NODE_ENV"]);
    } catch (error) {
      fail("Should not have failed");
      // we succeed here
    }
  });
});
