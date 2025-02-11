// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListSourceRepositoryBranchesCommand,
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
} from "../commands/ListSourceRepositoryBranchesCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCatalystClient,
  input: ListSourceRepositoryBranchesCommandInput,
  ...args: any
): Promise<ListSourceRepositoryBranchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSourceRepositoryBranchesCommand(input), ...args);
};
export async function* paginateListSourceRepositoryBranches(
  config: CodeCatalystPaginationConfiguration,
  input: ListSourceRepositoryBranchesCommandInput,
  ...additionalArguments: any
): Paginator<ListSourceRepositoryBranchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSourceRepositoryBranchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCatalystClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCatalyst | CodeCatalystClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
