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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  ListTablesRequest,
  ListTablesRequestFilterSensitiveLog,
  ListTablesResult,
  ListTablesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListTablesCommand,
  serializeAws_restJson1ListTablesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListTablesCommand}.
 */
export interface ListTablesCommandInput extends ListTablesRequest {}
/**
 * The output of {@link ListTablesCommand}.
 */
export interface ListTablesCommandOutput extends ListTablesResult, __MetadataBearer {}

/**
 * <p>
 *             The ListTables API allows you to retrieve a list of all the tables in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTablesCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTablesCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
 *
 */
export class ListTablesCommand extends $Command<
  ListTablesCommandInput,
  ListTablesCommandOutput,
  HoneycodeClientResolvedConfig
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

  constructor(readonly input: ListTablesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTablesCommandInput, ListTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTablesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "ListTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTablesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTablesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTablesCommandOutput> {
    return deserializeAws_restJson1ListTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
