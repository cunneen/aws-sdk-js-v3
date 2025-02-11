// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeNotificationConfigurationsCommand,
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "../commands/DescribeNotificationConfigurationsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeNotificationConfigurationsCommandInput,
  ...args: any
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNotificationConfigurationsCommand(input), ...args);
};
export async function* paginateDescribeNotificationConfigurations(
  config: AutoScalingPaginationConfiguration,
  input: DescribeNotificationConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNotificationConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeNotificationConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
