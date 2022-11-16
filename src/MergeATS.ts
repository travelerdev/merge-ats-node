import { BaseHttpRequest, OpenAPIConfig, UnderlyingMergeATS } from "./generated";
import { MergeClientConfig } from "./MergeClientConfig";
import { MergeServers } from "./MergeServers";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class MergeATS extends UnderlyingMergeATS {
  constructor(config: MergeClientConfig, HttpRequest?: HttpRequestConstructor) {
    super(
      {
        BASE: config.server ?? MergeServers.production,
        TOKEN: config.apiKey
      },
      HttpRequest
    );
  }
}
