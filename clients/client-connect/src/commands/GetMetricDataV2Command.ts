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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  GetMetricDataV2Request,
  GetMetricDataV2RequestFilterSensitiveLog,
  GetMetricDataV2Response,
  GetMetricDataV2ResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMetricDataV2Command,
  serializeAws_restJson1GetMetricDataV2Command,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetMetricDataV2Command}.
 */
export interface GetMetricDataV2CommandInput extends GetMetricDataV2Request {}
/**
 * The output of {@link GetMetricDataV2Command}.
 */
export interface GetMetricDataV2CommandOutput extends GetMetricDataV2Response, __MetadataBearer {}

/**
 * <p>Gets metric data from the specified Amazon Connect instance. </p>
 *          <p>
 *             <code>GetMetricDataV2</code> offers more features than <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html">GetMetricData</a>, the previous
 *    version of this API. It has new metrics, offers filtering at a metric level, and offers the
 *    ability to filter and group data by channels, queues, routing profiles, agents, and agent
 *    hierarchy levels. It can retrieve historical data for last the 14 days, in 24-hour
 *    intervals.</p>
 *          <p>For a description of the historical metrics that are supported by
 *     <code>GetMetricDataV2</code> and <code>GetMetricData</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics
 *     definitions</a> in the <i>Amazon Connect Administrator's Guide</i>.
 *   </p>
 *          <p>This API is not available in the Amazon Web Services GovCloud (US) Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetMetricDataV2Command } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetMetricDataV2Command } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetMetricDataV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricDataV2CommandInput} for command's `input` shape.
 * @see {@link GetMetricDataV2CommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class GetMetricDataV2Command extends $Command<
  GetMetricDataV2CommandInput,
  GetMetricDataV2CommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: GetMetricDataV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricDataV2CommandInput, GetMetricDataV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricDataV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetMetricDataV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMetricDataV2RequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMetricDataV2ResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMetricDataV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMetricDataV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricDataV2CommandOutput> {
    return deserializeAws_restJson1GetMetricDataV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
