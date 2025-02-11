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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { StopNotebookExecutionInput, StopNotebookExecutionInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1StopNotebookExecutionCommand,
  serializeAws_json1_1StopNotebookExecutionCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link StopNotebookExecutionCommand}.
 */
export interface StopNotebookExecutionCommandInput extends StopNotebookExecutionInput {}
/**
 * The output of {@link StopNotebookExecutionCommand}.
 */
export interface StopNotebookExecutionCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StopNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StopNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new StopNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StopNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 *
 */
export class StopNotebookExecutionCommand extends $Command<
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: StopNotebookExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopNotebookExecutionCommandInput, StopNotebookExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopNotebookExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "StopNotebookExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopNotebookExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopNotebookExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopNotebookExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopNotebookExecutionCommandOutput> {
    return deserializeAws_json1_1StopNotebookExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
