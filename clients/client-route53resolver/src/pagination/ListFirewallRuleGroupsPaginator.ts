// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFirewallRuleGroupsCommand,
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
} from "../commands/ListFirewallRuleGroupsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53ResolverClient,
  input: ListFirewallRuleGroupsCommandInput,
  ...args: any
): Promise<ListFirewallRuleGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFirewallRuleGroupsCommand(input), ...args);
};
export async function* paginateListFirewallRuleGroups(
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRuleGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListFirewallRuleGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFirewallRuleGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53ResolverClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53Resolver | Route53ResolverClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
