// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetNetworkTelemetryCommand,
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput,
} from "../commands/GetNetworkTelemetryCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetNetworkTelemetryCommandInput,
  ...args: any
): Promise<GetNetworkTelemetryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetNetworkTelemetryCommand(input), ...args);
};
export async function* paginateGetNetworkTelemetry(
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkTelemetryCommandInput,
  ...additionalArguments: any
): Paginator<GetNetworkTelemetryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetNetworkTelemetryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
