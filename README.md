# Merge.dev ATS SDK for Node + Typescript (improved)

This is an unofficial, mostly-automatically-generated library for accessing Merge.dev's ATS SDK.

It is generated from the OpenAPI Spec that underlies their [public Postman workspace](https://www.postman.com/merge-dev/workspace/merge-public-workspace/). That has been run through [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) with some tweaks to the generation command and on top of that a single file has been added to harmonize the instantiation call with Merge's expectations around the API Key.

If you would like an official alternative, Merge has [one hosted here](https://github.com/merge-api/merge-ats-node). The motivation behind the creation fo this library, however, is that that library contains dev dependencies as direct dependencies, introduces several critical CVE's, and has a bad habit of releasing minor updates that dramatically change the behavior of API calls and exposed values. This library aims to provide the same functionality but with a more stable API, thinner dependency footprint, and clearer release pattern.

## Use:

To install, you know the drill:

```
npm i @travelerdev/merge-ats-node
```

To use:

```typescript
import { value MergeATS } from "@travelerdev/merge-ats-node";

const merge = new MergeATS({ apiKey: "asdf-1234" });

const departments = await merge.departments.departmentsList({
  xAccountToken: "qwerty-7890",
  pageSize: 100
});
```

## Request Layer

By default requests to Merge use `axios`. If you would rather use a different layer, you can provide an override request factory as the second argument. See [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) for more details.
