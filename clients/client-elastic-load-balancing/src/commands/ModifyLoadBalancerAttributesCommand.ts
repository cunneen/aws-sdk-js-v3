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
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesInputFilterSensitiveLog,
  ModifyLoadBalancerAttributesOutput,
  ModifyLoadBalancerAttributesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyLoadBalancerAttributesCommand,
  serializeAws_queryModifyLoadBalancerAttributesCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandInput extends ModifyLoadBalancerAttributesInput {}
/**
 * The output of {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandOutput
  extends ModifyLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Modifies the attributes of the specified load balancer.</p>
 *         <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and
 *             <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute
 *             <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p>
 *         <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *  <p>The specified load balancer attribute does not exist.</p>
 *
 *
 * @example To enable cross-zone load balancing
 * ```javascript
 * // This example enables cross-zone load balancing for the specified load balancer.
 * const input = {
 *   "LoadBalancerAttributes": {
 *     "CrossZoneLoadBalancing": {
 *       "Enabled": true
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerAttributes": {
 *     "CrossZoneLoadBalancing": {
 *       "Enabled": true
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * }
 * *\/
 * // example id: elb-modify-load-balancer-attributes-1
 * ```
 *
 * @example To enable connection draining
 * ```javascript
 * // This example enables connection draining for the specified load balancer.
 * const input = {
 *   "LoadBalancerAttributes": {
 *     "ConnectionDraining": {
 *       "Enabled": true,
 *       "Timeout": 300
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerAttributes": {
 *     "ConnectionDraining": {
 *       "Enabled": true,
 *       "Timeout": 300
 *     }
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * }
 * *\/
 * // example id: elb-modify-load-balancer-attributes-2
 * ```
 *
 */
export class ModifyLoadBalancerAttributesCommand extends $Command<
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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

  constructor(readonly input: ModifyLoadBalancerAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyLoadBalancerAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ModifyLoadBalancerAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyLoadBalancerAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyLoadBalancerAttributesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyLoadBalancerAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyLoadBalancerAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyLoadBalancerAttributesCommandOutput> {
    return deserializeAws_queryModifyLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
