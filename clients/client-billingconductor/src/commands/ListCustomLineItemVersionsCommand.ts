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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  ListCustomLineItemVersionsInput,
  ListCustomLineItemVersionsInputFilterSensitiveLog,
  ListCustomLineItemVersionsOutput,
  ListCustomLineItemVersionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListCustomLineItemVersionsCommand,
  serializeAws_restJson1ListCustomLineItemVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListCustomLineItemVersionsCommand}.
 */
export interface ListCustomLineItemVersionsCommandInput extends ListCustomLineItemVersionsInput {}
/**
 * The output of {@link ListCustomLineItemVersionsCommand}.
 */
export interface ListCustomLineItemVersionsCommandOutput extends ListCustomLineItemVersionsOutput, __MetadataBearer {}

/**
 * <p>A paginated call to get a list of all custom line item versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListCustomLineItemVersionsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListCustomLineItemVersionsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListCustomLineItemVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomLineItemVersionsCommandInput} for command's `input` shape.
 * @see {@link ListCustomLineItemVersionsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 *
 */
export class ListCustomLineItemVersionsCommand extends $Command<
  ListCustomLineItemVersionsCommandInput,
  ListCustomLineItemVersionsCommandOutput,
  BillingconductorClientResolvedConfig
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

  constructor(readonly input: ListCustomLineItemVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomLineItemVersionsCommandInput, ListCustomLineItemVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomLineItemVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListCustomLineItemVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomLineItemVersionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListCustomLineItemVersionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomLineItemVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCustomLineItemVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomLineItemVersionsCommandOutput> {
    return deserializeAws_restJson1ListCustomLineItemVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
