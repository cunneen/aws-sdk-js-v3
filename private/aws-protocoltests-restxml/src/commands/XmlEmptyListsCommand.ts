// smithy-typescript generated code
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

import { XmlListsInputOutput, XmlListsInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlXmlEmptyListsCommand,
  serializeAws_restXmlXmlEmptyListsCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * The input for {@link XmlEmptyListsCommand}.
 */
export interface XmlEmptyListsCommandInput extends XmlListsInputOutput {}
/**
 * The output of {@link XmlEmptyListsCommand}.
 */
export interface XmlEmptyListsCommandOutput extends XmlListsInputOutput, __MetadataBearer {}

export class XmlEmptyListsCommand extends $Command<
  XmlEmptyListsCommandInput,
  XmlEmptyListsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlEmptyListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlEmptyListsCommandInput, XmlEmptyListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlEmptyListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: XmlListsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: XmlListsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlEmptyListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlXmlEmptyListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlEmptyListsCommandOutput> {
    return deserializeAws_restXmlXmlEmptyListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
