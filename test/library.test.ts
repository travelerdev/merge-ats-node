import { MergeATS, MergeServers } from "../src";

describe("MergeATS", () => {
  it("generate library exists", () => {
    expect(MergeATS).toBeDefined();
  });

  it("generate library exposes the two servers", () => {
    expect(MergeServers.production).toBeDefined();
    expect(MergeServers.sandbox).toBeDefined();
  });

  it("generate library can be instantiated", () => {
    expect(new MergeATS({ apiKey: "asdf" })).toBeDefined();
  });

  it("generate library has services", () => {
    const apiCall = new MergeATS({ apiKey: "asdf" }).accountDetails?.accountDetailsRetrieve;
    expect(apiCall).toBeDefined();
    expect(typeof apiCall).toBe("function");
  });
});