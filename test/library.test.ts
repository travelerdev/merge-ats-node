import { MergeATS, MergeServers } from "../dist";
import test from "ava";

test("generate library exists", (t) => {
  if (!!MergeATS) {
    t.pass();
  }
});

test("generate library exposes the two servers", (t) => {
  if (MergeServers.production && MergeServers.sandbox) {
    t.pass();
  }
});

test("generate library can be instantiated", (t) => {
  if(!!(new MergeATS({ apiKey: "asdf" }))) {
    t.pass();
  }
});

test("generate library has services", (t) => {
  const apiCall = new MergeATS({ apiKey: "asdf" }).accountDetails?.accountDetailsRetrieve;
  if (apiCall && typeof apiCall === "function") {
    t.pass();
  }
});
