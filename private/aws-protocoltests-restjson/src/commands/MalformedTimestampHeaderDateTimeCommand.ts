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

import {
  MalformedTimestampHeaderDateTimeInput,
  MalformedTimestampHeaderDateTimeInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommand,
  serializeAws_restJson1MalformedTimestampHeaderDateTimeCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * The input for {@link MalformedTimestampHeaderDateTimeCommand}.
 */
export interface MalformedTimestampHeaderDateTimeCommandInput extends MalformedTimestampHeaderDateTimeInput {}
/**
 * The output of {@link MalformedTimestampHeaderDateTimeCommand}.
 */
export interface MalformedTimestampHeaderDateTimeCommandOutput extends __MetadataBearer {}

export class MalformedTimestampHeaderDateTimeCommand extends $Command<
  MalformedTimestampHeaderDateTimeCommandInput,
  MalformedTimestampHeaderDateTimeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MalformedTimestampHeaderDateTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MalformedTimestampHeaderDateTimeCommandInput, MalformedTimestampHeaderDateTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedTimestampHeaderDateTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MalformedTimestampHeaderDateTimeInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: MalformedTimestampHeaderDateTimeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedTimestampHeaderDateTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedTimestampHeaderDateTimeCommandOutput> {
    return deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
