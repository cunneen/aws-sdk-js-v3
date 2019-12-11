import { ResolvedGlacierMiddlewareConfig } from "./configurations";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function addGlacierApiVersionMiddleware(
  options: ResolvedGlacierMiddlewareConfig
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let request = args.request;
    if (HttpRequest.isInstance(request)) {
      request.headers["x-amz-glacier-version"] = options.apiVersion;
    }

    return next({
      ...args,
      request
    });
  };
}

export const addGlacierApiVersionMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["SET_GLACIER_VERSION"],
  name: "addGlacierApiVersionMiddleware"
};
