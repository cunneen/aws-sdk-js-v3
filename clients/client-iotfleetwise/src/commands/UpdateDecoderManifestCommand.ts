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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  UpdateDecoderManifestRequest,
  UpdateDecoderManifestRequestFilterSensitiveLog,
  UpdateDecoderManifestResponse,
  UpdateDecoderManifestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateDecoderManifestCommand,
  serializeAws_json1_0UpdateDecoderManifestCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link UpdateDecoderManifestCommand}.
 */
export interface UpdateDecoderManifestCommandInput extends UpdateDecoderManifestRequest {}
/**
 * The output of {@link UpdateDecoderManifestCommand}.
 */
export interface UpdateDecoderManifestCommandOutput extends UpdateDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Updates a decoder manifest.</p>
 *         <p>A decoder manifest can only be updated when the status is <code>DRAFT</code>. Only
 *                 <code>ACTIVE</code> decoder manifests can be associated with vehicles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new UpdateDecoderManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link UpdateDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link DecoderManifestValidationException} (client fault)
 *  <p>The request couldn't be completed because it contains signal decoders with one or more validation errors.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 *
 */
export class UpdateDecoderManifestCommand extends $Command<
  UpdateDecoderManifestCommandInput,
  UpdateDecoderManifestCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: UpdateDecoderManifestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDecoderManifestCommandInput, UpdateDecoderManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDecoderManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "UpdateDecoderManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDecoderManifestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDecoderManifestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDecoderManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateDecoderManifestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDecoderManifestCommandOutput> {
    return deserializeAws_json1_0UpdateDecoderManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
