// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "../commands/DescribeOrganizationConformancePackStatusesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  ...args: any
): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrganizationConformancePackStatusesCommand(input), ...args);
};
export async function* paginateDescribeOrganizationConformancePackStatuses(
  config: ConfigServicePaginationConfiguration,
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrganizationConformancePackStatusesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOrganizationConformancePackStatusesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
