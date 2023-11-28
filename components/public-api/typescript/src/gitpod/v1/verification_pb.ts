/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file gitpod/v1/verification.proto (package gitpod.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Required fields:
 * - phone_number
 *
 * @generated from message gitpod.v1.SendPhoneNumberVerificationTokenRequest
 */
export class SendPhoneNumberVerificationTokenRequest extends Message<SendPhoneNumberVerificationTokenRequest> {
  /**
   * phone_number in E.164 format
   *
   * @generated from field: string phone_number = 1;
   */
  phoneNumber = "";

  constructor(data?: PartialMessage<SendPhoneNumberVerificationTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "gitpod.v1.SendPhoneNumberVerificationTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendPhoneNumberVerificationTokenRequest {
    return new SendPhoneNumberVerificationTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendPhoneNumberVerificationTokenRequest {
    return new SendPhoneNumberVerificationTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendPhoneNumberVerificationTokenRequest {
    return new SendPhoneNumberVerificationTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendPhoneNumberVerificationTokenRequest | PlainMessage<SendPhoneNumberVerificationTokenRequest> | undefined, b: SendPhoneNumberVerificationTokenRequest | PlainMessage<SendPhoneNumberVerificationTokenRequest> | undefined): boolean {
    return proto3.util.equals(SendPhoneNumberVerificationTokenRequest, a, b);
  }
}

/**
 * @generated from message gitpod.v1.SendPhoneNumberVerificationTokenResponse
 */
export class SendPhoneNumberVerificationTokenResponse extends Message<SendPhoneNumberVerificationTokenResponse> {
  /**
   * verification_id is used to VerifyPhoneNumberVerificationToken
   *
   * @generated from field: string verification_id = 1;
   */
  verificationId = "";

  constructor(data?: PartialMessage<SendPhoneNumberVerificationTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "gitpod.v1.SendPhoneNumberVerificationTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "verification_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendPhoneNumberVerificationTokenResponse {
    return new SendPhoneNumberVerificationTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendPhoneNumberVerificationTokenResponse {
    return new SendPhoneNumberVerificationTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendPhoneNumberVerificationTokenResponse {
    return new SendPhoneNumberVerificationTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendPhoneNumberVerificationTokenResponse | PlainMessage<SendPhoneNumberVerificationTokenResponse> | undefined, b: SendPhoneNumberVerificationTokenResponse | PlainMessage<SendPhoneNumberVerificationTokenResponse> | undefined): boolean {
    return proto3.util.equals(SendPhoneNumberVerificationTokenResponse, a, b);
  }
}

/**
 * Required fields:
 * - phone_number
 * - verification_id
 * - token
 *
 * @generated from message gitpod.v1.VerifyPhoneNumberVerificationTokenRequest
 */
export class VerifyPhoneNumberVerificationTokenRequest extends Message<VerifyPhoneNumberVerificationTokenRequest> {
  /**
   * phone_number in E.164 format
   *
   * @generated from field: string phone_number = 1;
   */
  phoneNumber = "";

  /**
   * verification_id is returned by SendPhoneNumberVerificationToken
   *
   * @generated from field: string verification_id = 2;
   */
  verificationId = "";

  /**
   * token is the verification token from providers
   *
   * @generated from field: string token = 3;
   */
  token = "";

  constructor(data?: PartialMessage<VerifyPhoneNumberVerificationTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "gitpod.v1.VerifyPhoneNumberVerificationTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verification_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyPhoneNumberVerificationTokenRequest {
    return new VerifyPhoneNumberVerificationTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyPhoneNumberVerificationTokenRequest {
    return new VerifyPhoneNumberVerificationTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyPhoneNumberVerificationTokenRequest {
    return new VerifyPhoneNumberVerificationTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyPhoneNumberVerificationTokenRequest | PlainMessage<VerifyPhoneNumberVerificationTokenRequest> | undefined, b: VerifyPhoneNumberVerificationTokenRequest | PlainMessage<VerifyPhoneNumberVerificationTokenRequest> | undefined): boolean {
    return proto3.util.equals(VerifyPhoneNumberVerificationTokenRequest, a, b);
  }
}

/**
 * @generated from message gitpod.v1.VerifyPhoneNumberVerificationTokenResponse
 */
export class VerifyPhoneNumberVerificationTokenResponse extends Message<VerifyPhoneNumberVerificationTokenResponse> {
  /**
   * verified indicates if the verification was successful
   *
   * @generated from field: bool verified = 1;
   */
  verified = false;

  constructor(data?: PartialMessage<VerifyPhoneNumberVerificationTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "gitpod.v1.VerifyPhoneNumberVerificationTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyPhoneNumberVerificationTokenResponse {
    return new VerifyPhoneNumberVerificationTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyPhoneNumberVerificationTokenResponse {
    return new VerifyPhoneNumberVerificationTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyPhoneNumberVerificationTokenResponse {
    return new VerifyPhoneNumberVerificationTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyPhoneNumberVerificationTokenResponse | PlainMessage<VerifyPhoneNumberVerificationTokenResponse> | undefined, b: VerifyPhoneNumberVerificationTokenResponse | PlainMessage<VerifyPhoneNumberVerificationTokenResponse> | undefined): boolean {
    return proto3.util.equals(VerifyPhoneNumberVerificationTokenResponse, a, b);
  }
}