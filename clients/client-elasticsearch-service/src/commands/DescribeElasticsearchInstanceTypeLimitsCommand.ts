// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DescribeElasticsearchInstanceTypeLimitsRequest,
  DescribeElasticsearchInstanceTypeLimitsRequestFilterSensitiveLog,
  DescribeElasticsearchInstanceTypeLimitsResponse,
  DescribeElasticsearchInstanceTypeLimitsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand,
  serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DescribeElasticsearchInstanceTypeLimitsCommand}.
 */
export interface DescribeElasticsearchInstanceTypeLimitsCommandInput
  extends DescribeElasticsearchInstanceTypeLimitsRequest {}
/**
 * The output of {@link DescribeElasticsearchInstanceTypeLimitsCommand}.
 */
export interface DescribeElasticsearchInstanceTypeLimitsCommandOutput
  extends DescribeElasticsearchInstanceTypeLimitsResponse,
    __MetadataBearer {}

/**
 * <p>
 *     Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion.
 *     When modifying existing Domain, specify the
 *     <code>
 *       <a>DomainName</a>
 *     </code>
 *     to know what Limits are supported for modifying.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchInstanceTypeLimitsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchInstanceTypeLimitsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchInstanceTypeLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchInstanceTypeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchInstanceTypeLimitsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 *
 */
export class DescribeElasticsearchInstanceTypeLimitsCommand extends $Command<
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DescribeElasticsearchInstanceTypeLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeElasticsearchInstanceTypeLimitsCommandInput,
    DescribeElasticsearchInstanceTypeLimitsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeElasticsearchInstanceTypeLimitsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeElasticsearchInstanceTypeLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeElasticsearchInstanceTypeLimitsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeElasticsearchInstanceTypeLimitsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> {
    return deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
