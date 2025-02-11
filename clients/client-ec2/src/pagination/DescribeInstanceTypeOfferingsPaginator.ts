// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
} from "../commands/DescribeInstanceTypeOfferingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeInstanceTypeOfferingsCommandInput,
  ...args: any
): Promise<DescribeInstanceTypeOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceTypeOfferingsCommand(input), ...args);
};
export async function* paginateDescribeInstanceTypeOfferings(
  config: EC2PaginationConfiguration,
  input: DescribeInstanceTypeOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceTypeOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceTypeOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
