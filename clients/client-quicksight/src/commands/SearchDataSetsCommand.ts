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
  SearchDataSetsRequest,
  SearchDataSetsRequestFilterSensitiveLog,
  SearchDataSetsResponse,
  SearchDataSetsResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_restJson1SearchDataSetsCommand,
  serializeAws_restJson1SearchDataSetsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * The input for {@link SearchDataSetsCommand}.
 */
export interface SearchDataSetsCommandInput extends SearchDataSetsRequest {}
/**
 * The output of {@link SearchDataSetsCommand}.
 */
export interface SearchDataSetsCommandOutput extends SearchDataSetsResponse, __MetadataBearer {}

/**
 * <p>Use the <code>SearchDataSets</code> operation to search for datasets that belong to an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchDataSetsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchDataSetsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new SearchDataSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDataSetsCommandInput} for command's `input` shape.
 * @see {@link SearchDataSetsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 *
 */
export class SearchDataSetsCommand extends $Command<
  SearchDataSetsCommandInput,
  SearchDataSetsCommandOutput,
  QuickSightClientResolvedConfig
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

  constructor(readonly input: SearchDataSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchDataSetsCommandInput, SearchDataSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchDataSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "SearchDataSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchDataSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchDataSetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchDataSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchDataSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchDataSetsCommandOutput> {
    return deserializeAws_restJson1SearchDataSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
