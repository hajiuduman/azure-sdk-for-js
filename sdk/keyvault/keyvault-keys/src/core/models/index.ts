/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * As of http://tools.ietf.org/html/draft-ietf-jose-json-web-key-18
 */
export interface JsonWebKey {
  /**
   * Key identifier.
   */
  kid?: string;
  /**
   * JsonWebKey Key Type (kty), as defined in
   * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40. Possible values include:
   * 'EC', 'EC-HSM', 'RSA', 'RSA-HSM', 'oct'
   */
  kty?: JsonWebKeyType;
  keyOps?: string[];
  /**
   * RSA modulus.
   */
  n?: Uint8Array;
  /**
   * RSA public exponent.
   */
  e?: Uint8Array;
  /**
   * RSA private exponent, or the D component of an EC private key.
   */
  d?: Uint8Array;
  /**
   * RSA private key parameter.
   */
  dp?: Uint8Array;
  /**
   * RSA private key parameter.
   */
  dq?: Uint8Array;
  /**
   * RSA private key parameter.
   */
  qi?: Uint8Array;
  /**
   * RSA secret prime.
   */
  p?: Uint8Array;
  /**
   * RSA secret prime, with p < q.
   */
  q?: Uint8Array;
  /**
   * Symmetric key.
   */
  k?: Uint8Array;
  /**
   * HSM Token, used with 'Bring Your Own Key'.
   */
  t?: Uint8Array;
  /**
   * Elliptic curve name. For valid values, see JsonWebKeyCurveName. Possible values include:
   * 'P-256', 'P-384', 'P-521', 'P-256K'
   */
  crv?: JsonWebKeyCurveName;
  /**
   * X component of an EC public key.
   */
  x?: Uint8Array;
  /**
   * Y component of an EC public key.
   */
  y?: Uint8Array;
}

/**
 * The object attributes managed by the KeyVault service.
 */
export interface Attributes {
  /**
   * Determines whether the object is enabled.
   */
  enabled?: boolean;
  /**
   * Not before date in UTC.
   */
  notBefore?: Date;
  /**
   * Expiry date in UTC.
   */
  expires?: Date;
  /**
   * Creation time in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly created?: Date;
  /**
   * Last updated time in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly updated?: Date;
}

/**
 * The attributes of a key managed by the key vault service.
 */
export interface KeyAttributes extends Attributes {
  /**
   * softDelete data retention days. Value should be >=7 and <=90 when softDelete enabled,
   * otherwise 0.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly recoverableDays?: number;
  /**
   * Reflects the deletion recovery level currently in effect for keys in the current vault. If it
   * contains 'Purgeable' the key can be permanently deleted by a privileged user; otherwise, only
   * the system can purge the key, at the end of the retention interval. Possible values include:
   * 'Purgeable', 'Recoverable+Purgeable', 'Recoverable', 'Recoverable+ProtectedSubscription',
   * 'CustomizedRecoverable+Purgeable', 'CustomizedRecoverable',
   * 'CustomizedRecoverable+ProtectedSubscription'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly recoveryLevel?: DeletionRecoveryLevel;
}

/**
 * A KeyBundle consisting of a WebKey plus its attributes.
 */
export interface KeyBundle {
  /**
   * The Json web key.
   */
  key?: JsonWebKey;
  /**
   * The key management attributes.
   */
  attributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
  /**
   * True if the key's lifetime is managed by key vault. If this is a key backing a certificate,
   * then managed will be true.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly managed?: boolean;
}

/**
 * The key item containing key metadata.
 */
export interface KeyItem {
  /**
   * Key identifier.
   */
  kid?: string;
  /**
   * The key management attributes.
   */
  attributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
  /**
   * True if the key's lifetime is managed by key vault. If this is a key backing a certificate,
   * then managed will be true.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly managed?: boolean;
}

/**
 * A DeletedKeyBundle consisting of a WebKey plus its Attributes and deletion info
 */
export interface DeletedKeyBundle extends KeyBundle {
  /**
   * The url of the recovery object, used to identify and recover the deleted key.
   */
  recoveryId?: string;
  /**
   * The time when the key is scheduled to be purged, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the key was deleted, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deletedDate?: Date;
}

/**
 * The deleted key item containing the deleted key metadata and information about deletion.
 */
export interface DeletedKeyItem extends KeyItem {
  /**
   * The url of the recovery object, used to identify and recover the deleted key.
   */
  recoveryId?: string;
  /**
   * The time when the key is scheduled to be purged, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the key was deleted, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deletedDate?: Date;
}

/**
 * Properties of the key pair backing a certificate.
 */
export interface KeyProperties {
  /**
   * Indicates if the private key can be exported.
   */
  exportable?: boolean;
  /**
   * The type of key pair to be used for the certificate. Possible values include: 'EC', 'EC-HSM',
   * 'RSA', 'RSA-HSM', 'oct'
   */
  keyType?: JsonWebKeyType;
  /**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   */
  keySize?: number;
  /**
   * Indicates if the same key pair will be used on certificate renewal.
   */
  reuseKey?: boolean;
  /**
   * Elliptic curve name. For valid values, see JsonWebKeyCurveName. Possible values include:
   * 'P-256', 'P-384', 'P-521', 'P-256K'
   */
  curve?: JsonWebKeyCurveName;
}

/**
 * The key create parameters.
 */
export interface KeyCreateParameters {
  /**
   * The type of key to create. For valid values, see JsonWebKeyType. Possible values include:
   * 'EC', 'EC-HSM', 'RSA', 'RSA-HSM', 'oct'
   */
  kty: JsonWebKeyType;
  /**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   */
  keySize?: number;
  keyOps?: JsonWebKeyOperation[];
  keyAttributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Elliptic curve name. For valid values, see JsonWebKeyCurveName. Possible values include:
   * 'P-256', 'P-384', 'P-521', 'P-256K'
   */
  curve?: JsonWebKeyCurveName;
}

/**
 * The key import parameters.
 */
export interface KeyImportParameters {
  /**
   * Whether to import as a hardware key (HSM) or software key.
   */
  hsm?: boolean;
  /**
   * The Json web key
   */
  key: JsonWebKey;
  /**
   * The key management attributes.
   */
  keyAttributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The key operations parameters.
 */
export interface KeyOperationsParameters {
  /**
   * algorithm identifier. Possible values include: 'RSA-OAEP', 'RSA-OAEP-256', 'RSA1_5'
   */
  algorithm: JsonWebKeyEncryptionAlgorithm;
  value: Uint8Array;
}

/**
 * The key operations parameters.
 */
export interface KeySignParameters {
  /**
   * The signing/verification algorithm identifier. For more information on possible algorithm
   * types, see JsonWebKeySignatureAlgorithm. Possible values include: 'PS256', 'PS384', 'PS512',
   * 'RS256', 'RS384', 'RS512', 'RSNULL', 'ES256', 'ES384', 'ES512', 'ES256K'
   */
  algorithm: JsonWebKeySignatureAlgorithm;
  value: Uint8Array;
}

/**
 * The key verify parameters.
 */
export interface KeyVerifyParameters {
  /**
   * The signing/verification algorithm. For more information on possible algorithm types, see
   * JsonWebKeySignatureAlgorithm. Possible values include: 'PS256', 'PS384', 'PS512', 'RS256',
   * 'RS384', 'RS512', 'RSNULL', 'ES256', 'ES384', 'ES512', 'ES256K'
   */
  algorithm: JsonWebKeySignatureAlgorithm;
  /**
   * The digest used for signing.
   */
  digest: Uint8Array;
  /**
   * The signature to be verified.
   */
  signature: Uint8Array;
}

/**
 * The key update parameters.
 */
export interface KeyUpdateParameters {
  /**
   * Json web key operations. For more information on possible key operations, see
   * JsonWebKeyOperation.
   */
  keyOps?: JsonWebKeyOperation[];
  keyAttributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The key restore parameters.
 */
export interface KeyRestoreParameters {
  /**
   * The backup blob associated with a key bundle.
   */
  keyBundleBackup: Uint8Array;
}

/**
 * The key operation result.
 */
export interface KeyOperationResult {
  /**
   * Key identifier
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly kid?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly result?: Uint8Array;
}

/**
 * The key verify result.
 */
export interface KeyVerifyResult {
  /**
   * True if the signature is verified, otherwise false.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: boolean;
}

/**
 * The key list result.
 */
export interface KeyListResult {
  /**
   * A response message containing a list of keys in the key vault along with a link to the next
   * page of keys.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: KeyItem[];
  /**
   * The URL to get the next set of keys.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * A list of keys that have been deleted in this vault.
 */
export interface DeletedKeyListResult {
  /**
   * A response message containing a list of deleted keys in the vault along with a link to the
   * next page of deleted keys
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: DeletedKeyItem[];
  /**
   * The URL to get the next set of deleted keys.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * The backup key result, containing the backup blob.
 */
export interface BackupKeyResult {
  /**
   * The backup blob containing the backed up key.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: Uint8Array;
}

/**
 * The key vault server error.
 */
export interface ErrorModel {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly innerError?: ErrorModel;
}

/**
 * The key vault error exception.
 */
export interface KeyVaultError {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly error?: ErrorModel;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientCreateKeyOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   */
  keySize?: number;
  keyOps?: JsonWebKeyOperation[];
  keyAttributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Elliptic curve name. For valid values, see JsonWebKeyCurveName. Possible values include:
   * 'P-256', 'P-384', 'P-521', 'P-256K'
   */
  curve?: JsonWebKeyCurveName;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientImportKeyOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Whether to import as a hardware key (HSM) or software key.
   */
  hsm?: boolean;
  /**
   * The key management attributes.
   */
  keyAttributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientUpdateKeyOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Json web key operations. For more information on possible key operations, see
   * JsonWebKeyOperation.
   */
  keyOps?: JsonWebKeyOperation[];
  keyAttributes?: KeyAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetKeyVersionsOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetKeysOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetDeletedKeysOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
}

/**
 * Defines values for JsonWebKeyType.
 * Possible values include: 'EC', 'EC-HSM', 'RSA', 'RSA-HSM', 'oct'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeyType = "EC" | "EC-HSM" | "RSA" | "RSA-HSM" | "oct";

/**
 * Defines values for JsonWebKeyCurveName.
 * Possible values include: 'P-256', 'P-384', 'P-521', 'P-256K'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeyCurveName = "P-256" | "P-384" | "P-521" | "P-256K";

/**
 * Defines values for DeletionRecoveryLevel.
 * Possible values include: 'Purgeable', 'Recoverable+Purgeable', 'Recoverable',
 * 'Recoverable+ProtectedSubscription', 'CustomizedRecoverable+Purgeable', 'CustomizedRecoverable',
 * 'CustomizedRecoverable+ProtectedSubscription'
 * @readonly
 * @enum {string}
 */
export type DeletionRecoveryLevel =
  | "Purgeable"
  | "Recoverable+Purgeable"
  | "Recoverable"
  | "Recoverable+ProtectedSubscription"
  | "CustomizedRecoverable+Purgeable"
  | "CustomizedRecoverable"
  | "CustomizedRecoverable+ProtectedSubscription";

/**
 * Defines values for JsonWebKeyOperation.
 * Possible values include: 'encrypt', 'decrypt', 'sign', 'verify', 'wrapKey', 'unwrapKey',
 * 'import'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeyOperation =
  | "encrypt"
  | "decrypt"
  | "sign"
  | "verify"
  | "wrapKey"
  | "unwrapKey"
  | "import";

/**
 * Defines values for JsonWebKeyEncryptionAlgorithm.
 * Possible values include: 'RSA-OAEP', 'RSA-OAEP-256', 'RSA1_5'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeyEncryptionAlgorithm = "RSA-OAEP" | "RSA-OAEP-256" | "RSA1_5";

/**
 * Defines values for JsonWebKeySignatureAlgorithm.
 * Possible values include: 'PS256', 'PS384', 'PS512', 'RS256', 'RS384', 'RS512', 'RSNULL',
 * 'ES256', 'ES384', 'ES512', 'ES256K'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeySignatureAlgorithm =
  | "PS256"
  | "PS384"
  | "PS512"
  | "RS256"
  | "RS384"
  | "RS512"
  | "RSNULL"
  | "ES256"
  | "ES384"
  | "ES512"
  | "ES256K";

/**
 * Contains response data for the createKey operation.
 */
export type CreateKeyResponse = KeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyBundle;
  };
};

/**
 * Contains response data for the importKey operation.
 */
export type ImportKeyResponse = KeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyBundle;
  };
};

/**
 * Contains response data for the deleteKey operation.
 */
export type DeleteKeyResponse = DeletedKeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeletedKeyBundle;
  };
};

/**
 * Contains response data for the updateKey operation.
 */
export type UpdateKeyResponse = KeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyBundle;
  };
};

/**
 * Contains response data for the getKey operation.
 */
export type GetKeyResponse = KeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyBundle;
  };
};

/**
 * Contains response data for the getKeyVersions operation.
 */
export type GetKeyVersionsResponse = KeyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyListResult;
  };
};

/**
 * Contains response data for the getKeys operation.
 */
export type GetKeysResponse = KeyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyListResult;
  };
};

/**
 * Contains response data for the backupKey operation.
 */
export type BackupKeyResponse = BackupKeyResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BackupKeyResult;
  };
};

/**
 * Contains response data for the restoreKey operation.
 */
export type RestoreKeyResponse = KeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyBundle;
  };
};

/**
 * Contains response data for the encrypt operation.
 */
export type EncryptResponse = KeyOperationResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyOperationResult;
  };
};

/**
 * Contains response data for the decrypt operation.
 */
export type DecryptResponse = KeyOperationResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyOperationResult;
  };
};

/**
 * Contains response data for the sign operation.
 */
export type SignResponse = KeyOperationResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyOperationResult;
  };
};

/**
 * Contains response data for the verify operation.
 */
export type VerifyResponse = KeyVerifyResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyVerifyResult;
  };
};

/**
 * Contains response data for the wrapKey operation.
 */
export type WrapKeyResponse = KeyOperationResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyOperationResult;
  };
};

/**
 * Contains response data for the unwrapKey operation.
 */
export type UnwrapKeyResponse = KeyOperationResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyOperationResult;
  };
};

/**
 * Contains response data for the getDeletedKeys operation.
 */
export type GetDeletedKeysResponse = DeletedKeyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeletedKeyListResult;
  };
};

/**
 * Contains response data for the getDeletedKey operation.
 */
export type GetDeletedKeyResponse = DeletedKeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeletedKeyBundle;
  };
};

/**
 * Contains response data for the recoverDeletedKey operation.
 */
export type RecoverDeletedKeyResponse = KeyBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: KeyBundle;
  };
};
