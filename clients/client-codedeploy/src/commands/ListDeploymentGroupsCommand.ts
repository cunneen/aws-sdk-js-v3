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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import {
  ListDeploymentGroupsInput,
  ListDeploymentGroupsInputFilterSensitiveLog,
  ListDeploymentGroupsOutput,
  ListDeploymentGroupsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDeploymentGroupsCommand,
  serializeAws_json1_1ListDeploymentGroupsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListDeploymentGroupsCommand}.
 */
export interface ListDeploymentGroupsCommandInput extends ListDeploymentGroupsInput {}
/**
 * The output of {@link ListDeploymentGroupsCommand}.
 */
export interface ListDeploymentGroupsCommandOutput extends ListDeploymentGroupsOutput, __MetadataBearer {}

/**
 * <p>Lists the deployment groups for an application registered with the IAM
 *             user or Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentGroupsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentGroupsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 *
 */
export class ListDeploymentGroupsCommand extends $Command<
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
  CodeDeployClientResolvedConfig
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

  constructor(readonly input: ListDeploymentGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentGroupsCommandInput, ListDeploymentGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentGroupsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentGroupsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeploymentGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentGroupsCommandOutput> {
    return deserializeAws_json1_1ListDeploymentGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
