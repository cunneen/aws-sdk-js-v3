// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListUpdatesCommand, ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListUpdatesCommandInput,
  ...args: any
): Promise<ListUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUpdatesCommand(input), ...args);
};
export async function* paginateListUpdates(
  config: EKSPaginationConfiguration,
  input: ListUpdatesCommandInput,
  ...additionalArguments: any
): Paginator<ListUpdatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUpdatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
