import { MergeServers } from "./MergeServers";

export interface MergeClientConfig {
  /** Your Merge API Key */
  apiKey: string;

  /**
   * Which server to contact - optional, defaults to production
   * @default MergeServers.production
   */
  server?: MergeServers;
}
