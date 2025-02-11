// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVocabulariesCommand,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
} from "../commands/ListVocabulariesCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListVocabulariesCommandInput,
  ...args: any
): Promise<ListVocabulariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVocabulariesCommand(input), ...args);
};
export async function* paginateListVocabularies(
  config: TranscribePaginationConfiguration,
  input: ListVocabulariesCommandInput,
  ...additionalArguments: any
): Paginator<ListVocabulariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVocabulariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
