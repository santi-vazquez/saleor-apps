import gql from 'graphql-tag';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
type JSONValue = string | number | boolean | null | { [key: string]: JSONValue } | JSONValue[];
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: string; output: string; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: string; output: string; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: JSONValue; output: JSONValue; }
  JSONString: { input: string; output: string; }
  /**
   * Metadata is a map of key-value pairs, both keys and values are `String`.
   *
   * Example:
   * ```
   * {
   *     "key1": "value1",
   *     "key2": "value2"
   * }
   * ```
   */
  Metadata: { input: Record<string, string>; output: Record<string, string>; }
  /**
   * Positive Decimal scalar implementation.
   *
   * Should be used in places where value must be positive.
   */
  PositiveDecimal: { input: number; output: number; }
  UUID: { input: string; output: string; }
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: { input: unknown; output: unknown; }
  WeightScalar: { input: number; output: number; }
  /** _Any value scalar as defined by Federation spec. */
  _Any: { input: unknown; output: unknown; }
};

/**
 * Create a new address for the customer.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountAddressCreate = {
  __typename?: 'AccountAddressCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
};

/** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressDelete = {
  __typename?: 'AccountAddressDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
};

/** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
};

/**
 * Remove user account.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountDelete = {
  __typename?: 'AccountDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountError = {
  __typename?: 'AccountError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AccountErrorCode =
  | 'ACCOUNT_NOT_CONFIRMED'
  | 'ACTIVATE_OWN_ACCOUNT'
  | 'ACTIVATE_SUPERUSER_ACCOUNT'
  | 'CHANNEL_INACTIVE'
  | 'DEACTIVATE_OWN_ACCOUNT'
  | 'DEACTIVATE_SUPERUSER_ACCOUNT'
  | 'DELETE_NON_STAFF_USER'
  | 'DELETE_OWN_ACCOUNT'
  | 'DELETE_STAFF_ACCOUNT'
  | 'DELETE_SUPERUSER_ACCOUNT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INACTIVE'
  | 'INVALID'
  | 'INVALID_CREDENTIALS'
  | 'INVALID_PASSWORD'
  | 'JWT_DECODE_ERROR'
  | 'JWT_INVALID_CSRF_TOKEN'
  | 'JWT_INVALID_TOKEN'
  | 'JWT_MISSING_TOKEN'
  | 'JWT_SIGNATURE_EXPIRED'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'MISSING_CHANNEL_SLUG'
  | 'NOT_FOUND'
  | 'OUT_OF_SCOPE_GROUP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'OUT_OF_SCOPE_USER'
  | 'PASSWORD_ENTIRELY_NUMERIC'
  | 'PASSWORD_TOO_COMMON'
  | 'PASSWORD_TOO_SHORT'
  | 'PASSWORD_TOO_SIMILAR'
  | 'REQUIRED'
  | 'UNIQUE';

export type AccountInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
};

/** Register a new user. */
export type AccountRegister = {
  __typename?: 'AccountRegister';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type AccountRegisterInput = {
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the user. */
  email: Scalars['String']['input'];
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** User public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Password. */
  password: Scalars['String']['input'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Sends an email with the account removal link for the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Sets a default address for the authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/**
 * Updates the account of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountUpdate = {
  __typename?: 'AccountUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/** Represents user address data. */
export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  cityArea: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Address is user's default billing address. */
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  streetAddress1: Scalars['String']['output'];
  streetAddress2: Scalars['String']['output'];
};

/**
 * Creates user address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressCreate = {
  __typename?: 'AddressCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
};

/**
 * Deletes an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressDelete = {
  __typename?: 'AddressDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
};

export type AddressInput = {
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** District. */
  cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Sets a default address for the given user.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressSetDefault = {
  __typename?: 'AddressSetDefault';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type AddressTypeEnum =
  | 'BILLING'
  | 'SHIPPING';

/**
 * Updates an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressUpdate = {
  __typename?: 'AddressUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
};

export type AddressValidationData = {
  __typename?: 'AddressValidationData';
  addressFormat: Scalars['String']['output'];
  addressLatinFormat: Scalars['String']['output'];
  allowedFields: Array<Scalars['String']['output']>;
  cityAreaChoices: Array<ChoiceValue>;
  cityAreaType: Scalars['String']['output'];
  cityChoices: Array<ChoiceValue>;
  cityType: Scalars['String']['output'];
  countryAreaChoices: Array<ChoiceValue>;
  countryAreaType: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  postalCodeExamples: Array<Scalars['String']['output']>;
  postalCodeMatchers: Array<Scalars['String']['output']>;
  postalCodePrefix: Scalars['String']['output'];
  postalCodeType: Scalars['String']['output'];
  requiredFields: Array<Scalars['String']['output']>;
  upperFields: Array<Scalars['String']['output']>;
};

/** Represents allocation. */
export type Allocation = Node & {
  __typename?: 'Allocation';
  id: Scalars['ID']['output'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars['Int']['output'];
  /**
   * The warehouse were items were allocated.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  warehouse: Warehouse;
};

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  __typename?: 'App';
  /** Description of this app. */
  aboutApp?: Maybe<Scalars['String']['output']>;
  /** JWT token used to authenticate by thridparty app. */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** Url to iframe with the app. */
  appUrl?: Maybe<Scalars['String']['output']>;
  /** Url to iframe with the configuration for the app. */
  configurationUrl?: Maybe<Scalars['String']['output']>;
  /** The date and time when the app was created. */
  created?: Maybe<Scalars['DateTime']['output']>;
  /** Description of the data privacy defined for this app. */
  dataPrivacy?: Maybe<Scalars['String']['output']>;
  /** Url to details about the privacy policy on the app owner page. */
  dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  /**
   * App's dashboard extensions.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  extensions: Array<AppExtension>;
  /** Homepage of the app. */
  homepageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Determine if app will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the app. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of the app's permissions. */
  permissions?: Maybe<Array<Permission>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Support page for the app. */
  supportUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Last 4 characters of the tokens.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  tokens?: Maybe<Array<AppToken>>;
  /** Type of the app. */
  type?: Maybe<AppTypeEnum>;
  /** Version number of the app. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * List of webhooks assigned to this app.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  webhooks?: Maybe<Array<Webhook>>;
};


/** Represents app data. */
export type AppMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents app data. */
export type AppMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents app data. */
export type AppPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents app data. */
export type AppPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Activate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppActivate = {
  __typename?: 'AppActivate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppCountableConnection = {
  __typename?: 'AppCountableConnection';
  edges: Array<AppCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppCountableEdge = {
  __typename?: 'AppCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: App;
};

/** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppCreate = {
  __typename?: 'AppCreate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AppError>;
};

/**
 * Deactivate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeactivate = {
  __typename?: 'AppDeactivate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/**
 * Deletes an app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDelete = {
  __typename?: 'AppDelete';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/**
 * Delete failed installation.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeleteFailedInstallation = {
  __typename?: 'AppDeleteFailedInstallation';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppDeleted = Event & {
  __typename?: 'AppDeleted';
  /**
   * The application the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type AppError = {
  __typename?: 'AppError';
  /** The error code. */
  code: AppErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
};

/** An enumeration. */
export type AppErrorCode =
  | 'FORBIDDEN'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_MANIFEST_FORMAT'
  | 'INVALID_PERMISSION'
  | 'INVALID_STATUS'
  | 'INVALID_URL_FORMAT'
  | 'MANIFEST_URL_CANT_CONNECT'
  | 'NOT_FOUND'
  | 'OUT_OF_SCOPE_APP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'REQUIRED'
  | 'UNIQUE';

/** Represents app data. */
export type AppExtension = Node & {
  __typename?: 'AppExtension';
  /** JWT token used to authenticate by thridparty app extension. */
  accessToken?: Maybe<Scalars['String']['output']>;
  app: App;
  id: Scalars['ID']['output'];
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String']['output'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String']['output'];
};

export type AppExtensionCountableConnection = {
  __typename?: 'AppExtensionCountableConnection';
  edges: Array<AppExtensionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppExtensionCountableEdge = {
  __typename?: 'AppExtensionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AppExtension;
};

export type AppExtensionFilterInput = {
  mount?: InputMaybe<Array<AppExtensionMountEnum>>;
  target?: InputMaybe<AppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export type AppExtensionMountEnum =
  | 'NAVIGATION_CATALOG'
  | 'NAVIGATION_CUSTOMERS'
  | 'NAVIGATION_DISCOUNTS'
  | 'NAVIGATION_ORDERS'
  | 'NAVIGATION_PAGES'
  | 'NAVIGATION_TRANSLATIONS'
  | 'ORDER_DETAILS_MORE_ACTIONS'
  | 'ORDER_OVERVIEW_CREATE'
  | 'ORDER_OVERVIEW_MORE_ACTIONS'
  | 'PRODUCT_DETAILS_MORE_ACTIONS'
  | 'PRODUCT_OVERVIEW_CREATE'
  | 'PRODUCT_OVERVIEW_MORE_ACTIONS';

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 */
export type AppExtensionTargetEnum =
  | 'APP_PAGE'
  | 'POPUP';

/**
 * Fetch and validate manifest.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppFetchManifest = {
  __typename?: 'AppFetchManifest';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
  /** Name of the app. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppInstall = {
  __typename?: 'AppInstall';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppInstallInput = {
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the app to install. */
  appName?: InputMaybe<Scalars['String']['input']>;
  /** Url to app's manifest in JSON format. */
  manifestUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Job & Node & {
  __typename?: 'AppInstallation';
  appName: Scalars['String']['output'];
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  manifestUrl: Scalars['String']['output'];
  /** Job message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
};

export type AppInstalled = Event & {
  __typename?: 'AppInstalled';
  /**
   * The application the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type AppManifestExtension = {
  __typename?: 'AppManifestExtension';
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String']['output'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String']['output'];
};

/**
 * Retry failed installation of new app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppRetryInstall = {
  __typename?: 'AppRetryInstall';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppSortField =
  /** Sort apps by creation date. */
  | 'CREATION_DATE'
  /** Sort apps by name. */
  | 'NAME';

export type AppSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
};

export type AppStatusChanged = Event & {
  __typename?: 'AppStatusChanged';
  /**
   * The application the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents token data. */
export type AppToken = Node & {
  __typename?: 'AppToken';
  /** Last 4 characters of the token. */
  authToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the authenticated token. */
  name?: Maybe<Scalars['String']['output']>;
};

/**
 * Creates a new token.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenCreate = {
  __typename?: 'AppTokenCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AppError>;
};

/**
 * Deletes an authentication token assigned to app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenDelete = {
  __typename?: 'AppTokenDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  errors: Array<AppError>;
};

export type AppTokenInput = {
  /** ID of app. */
  app: Scalars['ID']['input'];
  /** Name of the token. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Verify provided app token. */
export type AppTokenVerify = {
  __typename?: 'AppTokenVerify';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean']['output'];
};

/** Enum determining type of your App. */
export type AppTypeEnum =
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  | 'LOCAL'
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  | 'THIRDPARTY';

/**
 * Updates an existing app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppUpdate = {
  __typename?: 'AppUpdate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppUpdated = Event & {
  __typename?: 'AppUpdated';
  /**
   * The application the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AreaUnitsEnum =
  | 'SQ_CM'
  | 'SQ_FT'
  | 'SQ_INCH'
  | 'SQ_KM'
  | 'SQ_M'
  | 'SQ_YD';

/**
 * Assigns storefront's navigation menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
 */
export type AssignNavigation = {
  __typename?: 'AssignNavigation';
  errors: Array<MenuError>;
  /** Assigned navigation menu. */
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

/**
 * Represents assigned attribute to variant with variant selection attached.
 *
 * Added in Saleor 3.1.
 */
export type AssignedVariantAttribute = {
  __typename?: 'AssignedVariantAttribute';
  /** Attribute assigned to variant. */
  attribute: Attribute;
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  variantSelection: Scalars['Boolean']['output'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  __typename?: 'Attribute';
  /** Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  availableInGrid: Scalars['Boolean']['output'];
  /** List of attribute's values. */
  choices?: Maybe<AttributeValueCountableConnection>;
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>;
  /** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  filterableInDashboard: Scalars['Boolean']['output'];
  /** Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  filterableInStorefront: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  storefrontSearchPosition: Scalars['Int']['output'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
  /** The attribute type. */
  type?: Maybe<AttributeTypeEnum>;
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  valueRequired: Scalars['Boolean']['output'];
  /** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  visibleInStorefront: Scalars['Boolean']['output'];
  /** Flag indicating that attribute has predefined choices. */
  withChoices: Scalars['Boolean']['output'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeValueFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeError>;
};

export type AttributeChoicesSortField =
  /** Sort attribute choice by name. */
  | 'NAME'
  /** Sort attribute choice by slug. */
  | 'SLUG';

export type AttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attribute choices by the selected field. */
  field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Attribute;
};

/** Creates an attribute. */
export type AttributeCreate = {
  __typename?: 'AttributeCreate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeCreateInput = {
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /** The entity type which can be used as a reference. */
  entityType?: InputMaybe<AttributeEntityTypeEnum>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String']['input'];
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** The attribute type. */
  type: AttributeTypeEnum;
  /** The unit of attribute values. */
  unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attribute's values. */
  values?: InputMaybe<Array<AttributeValueCreateInput>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Deletes an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeDelete = {
  __typename?: 'AttributeDelete';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

/** An enumeration. */
export type AttributeEntityTypeEnum =
  | 'PAGE'
  | 'PRODUCT';

export type AttributeError = {
  __typename?: 'AttributeError';
  /** The error code. */
  code: AttributeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AttributeErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type AttributeFilterInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  inCategory?: InputMaybe<Scalars['ID']['input']>;
  inCollection?: InputMaybe<Scalars['ID']['input']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AttributeTypeEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeInput = {
  /** The boolean value of the attribute. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
  date?: InputMaybe<DateRangeInput>;
  /** The date/time range that the returned values should be in. */
  dateTime?: InputMaybe<DateTimeRangeInput>;
  /** Internal representation of an attribute name. */
  slug: Scalars['String']['input'];
  /** Internal representation of a value (unique per attribute). */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The range that the returned values should be in. */
  valuesRange?: InputMaybe<IntRangeInput>;
};

/** An enumeration. */
export type AttributeInputTypeEnum =
  | 'BOOLEAN'
  | 'DATE'
  | 'DATE_TIME'
  | 'DROPDOWN'
  | 'FILE'
  | 'MULTISELECT'
  | 'NUMERIC'
  | 'REFERENCE'
  | 'RICH_TEXT'
  | 'SWATCH';

/**
 * Reorder the values of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeReorderValues = {
  __typename?: 'AttributeReorderValues';
  /** Attribute from which values are reordered. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeSortField =
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  | 'AVAILABLE_IN_GRID'
  /** Sort attributes by the filterable in dashboard flag */
  | 'FILTERABLE_IN_DASHBOARD'
  /** Sort attributes by the filterable in storefront flag */
  | 'FILTERABLE_IN_STOREFRONT'
  /** Sort attributes by the variant only flag */
  | 'IS_VARIANT_ONLY'
  /** Sort attributes by name */
  | 'NAME'
  /** Sort attributes by slug */
  | 'SLUG'
  /** Sort attributes by their position in storefront */
  | 'STOREFRONT_SEARCH_POSITION'
  /** Sort attributes by the value required flag */
  | 'VALUE_REQUIRED'
  /** Sort attributes by visibility in the storefront */
  | 'VISIBLE_IN_STOREFRONT';

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  __typename?: 'AttributeTranslatableContent';
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attribute?: Maybe<Attribute>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeTranslate = {
  __typename?: 'AttributeTranslate';
  attribute?: Maybe<Attribute>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type AttributeTranslation = Node & {
  __typename?: 'AttributeTranslation';
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

/** An enumeration. */
export type AttributeTypeEnum =
  | 'PAGE_TYPE'
  | 'PRODUCT_TYPE';

/**
 * Updates attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeUpdate = {
  __typename?: 'AttributeUpdate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
  /** New values to be created for this attribute. */
  addValues?: InputMaybe<Array<AttributeValueUpdateInput>>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** The unit of attribute values. */
  unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  __typename?: 'AttributeValue';
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars['Boolean']['output']>;
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars['Date']['output']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  /** Represents file URL and content type (if attribute value is a file). */
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']['output']>;
  /** The ID of the attribute reference. */
  reference?: Maybe<Scalars['ID']['output']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']['output']>;
  /** Internal representation of a value (unique per attribute). */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']['output']>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes values of attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeError>;
};

export type AttributeValueCountableConnection = {
  __typename?: 'AttributeValueCountableConnection';
  edges: Array<AttributeValueCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeValueCountableEdge = {
  __typename?: 'AttributeValueCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AttributeValue;
};

/**
 * Creates a value for an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate';
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueCreateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  name: Scalars['String']['input'];
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete';
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueInput = {
  /** Represents the boolean value of the attribute value. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** Represents the date value of the attribute value. */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  file?: InputMaybe<Scalars['String']['input']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** List of entity IDs that will be used as references. */
  references?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Text content in JSON format. */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AttributeValueTranslatableContent = Node & {
  __typename?: 'AttributeValueTranslatableContent';
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attributeValue?: Maybe<AttributeValue>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']['output']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute value.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate';
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type AttributeValueTranslation = Node & {
  __typename?: 'AttributeValueTranslation';
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String']['output'];
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']['output']>;
};

export type AttributeValueTranslationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Translated text.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
};

/**
 * Updates value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate';
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueUpdateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type BulkAttributeValueInput = {
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BulkProductError = {
  __typename?: 'BulkProductError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

export type BulkStockError = {
  __typename?: 'BulkStockError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

export type CardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  code: Scalars['String']['input'];
  /** Card security code. */
  cvc?: InputMaybe<Scalars['String']['input']>;
  /** Information about currency and amount. */
  money: MoneyInput;
};

export type CatalogueInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product variant related to the discount.
   *
   * Added in Saleor 3.1.
   */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  __typename?: 'Category';
  /** List of ancestors of the category. */
  ancestors?: Maybe<CategoryCountableConnection>;
  backgroundImage?: Maybe<Image>;
  /** List of children of the category. */
  children?: Maybe<CategoryCountableConnection>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes categories.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

/**
 * Creates a new category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryCreate = {
  __typename?: 'CategoryCreate';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCreated = Event & {
  __typename?: 'CategoryCreated';
  /**
   * The category the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryDelete = {
  __typename?: 'CategoryDelete';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryDeleted = Event & {
  __typename?: 'CategoryDeleted';
  /**
   * The category the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for a product media. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Category description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Category name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Category slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySortField =
  /** Sort categories by name. */
  | 'NAME'
  /** Sort categories by product count. */
  | 'PRODUCT_COUNT'
  /** Sort categories by subcategory count. */
  | 'SUBCATEGORY_COUNT';

export type CategorySortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  __typename?: 'CategoryTranslatableContent';
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  category?: Maybe<Category>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a category.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CategoryTranslate = {
  __typename?: 'CategoryTranslate';
  category?: Maybe<Category>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type CategoryTranslation = Node & {
  __typename?: 'CategoryTranslation';
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryUpdate = {
  __typename?: 'CategoryUpdate';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryUpdated = Event & {
  __typename?: 'CategoryUpdated';
  /**
   * The category the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents channel. */
export type Channel = Node & {
  __typename?: 'Channel';
  currencyCode: Scalars['String']['output'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry: CountryDisplay;
  /**
   * Whether a channel has associated orders.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  hasOrders: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/**
 * Activate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelActivate = {
  __typename?: 'ChannelActivate';
  /** Activated channel. */
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/**
 * Creates new channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelCreate = {
  __typename?: 'ChannelCreate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelCreateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Currency of the channel. */
  currencyCode: Scalars['String']['input'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry: CountryCode;
  /** isActive flag. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the channel. */
  name: Scalars['String']['input'];
  /** Slug of the channel. */
  slug: Scalars['String']['input'];
};

export type ChannelCreated = Event & {
  __typename?: 'ChannelCreated';
  /**
   * The channel the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deactivate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDeactivate = {
  __typename?: 'ChannelDeactivate';
  /** Deactivated channel. */
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/**
 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDelete = {
  __typename?: 'ChannelDelete';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  channelId: Scalars['ID']['input'];
};

export type ChannelDeleted = Event & {
  __typename?: 'ChannelDeleted';
  /**
   * The channel the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type ChannelError = {
  __typename?: 'ChannelError';
  /** The error code. */
  code: ChannelErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of shipping zone IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ChannelErrorCode =
  | 'ALREADY_EXISTS'
  | 'CHANNELS_CURRENCY_MUST_BE_THE_SAME'
  | 'CHANNEL_WITH_ORDERS'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type ChannelStatusChanged = Event & {
  __typename?: 'ChannelStatusChanged';
  /**
   * The channel the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Update a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelUpdate = {
  __typename?: 'ChannelUpdate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelUpdateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry?: InputMaybe<CountryCode>;
  /** isActive flag. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of shipping zones to unassign from the channel. */
  removeShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Slug of the channel. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ChannelUpdated = Event & {
  __typename?: 'ChannelUpdated';
  /**
   * The channel the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  __typename?: 'Checkout';
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  availableCollectionPoints: Array<Warehouse>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /**
   * Shipping methods that can be used with this checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
   */
  availableShippingMethods: Array<ShippingMethod>;
  billingAddress?: Maybe<Address>;
  channel: Channel;
  created: Scalars['DateTime']['output'];
  /**
   * The delivery method selected for this checkout.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  deliveryMethod?: Maybe<DeliveryMethod>;
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']['output']>;
  /** Email of a customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** List of gift cards associated with this checkout. */
  giftCards: Array<GiftCard>;
  id: Scalars['ID']['output'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  /** Checkout language code. */
  languageCode: LanguageCodeEnum;
  lastChange: Scalars['DateTime']['output'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  note: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The number of items purchased. */
  quantity: Scalars['Int']['output'];
  shippingAddress?: Maybe<Address>;
  /**
   * The shipping method related with checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Shipping methods that can be used with this checkout. */
  shippingMethods: Array<ShippingMethod>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice: TaxedMoney;
  /**
   * Date when oldest stock reservation for this checkout expires or null if no stock is reserved.
   *
   * Added in Saleor 3.1.
   */
  stockReservationExpires?: Maybe<Scalars['DateTime']['output']>;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice: TaxedMoney;
  /** The checkout's token. */
  token: Scalars['UUID']['output'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice: TaxedMoney;
  /**
   * List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactions?: Maybe<Array<TransactionItem>>;
  translatedDiscountName?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  voucherCode?: Maybe<Scalars['String']['output']>;
};


/** Checkout object. */
export type CheckoutMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Checkout object. */
export type CheckoutMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Checkout object. */
export type CheckoutPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Checkout object. */
export type CheckoutPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode';
  /** The checkout with the added gift card or voucher. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  __typename?: 'CheckoutComplete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /** Confirmation data used to process additional authorization steps. */
  confirmationData?: Maybe<Scalars['JSONString']['output']>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean']['output'];
  errors: Array<CheckoutError>;
  /** Placed order. */
  order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection';
  edges: Array<CheckoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Checkout;
};

/** Create a new checkout. */
export type CheckoutCreate = {
  __typename?: 'CheckoutCreate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
   */
  created?: Maybe<Scalars['Boolean']['output']>;
  errors: Array<CheckoutError>;
};

export type CheckoutCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Slug of a channel in which to create a checkout. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checkout language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: InputMaybe<AddressInput>;
};

export type CheckoutCreated = Event & {
  __typename?: 'CheckoutCreated';
  /**
   * The checkout the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Sets the customer as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Removes the user assigned as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Updates the delivery method (shipping method or pick up point) of the checkout.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutDeliveryMethodUpdate = {
  __typename?: 'CheckoutDeliveryMethodUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutError = {
  __typename?: 'CheckoutError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: CheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type CheckoutErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHANNEL_INACTIVE'
  | 'CHECKOUT_NOT_FULLY_PAID'
  | 'DELIVERY_METHOD_NOT_APPLICABLE'
  | 'EMAIL_NOT_SET'
  | 'GIFT_CARD_NOT_APPLICABLE'
  | 'GRAPHQL_ERROR'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'INVALID_SHIPPING_METHOD'
  | 'MISSING_CHANNEL_SLUG'
  | 'NOT_FOUND'
  | 'NO_LINES'
  | 'PAYMENT_ERROR'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'QUANTITY_GREATER_THAN_LIMIT'
  | 'REQUIRED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'SHIPPING_NOT_REQUIRED'
  | 'TAX_ERROR'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'UNIQUE'
  | 'VOUCHER_NOT_APPLICABLE'
  | 'ZERO_QUANTITY';

export type CheckoutFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Update language code in the existing checkout. */
export type CheckoutLanguageCodeUpdate = {
  __typename?: 'CheckoutLanguageCodeUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & {
  __typename?: 'CheckoutLine';
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  /** Indicates whether the item need to be delivered. */
  requiresShipping: Scalars['Boolean']['output'];
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice: TaxedMoney;
  /** The sum of the checkout line price, without discounts. */
  undiscountedTotalPrice: Money;
  /** The unit price of the checkout line, without discounts. */
  undiscountedUnitPrice: Money;
  /** The unit price of the checkout line, with taxes and discounts. */
  unitPrice: TaxedMoney;
  variant: ProductVariant;
};

export type CheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection';
  edges: Array<CheckoutLineCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CheckoutLine;
};

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The number of items purchased. */
  quantity: Scalars['Int']['input'];
  /** ID of the product variant. */
  variantId: Scalars['ID']['input'];
};

export type CheckoutLineUpdateInput = {
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** ID of the product variant. */
  variantId: Scalars['ID']['input'];
};

/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
export type CheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Deletes checkout lines. */
export type CheckoutLinesDelete = {
  __typename?: 'CheckoutLinesDelete';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate';
  /** Related checkout object. */
  checkout?: Maybe<Checkout>;
  errors: Array<PaymentError>;
  /** A newly created payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode';
  /** The checkout with the removed gift card or voucher. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Updates the shipping method of the checkout. */
export type CheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate';
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutSortField =
  /** Sort checkouts by creation date. */
  | 'CREATION_DATE'
  /** Sort checkouts by customer. */
  | 'CUSTOMER'
  /** Sort checkouts by payment. */
  | 'PAYMENT';

export type CheckoutSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort checkouts by the selected field. */
  field: CheckoutSortField;
};

export type CheckoutUpdated = Event & {
  __typename?: 'CheckoutUpdated';
  /**
   * The checkout the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type ChoiceValue = {
  __typename?: 'ChoiceValue';
  raw?: Maybe<Scalars['String']['output']>;
  verbose?: Maybe<Scalars['String']['output']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  __typename?: 'Collection';
  backgroundImage?: Maybe<Image>;
  /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of channels in which the collection is available.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  channelListings?: Maybe<Array<CollectionChannelListing>>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of products in this collection. */
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Adds products to a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionAddProducts = {
  __typename?: 'CollectionAddProducts';
  /** Collection to which products will be added. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Deletes collections.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<CollectionError>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  __typename?: 'CollectionChannelListing';
  channel: Channel;
  id: Scalars['ID']['output'];
  isPublished: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The collection publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CollectionChannelListingError = {
  __typename?: 'CollectionChannelListingError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/**
 * Manage collection's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionChannelListingUpdate = {
  __typename?: 'CollectionChannelListingUpdate';
  /** An updated collection instance. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<CollectionChannelListingError>;
  errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection';
  edges: Array<CollectionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

/**
 * Creates a new collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionCreate = {
  __typename?: 'CollectionCreate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionCreateInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of products to be added to the collection. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionCreated = Event & {
  __typename?: 'CollectionCreated';
  /**
   * The collection the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type CollectionCreatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionDelete = {
  __typename?: 'CollectionDelete';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionDeleted = Event & {
  __typename?: 'CollectionDeleted';
  /**
   * The collection the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type CollectionDeletedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionError = {
  __typename?: 'CollectionError';
  /** The error code. */
  code: CollectionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type CollectionErrorCode =
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type CollectionFilterInput = {
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  published?: InputMaybe<CollectionPublished>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionPublished =
  | 'HIDDEN'
  | 'PUBLISHED';

/**
 * Remove products from a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts';
  /** Collection from which products will be removed. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Reorder the products of a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts';
  /** Collection from which products are reordered. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionSortField =
  /**
   * Sort collections by availability.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'AVAILABILITY'
  /** Sort collections by name. */
  | 'NAME'
  /** Sort collections by product count. */
  | 'PRODUCT_COUNT'
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED_AT';

export type CollectionSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  __typename?: 'CollectionTranslatableContent';
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  collection?: Maybe<Collection>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a collection.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CollectionTranslate = {
  __typename?: 'CollectionTranslate';
  collection?: Maybe<Collection>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type CollectionTranslation = Node & {
  __typename?: 'CollectionTranslation';
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionUpdate = {
  __typename?: 'CollectionUpdate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionUpdated = Event & {
  __typename?: 'CollectionUpdated';
  /**
   * The collection the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type CollectionUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  /** Help text for the field. */
  helpText?: Maybe<Scalars['String']['output']>;
  /** Label for the field. */
  label?: Maybe<Scalars['String']['output']>;
  /** Name of the field. */
  name: Scalars['String']['output'];
  /** Type of the field. */
  type?: Maybe<ConfigurationTypeFieldEnum>;
  /** Current value of the field. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String']['input'];
  /** Value of the given field to update. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export type ConfigurationTypeFieldEnum =
  | 'BOOLEAN'
  | 'MULTILINE'
  | 'OUTPUT'
  | 'PASSWORD'
  | 'SECRET'
  | 'SECRETMULTILINE'
  | 'STRING';

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  __typename?: 'ConfirmAccount';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An activated user account. */
  user?: Maybe<User>;
};

/**
 * Confirm the email change of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type ConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance with a new email. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'EU'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type CountryDisplay = {
  __typename?: 'CountryDisplay';
  /** Country code. */
  code: Scalars['String']['output'];
  /** Country name. */
  country: Scalars['String']['output'];
  /** Country tax. */
  vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
  /** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
  attachedToShippingZones?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Create JWT token. */
export type CreateToken = {
  __typename?: 'CreateToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  /** Card brand. */
  brand: Scalars['String']['output'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth?: Maybe<Scalars['Int']['output']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear?: Maybe<Scalars['Int']['output']>;
  /** First 4 digits of the card number. */
  firstDigits?: Maybe<Scalars['String']['output']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String']['output'];
};

/**
 * Deletes customers.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AccountError>;
};

/**
 * Creates a new customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerCreate = {
  __typename?: 'CustomerCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerCreated = Event & {
  __typename?: 'CustomerCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The user the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerDelete = {
  __typename?: 'CustomerDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  __typename?: 'CustomerEvent';
  /** App that performed the action. */
  app?: Maybe<App>;
  /** Number of objects concerned by the event. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']['output']>;
  /** The concerned order. */
  order?: Maybe<Order>;
  /** The concerned order line. */
  orderLine?: Maybe<OrderLine>;
  /** Customer event type. */
  type?: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type CustomerEventsEnum =
  | 'ACCOUNT_CREATED'
  | 'CUSTOMER_DELETED'
  | 'DIGITAL_LINK_DOWNLOADED'
  | 'EMAIL_ASSIGNED'
  | 'EMAIL_CHANGED'
  | 'EMAIL_CHANGED_REQUEST'
  | 'NAME_ASSIGNED'
  | 'NOTE_ADDED'
  | 'NOTE_ADDED_TO_ORDER'
  | 'PASSWORD_CHANGED'
  | 'PASSWORD_RESET'
  | 'PASSWORD_RESET_LINK_SENT'
  | 'PLACED_ORDER';

export type CustomerFilterInput = {
  dateJoined?: InputMaybe<DateRangeInput>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates an existing customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerUpdate = {
  __typename?: 'CustomerUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerUpdated = Event & {
  __typename?: 'CustomerUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The user the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type DateRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Deactivate all JWT tokens of the currently authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type DeleteMetadata = {
  __typename?: 'DeleteMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type DeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/**
 * Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type DeliveryMethod = ShippingMethod | Warehouse;

export type DigitalContent = Node & ObjectWithMetadata & {
  __typename?: 'DigitalContent';
  automaticFulfillment: Scalars['Boolean']['output'];
  contentFile: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxDownloads?: Maybe<Scalars['Int']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Product variant assigned to digital content. */
  productVariant: ProductVariant;
  urlValidDays?: Maybe<Scalars['Int']['output']>;
  /** List of URLs for the digital variant. */
  urls?: Maybe<Array<DigitalContentUrl>>;
  useDefaultSettings: Scalars['Boolean']['output'];
};


export type DigitalContentMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type DigitalContentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type DigitalContentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type DigitalContentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection';
  edges: Array<DigitalContentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DigitalContent;
};

/**
 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentCreate = {
  __typename?: 'DigitalContentCreate';
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

/**
 * Remove digital content assigned to given variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentDelete = {
  __typename?: 'DigitalContentDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']['input'];
};

/**
 * Update digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate';
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload']['input'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']['input'];
};

export type DigitalContentUrl = Node & {
  __typename?: 'DigitalContentUrl';
  content: DigitalContent;
  created: Scalars['DateTime']['output'];
  downloadNum: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** UUID of digital content. */
  token: Scalars['UUID']['output'];
  /** URL for digital content. */
  url?: Maybe<Scalars['String']['output']>;
};

/**
 * Generate new URL to digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate';
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID']['input'];
};

export type DiscountError = {
  __typename?: 'DiscountError';
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: DiscountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type DiscountErrorCode =
  | 'ALREADY_EXISTS'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type DiscountStatusEnum =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'SCHEDULED';

export type DiscountValueTypeEnum =
  | 'FIXED'
  | 'PERCENTAGE';

/** An enumeration. */
export type DistanceUnitsEnum =
  | 'CM'
  | 'FT'
  | 'INCH'
  | 'KM'
  | 'M'
  | 'YD';

/** Represents shop's domain. */
export type Domain = {
  __typename?: 'Domain';
  /** The host name of the domain. */
  host: Scalars['String']['output'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean']['output'];
  /** Shop's absolute URL. */
  url: Scalars['String']['output'];
};

/**
 * Deletes draft orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Completes creating an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderComplete = {
  __typename?: 'DraftOrderComplete';
  errors: Array<OrderError>;
  /** Completed order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Creates a new draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderCreate = {
  __typename?: 'DraftOrderCreate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars['ID']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<OrderLineCreateInput>>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars['ID']['input']>;
};

export type DraftOrderCreated = Event & {
  __typename?: 'DraftOrderCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderDelete = {
  __typename?: 'DraftOrderDelete';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderDeleted = Event & {
  __typename?: 'DraftOrderDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars['ID']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Deletes order lines.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Updates a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderUpdated = Event & {
  __typename?: 'DraftOrderUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Event delivery. */
export type EventDelivery = Node & {
  __typename?: 'EventDelivery';
  /** Event delivery attempts. */
  attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
  createdAt: Scalars['DateTime']['output'];
  /** Webhook event type. */
  eventType: WebhookEventTypeEnum;
  id: Scalars['ID']['output'];
  /** Event payload. */
  payload?: Maybe<Scalars['String']['output']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
};


/** Event delivery. */
export type EventDeliveryAttemptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
};

/** Event delivery attempts. */
export type EventDeliveryAttempt = Node & {
  __typename?: 'EventDeliveryAttempt';
  /** Event delivery creation date and time. */
  createdAt: Scalars['DateTime']['output'];
  /** Delivery attempt duration. */
  duration?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  /** Request headers for delivery attempt. */
  requestHeaders?: Maybe<Scalars['String']['output']>;
  /** Delivery attempt response content. */
  response?: Maybe<Scalars['String']['output']>;
  /** Response headers for delivery attempt. */
  responseHeaders?: Maybe<Scalars['String']['output']>;
  /** Delivery attempt response status code. */
  responseStatusCode?: Maybe<Scalars['Int']['output']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
  /** Task id for delivery attempt. */
  taskId?: Maybe<Scalars['String']['output']>;
};

export type EventDeliveryAttemptCountableConnection = {
  __typename?: 'EventDeliveryAttemptCountableConnection';
  edges: Array<EventDeliveryAttemptCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventDeliveryAttemptCountableEdge = {
  __typename?: 'EventDeliveryAttemptCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EventDeliveryAttempt;
};

export type EventDeliveryAttemptSortField =
  /** Sort event delivery attempts by created at. */
  | 'CREATED_AT';

export type EventDeliveryAttemptSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attempts by the selected field. */
  field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
  __typename?: 'EventDeliveryCountableConnection';
  edges: Array<EventDeliveryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventDeliveryCountableEdge = {
  __typename?: 'EventDeliveryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EventDelivery;
};

export type EventDeliveryFilterInput = {
  eventType?: InputMaybe<WebhookEventTypeEnum>;
  status?: InputMaybe<EventDeliveryStatusEnum>;
};

/**
 * Retries event delivery.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type EventDeliveryRetry = {
  __typename?: 'EventDeliveryRetry';
  /** Event delivery. */
  delivery?: Maybe<EventDelivery>;
  errors: Array<WebhookError>;
};

export type EventDeliverySortField =
  /** Sort event deliveries by created at. */
  | 'CREATED_AT';

export type EventDeliverySortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort deliveries by the selected field. */
  field: EventDeliverySortField;
};

export type EventDeliveryStatusEnum =
  | 'FAILED'
  | 'PENDING'
  | 'SUCCESS';

export type ExportError = {
  __typename?: 'ExportError';
  /** The error code. */
  code: ExportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ExportErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** History log of export file. */
export type ExportEvent = Node & {
  __typename?: 'ExportEvent';
  /** App which performed the action. Requires one of the following permissions: OWNER, MANAGE_APPS. */
  app?: Maybe<App>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message: Scalars['String']['output'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. Requires one of the following permissions: OWNER, MANAGE_STAFF. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type ExportEventsEnum =
  | 'EXPORTED_FILE_SENT'
  | 'EXPORT_DELETED'
  | 'EXPORT_FAILED'
  | 'EXPORT_FAILED_INFO_SENT'
  | 'EXPORT_PENDING'
  | 'EXPORT_SUCCESS';

/** Represents a job data of exported file. */
export type ExportFile = Job & Node & {
  __typename?: 'ExportFile';
  app?: Maybe<App>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** List of events associated with the export. */
  events?: Maybe<Array<ExportEvent>>;
  id: Scalars['ID']['output'];
  /** Job message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
  /** The URL of field to download. */
  url?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ExportFileCountableConnection = {
  __typename?: 'ExportFileCountableConnection';
  edges: Array<ExportFileCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ExportFileCountableEdge = {
  __typename?: 'ExportFileCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExportFile;
};

export type ExportFileFilterInput = {
  app?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<JobStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type ExportFileSortField =
  | 'CREATED_AT'
  | 'LAST_MODIFIED_AT'
  | 'STATUS'
  | 'UPDATED_AT';

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
};

/**
 * Export gift cards to csv file.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type ExportGiftCards = {
  __typename?: 'ExportGiftCards';
  errors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportGiftCardsInput = {
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for gift cards. */
  filter?: InputMaybe<GiftCardFilterInput>;
  /** List of gift cards IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determine which gift cards should be exported. */
  scope: ExportScope;
};

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of channels ids which should be exported. */
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of product fields witch should be exported. */
  fields?: InputMaybe<Array<ProductFieldEnum>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Export products to csv file.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ExportProducts = {
  __typename?: 'ExportProducts';
  errors: Array<ExportError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
  /** Input with info about fields which should be exported. */
  exportInfo?: InputMaybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for products. */
  filter?: InputMaybe<ProductFilterInput>;
  /** List of products IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determine which products should be exported. */
  scope: ExportScope;
};

export type ExportScope =
  /** Export all products. */
  | 'ALL'
  /** Export the filtered products. */
  | 'FILTER'
  /** Export products with given ids. */
  | 'IDS';

export type ExternalAuthentication = {
  __typename?: 'ExternalAuthentication';
  /** ID of external authentication plugin. */
  id: Scalars['String']['output'];
  /** Name of external authentication plugin. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Prepare external authentication url for user by custom plugin. */
export type ExternalAuthenticationUrl = {
  __typename?: 'ExternalAuthenticationUrl';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** The data returned by authentication plugin. */
  authenticationData?: Maybe<Scalars['JSONString']['output']>;
  errors: Array<AccountError>;
};

/** Logout user by custom plugin. */
export type ExternalLogout = {
  __typename?: 'ExternalLogout';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** The data returned by authentication plugin. */
  logoutData?: Maybe<Scalars['JSONString']['output']>;
};

export type ExternalNotificationError = {
  __typename?: 'ExternalNotificationError';
  /** The error code. */
  code: ExternalNotificationErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ExternalNotificationErrorCodes =
  | 'CHANNEL_INACTIVE'
  | 'INVALID_MODEL_TYPE'
  | 'NOT_FOUND'
  | 'REQUIRED';

/**
 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
 *
 * Added in Saleor 3.1.
 */
export type ExternalNotificationTrigger = {
  __typename?: 'ExternalNotificationTrigger';
  errors: Array<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
  /** External event type. This field is passed to a plugin as an event type. */
  externalEventType: Scalars['String']['input'];
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  extraPayload?: InputMaybe<Scalars['JSONString']['input']>;
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  ids: Array<Scalars['ID']['input']>;
};

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
  __typename?: 'ExternalObtainAccessTokens';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
  __typename?: 'ExternalRefresh';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
  __typename?: 'ExternalVerify';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Determine if authentication data is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** User assigned to data. */
  user?: Maybe<User>;
  /** External data. */
  verifyData?: Maybe<Scalars['JSONString']['output']>;
};

export type File = {
  __typename?: 'File';
  /** Content type of the file. */
  contentType?: Maybe<Scalars['String']['output']>;
  /** The URL of the file. */
  url: Scalars['String']['output'];
};

/** An enumeration. */
export type FileTypesEnum =
  | 'CSV'
  | 'XLSX';

/**
 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
 */
export type FileUpload = {
  __typename?: 'FileUpload';
  errors: Array<UploadError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<UploadError>;
  uploadedFile?: Maybe<File>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  __typename?: 'Fulfillment';
  created: Scalars['DateTime']['output'];
  fulfillmentOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** List of lines for the fulfillment. */
  lines?: Maybe<Array<FulfillmentLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  status: FulfillmentStatus;
  /** User-friendly fulfillment status. */
  statusDisplay?: Maybe<Scalars['String']['output']>;
  trackingNumber: Scalars['String']['output'];
  /** Warehouse from fulfillment was fulfilled. */
  warehouse?: Maybe<Warehouse>;
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Approve existing fulfillment.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentApprove = {
  __typename?: 'FulfillmentApprove';
  errors: Array<OrderError>;
  /** An approved fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was approved. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Cancels existing fulfillment and optionally restocks items.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentCancel = {
  __typename?: 'FulfillmentCancel';
  errors: Array<OrderError>;
  /** A canceled fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type FulfillmentCanceled = Event & {
  __typename?: 'FulfillmentCanceled';
  /**
   * The fulfillment the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the fulfillment belongs to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type FulfillmentCreated = Event & {
  __typename?: 'FulfillmentCreated';
  /**
   * The fulfillment the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the fulfillment belongs to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  __typename?: 'FulfillmentLine';
  id: Scalars['ID']['output'];
  orderLine?: Maybe<OrderLine>;
  quantity: Scalars['Int']['output'];
};

/**
 * Refund products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentRefundProducts = {
  __typename?: 'FulfillmentRefundProducts';
  errors: Array<OrderError>;
  /** A refunded fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was refunded. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Return products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentReturnProducts = {
  __typename?: 'FulfillmentReturnProducts';
  errors: Array<OrderError>;
  /** Order which fulfillment was returned. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** A replace fulfillment. */
  replaceFulfillment?: Maybe<Fulfillment>;
  /** A draft order which was created for products with replace flag. */
  replaceOrder?: Maybe<Order>;
  /** A return fulfillment. */
  returnFulfillment?: Maybe<Fulfillment>;
};

/** An enumeration. */
export type FulfillmentStatus =
  | 'CANCELED'
  | 'FULFILLED'
  | 'REFUNDED'
  | 'REFUNDED_AND_RETURNED'
  | 'REPLACED'
  | 'RETURNED'
  | 'WAITING_FOR_APPROVAL';

/**
 * Updates a fulfillment for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking';
  errors: Array<OrderError>;
  /** A fulfillment with updated tracking. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fulfillment tracking number. */
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  __typename?: 'GatewayConfigLine';
  /** Gateway config key. */
  field: Scalars['String']['output'];
  /** Gateway config value for key. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & ObjectWithMetadata & {
  __typename?: 'GiftCard';
  /**
   * App which created the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  app?: Maybe<App>;
  /**
   * Slug of the channel where the gift card was bought.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  boughtInChannel?: Maybe<Scalars['String']['output']>;
  /** Gift card code. Can be fetched by a staff member with MANAGE_GIFT_CARD when gift card wasn't yet used and by the gift card owner. */
  code: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  /**
   * The user who bought or issued a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  createdBy?: Maybe<User>;
  /**
   * Email address of the user who bought or issued gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  createdByEmail?: Maybe<Scalars['String']['output']>;
  currentBalance?: Maybe<Money>;
  /** Code in format which allows displaying in a user interface. */
  displayCode: Scalars['String']['output'];
  /**
   * End date of gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
   */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * List of events associated with the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  events: Array<GiftCardEvent>;
  expiryDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  initialBalance?: Maybe<Money>;
  isActive: Scalars['Boolean']['output'];
  /** Last 4 characters of gift card code. */
  last4CodeChars: Scalars['String']['output'];
  lastUsedOn?: Maybe<Scalars['DateTime']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Related gift card product.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  product?: Maybe<Product>;
  /**
   * Start date of gift card.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The gift card tag.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  tags: Array<GiftCardTag>;
  /**
   * The customer who used a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  usedBy?: Maybe<User>;
  /**
   * Email address of the customer who used a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  usedByEmail?: Maybe<Scalars['String']['output']>;
  /**
   * The customer who bought a gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
   */
  user?: Maybe<User>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardEventsArgs = {
  filter?: InputMaybe<GiftCardEventFilterInput>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Activate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardActivate = {
  __typename?: 'GiftCardActivate';
  errors: Array<GiftCardError>;
  /** Activated gift card. */
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/**
 * Adds note to the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardAddNote = {
  __typename?: 'GiftCardAddNote';
  errors: Array<GiftCardError>;
  /** Gift card note created. */
  event?: Maybe<GiftCardEvent>;
  /** Gift card with the note added. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardAddNoteInput = {
  /** Note message. */
  message: Scalars['String']['input'];
};

/**
 * Activate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkActivate = {
  __typename?: 'GiftCardBulkActivate';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
};

/**
 * Create gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkCreate = {
  __typename?: 'GiftCardBulkCreate';
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
  /** List of created gift cards. */
  giftCards: Array<GiftCard>;
};

export type GiftCardBulkCreateInput = {
  /** Balance of the gift card. */
  balance: PriceInput;
  /** The number of cards to issue. */
  count: Scalars['Int']['input'];
  /** The gift card expiry date. */
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /** Determine if gift card is active. */
  isActive: Scalars['Boolean']['input'];
  /** The gift card tags. */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Deactivate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDeactivate = {
  __typename?: 'GiftCardBulkDeactivate';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
};

/**
 * Delete gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDelete = {
  __typename?: 'GiftCardBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection';
  edges: Array<GiftCardCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GiftCard;
};

/**
 * Creates a new gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardCreate = {
  __typename?: 'GiftCardCreate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCreateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Balance of the gift card. */
  balance: PriceInput;
  /**
   * Slug of a channel from which the email should be sent.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  code?: InputMaybe<Scalars['String']['input']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Determine if gift card is active.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  isActive: Scalars['Boolean']['input'];
  /**
   * The gift card note from the staff member.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** Email of the customer to whom gift card will be sent. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

export type GiftCardCreated = Event & {
  __typename?: 'GiftCardCreated';
  /**
   * The gift card the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deactivate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate';
  errors: Array<GiftCardError>;
  /** Deactivated gift card. */
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/**
 * Delete gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDelete = {
  __typename?: 'GiftCardDelete';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardDeleted = Event & {
  __typename?: 'GiftCardDeleted';
  /**
   * The gift card the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type GiftCardError = {
  __typename?: 'GiftCardError';
  /** The error code. */
  code: GiftCardErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of tag values that cause the error. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

/** An enumeration. */
export type GiftCardErrorCode =
  | 'ALREADY_EXISTS'
  | 'DUPLICATED_INPUT_ITEM'
  | 'EXPIRED_GIFT_CARD'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/**
 * History log of the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardEvent = Node & {
  __typename?: 'GiftCardEvent';
  /** App that performed the action. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  app?: Maybe<App>;
  /** The gift card balance. */
  balance?: Maybe<GiftCardEventBalance>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']['output']>;
  /** Previous gift card expiry date. */
  oldExpiryDate?: Maybe<Scalars['Date']['output']>;
  /** The list of old gift card tags. */
  oldTags?: Maybe<Array<Scalars['String']['output']>>;
  /** The order ID where gift card was used or bought. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** User-friendly number of an order where gift card was used or bought. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** The list of gift card tags. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
  /** Gift card event type. */
  type?: Maybe<GiftCardEventsEnum>;
  /** User who performed the action. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user?: Maybe<User>;
};

export type GiftCardEventBalance = {
  __typename?: 'GiftCardEventBalance';
  /** Current balance of the gift card. */
  currentBalance: Money;
  /** Initial balance of the gift card. */
  initialBalance?: Maybe<Money>;
  /** Previous current balance of the gift card. */
  oldCurrentBalance?: Maybe<Money>;
  /** Previous initial balance of the gift card. */
  oldInitialBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
  orders?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<GiftCardEventsEnum>;
};

/** An enumeration. */
export type GiftCardEventsEnum =
  | 'ACTIVATED'
  | 'BALANCE_RESET'
  | 'BOUGHT'
  | 'DEACTIVATED'
  | 'EXPIRY_DATE_UPDATED'
  | 'ISSUED'
  | 'NOTE_ADDED'
  | 'RESENT'
  | 'SENT_TO_CUSTOMER'
  | 'TAGS_UPDATED'
  | 'UPDATED'
  | 'USED_IN_ORDER';

export type GiftCardFilterInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currentBalance?: InputMaybe<PriceRangeInput>;
  initialBalance?: InputMaybe<PriceRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  usedBy?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Resend a gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardResend = {
  __typename?: 'GiftCardResend';
  errors: Array<GiftCardError>;
  /** Gift card which has been sent. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardResendInput = {
  /** Slug of a channel from which the email should be sent. */
  channel: Scalars['String']['input'];
  /** Email to which gift card should be send. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ID of a gift card to resend. */
  id: Scalars['ID']['input'];
};

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
  __typename?: 'GiftCardSettings';
  /** The gift card expiry period settings. */
  expiryPeriod?: Maybe<TimePeriod>;
  /** The gift card expiry type settings. */
  expiryType: GiftCardSettingsExpiryTypeEnum;
};

export type GiftCardSettingsError = {
  __typename?: 'GiftCardSettingsError';
  /** The error code. */
  code: GiftCardSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type GiftCardSettingsErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'REQUIRED';

/** An enumeration. */
export type GiftCardSettingsExpiryTypeEnum =
  | 'EXPIRY_PERIOD'
  | 'NEVER_EXPIRE';

/**
 * Update gift card settings.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardSettingsUpdate = {
  __typename?: 'GiftCardSettingsUpdate';
  errors: Array<GiftCardSettingsError>;
  /** Gift card settings. */
  giftCardSettings?: Maybe<GiftCardSettings>;
};

export type GiftCardSettingsUpdateInput = {
  /** Defines gift card expiry period. */
  expiryPeriod?: InputMaybe<TimePeriodInputType>;
  /** Defines gift card default expiry settings. */
  expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
};

export type GiftCardSortField =
  /** Sort orders by current balance. */
  | 'CURRENT_BALANCE'
  /** Sort orders by product. */
  | 'PRODUCT'
  /** Sort orders by used by. */
  | 'USED_BY';

export type GiftCardSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort gift cards by the selected field. */
  field: GiftCardSortField;
};

export type GiftCardStatusChanged = Event & {
  __typename?: 'GiftCardStatusChanged';
  /**
   * The gift card the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * The gift card tag.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardTag = Node & {
  __typename?: 'GiftCardTag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GiftCardTagCountableConnection = {
  __typename?: 'GiftCardTagCountableConnection';
  edges: Array<GiftCardTagCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardTagCountableEdge = {
  __typename?: 'GiftCardTagCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GiftCardTag;
};

export type GiftCardTagFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Update a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardUpdate = {
  __typename?: 'GiftCardUpdate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardUpdateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The gift card balance amount.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  balanceAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card tags to remove.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type GiftCardUpdated = Event & {
  __typename?: 'GiftCardUpdated';
  /**
   * The gift card the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents permission group data. */
export type Group = Node & {
  __typename?: 'Group';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** List of group permissions */
  permissions?: Maybe<Array<Permission>>;
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean']['output'];
  /**
   * List of group users
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  users?: Maybe<Array<User>>;
};

export type GroupCountableConnection = {
  __typename?: 'GroupCountableConnection';
  edges: Array<GroupCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GroupCountableEdge = {
  __typename?: 'GroupCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Group;
};

/** Represents an image. */
export type Image = {
  __typename?: 'Image';
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an Invoice. */
export type Invoice = Job & Node & ObjectWithMetadata & {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime']['output'];
  externalUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime']['output'];
  /** URL to download an invoice. */
  url?: Maybe<Scalars['String']['output']>;
};


/** Represents an Invoice. */
export type InvoiceMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an Invoice. */
export type InvoiceMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Creates a ready to send invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceCreate = {
  __typename?: 'InvoiceCreate';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String']['input'];
  /** URL of an invoice to download. */
  url: Scalars['String']['input'];
};

/**
 * Deletes an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceDelete = {
  __typename?: 'InvoiceDelete';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceDeleted = Event & {
  __typename?: 'InvoiceDeleted';
  /**
   * The invoice the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  invoice?: Maybe<Invoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type InvoiceError = {
  __typename?: 'InvoiceError';
  /** The error code. */
  code: InvoiceErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type InvoiceErrorCode =
  | 'EMAIL_NOT_SET'
  | 'INVALID_STATUS'
  | 'NOT_FOUND'
  | 'NOT_READY'
  | 'NO_INVOICE_PLUGIN'
  | 'NUMBER_NOT_SET'
  | 'REQUIRED'
  | 'URL_NOT_SET';

/**
 * Request an invoice for the order using plugin.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequest = {
  __typename?: 'InvoiceRequest';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  /** Order related to an invoice. */
  order?: Maybe<Order>;
};

/**
 * Requests deletion of an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequestDelete = {
  __typename?: 'InvoiceRequestDelete';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceRequested = Event & {
  __typename?: 'InvoiceRequested';
  /**
   * The invoice the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  invoice?: Maybe<Invoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Send an invoice notification to the customer.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceSendNotification = {
  __typename?: 'InvoiceSendNotification';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceSent = Event & {
  __typename?: 'InvoiceSent';
  /**
   * The invoice the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  invoice?: Maybe<Invoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceUpdate = {
  __typename?: 'InvoiceUpdate';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type IssuingPrincipal = App | User;

export type Job = {
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** Job message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
};

/** An enumeration. */
export type JobStatusEnum =
  | 'DELETED'
  | 'FAILED'
  | 'PENDING'
  | 'SUCCESS';

/** An enumeration. */
export type LanguageCodeEnum =
  | 'AF'
  | 'AF_NA'
  | 'AF_ZA'
  | 'AGQ'
  | 'AGQ_CM'
  | 'AK'
  | 'AK_GH'
  | 'AM'
  | 'AM_ET'
  | 'AR'
  | 'AR_AE'
  | 'AR_BH'
  | 'AR_DJ'
  | 'AR_DZ'
  | 'AR_EG'
  | 'AR_EH'
  | 'AR_ER'
  | 'AR_IL'
  | 'AR_IQ'
  | 'AR_JO'
  | 'AR_KM'
  | 'AR_KW'
  | 'AR_LB'
  | 'AR_LY'
  | 'AR_MA'
  | 'AR_MR'
  | 'AR_OM'
  | 'AR_PS'
  | 'AR_QA'
  | 'AR_SA'
  | 'AR_SD'
  | 'AR_SO'
  | 'AR_SS'
  | 'AR_SY'
  | 'AR_TD'
  | 'AR_TN'
  | 'AR_YE'
  | 'AS'
  | 'ASA'
  | 'ASA_TZ'
  | 'AST'
  | 'AST_ES'
  | 'AS_IN'
  | 'AZ'
  | 'AZ_CYRL'
  | 'AZ_CYRL_AZ'
  | 'AZ_LATN'
  | 'AZ_LATN_AZ'
  | 'BAS'
  | 'BAS_CM'
  | 'BE'
  | 'BEM'
  | 'BEM_ZM'
  | 'BEZ'
  | 'BEZ_TZ'
  | 'BE_BY'
  | 'BG'
  | 'BG_BG'
  | 'BM'
  | 'BM_ML'
  | 'BN'
  | 'BN_BD'
  | 'BN_IN'
  | 'BO'
  | 'BO_CN'
  | 'BO_IN'
  | 'BR'
  | 'BRX'
  | 'BRX_IN'
  | 'BR_FR'
  | 'BS'
  | 'BS_CYRL'
  | 'BS_CYRL_BA'
  | 'BS_LATN'
  | 'BS_LATN_BA'
  | 'CA'
  | 'CA_AD'
  | 'CA_ES'
  | 'CA_ES_VALENCIA'
  | 'CA_FR'
  | 'CA_IT'
  | 'CCP'
  | 'CCP_BD'
  | 'CCP_IN'
  | 'CE'
  | 'CEB'
  | 'CEB_PH'
  | 'CE_RU'
  | 'CGG'
  | 'CGG_UG'
  | 'CHR'
  | 'CHR_US'
  | 'CKB'
  | 'CKB_IQ'
  | 'CKB_IR'
  | 'CS'
  | 'CS_CZ'
  | 'CU'
  | 'CU_RU'
  | 'CY'
  | 'CY_GB'
  | 'DA'
  | 'DAV'
  | 'DAV_KE'
  | 'DA_DK'
  | 'DA_GL'
  | 'DE'
  | 'DE_AT'
  | 'DE_BE'
  | 'DE_CH'
  | 'DE_DE'
  | 'DE_IT'
  | 'DE_LI'
  | 'DE_LU'
  | 'DJE'
  | 'DJE_NE'
  | 'DSB'
  | 'DSB_DE'
  | 'DUA'
  | 'DUA_CM'
  | 'DYO'
  | 'DYO_SN'
  | 'DZ'
  | 'DZ_BT'
  | 'EBU'
  | 'EBU_KE'
  | 'EE'
  | 'EE_GH'
  | 'EE_TG'
  | 'EL'
  | 'EL_CY'
  | 'EL_GR'
  | 'EN'
  | 'EN_AE'
  | 'EN_AG'
  | 'EN_AI'
  | 'EN_AS'
  | 'EN_AT'
  | 'EN_AU'
  | 'EN_BB'
  | 'EN_BE'
  | 'EN_BI'
  | 'EN_BM'
  | 'EN_BS'
  | 'EN_BW'
  | 'EN_BZ'
  | 'EN_CA'
  | 'EN_CC'
  | 'EN_CH'
  | 'EN_CK'
  | 'EN_CM'
  | 'EN_CX'
  | 'EN_CY'
  | 'EN_DE'
  | 'EN_DG'
  | 'EN_DK'
  | 'EN_DM'
  | 'EN_ER'
  | 'EN_FI'
  | 'EN_FJ'
  | 'EN_FK'
  | 'EN_FM'
  | 'EN_GB'
  | 'EN_GD'
  | 'EN_GG'
  | 'EN_GH'
  | 'EN_GI'
  | 'EN_GM'
  | 'EN_GU'
  | 'EN_GY'
  | 'EN_HK'
  | 'EN_IE'
  | 'EN_IL'
  | 'EN_IM'
  | 'EN_IN'
  | 'EN_IO'
  | 'EN_JE'
  | 'EN_JM'
  | 'EN_KE'
  | 'EN_KI'
  | 'EN_KN'
  | 'EN_KY'
  | 'EN_LC'
  | 'EN_LR'
  | 'EN_LS'
  | 'EN_MG'
  | 'EN_MH'
  | 'EN_MO'
  | 'EN_MP'
  | 'EN_MS'
  | 'EN_MT'
  | 'EN_MU'
  | 'EN_MW'
  | 'EN_MY'
  | 'EN_NA'
  | 'EN_NF'
  | 'EN_NG'
  | 'EN_NL'
  | 'EN_NR'
  | 'EN_NU'
  | 'EN_NZ'
  | 'EN_PG'
  | 'EN_PH'
  | 'EN_PK'
  | 'EN_PN'
  | 'EN_PR'
  | 'EN_PW'
  | 'EN_RW'
  | 'EN_SB'
  | 'EN_SC'
  | 'EN_SD'
  | 'EN_SE'
  | 'EN_SG'
  | 'EN_SH'
  | 'EN_SI'
  | 'EN_SL'
  | 'EN_SS'
  | 'EN_SX'
  | 'EN_SZ'
  | 'EN_TC'
  | 'EN_TK'
  | 'EN_TO'
  | 'EN_TT'
  | 'EN_TV'
  | 'EN_TZ'
  | 'EN_UG'
  | 'EN_UM'
  | 'EN_US'
  | 'EN_VC'
  | 'EN_VG'
  | 'EN_VI'
  | 'EN_VU'
  | 'EN_WS'
  | 'EN_ZA'
  | 'EN_ZM'
  | 'EN_ZW'
  | 'EO'
  | 'ES'
  | 'ES_AR'
  | 'ES_BO'
  | 'ES_BR'
  | 'ES_BZ'
  | 'ES_CL'
  | 'ES_CO'
  | 'ES_CR'
  | 'ES_CU'
  | 'ES_DO'
  | 'ES_EA'
  | 'ES_EC'
  | 'ES_ES'
  | 'ES_GQ'
  | 'ES_GT'
  | 'ES_HN'
  | 'ES_IC'
  | 'ES_MX'
  | 'ES_NI'
  | 'ES_PA'
  | 'ES_PE'
  | 'ES_PH'
  | 'ES_PR'
  | 'ES_PY'
  | 'ES_SV'
  | 'ES_US'
  | 'ES_UY'
  | 'ES_VE'
  | 'ET'
  | 'ET_EE'
  | 'EU'
  | 'EU_ES'
  | 'EWO'
  | 'EWO_CM'
  | 'FA'
  | 'FA_AF'
  | 'FA_IR'
  | 'FF'
  | 'FF_ADLM'
  | 'FF_ADLM_BF'
  | 'FF_ADLM_CM'
  | 'FF_ADLM_GH'
  | 'FF_ADLM_GM'
  | 'FF_ADLM_GN'
  | 'FF_ADLM_GW'
  | 'FF_ADLM_LR'
  | 'FF_ADLM_MR'
  | 'FF_ADLM_NE'
  | 'FF_ADLM_NG'
  | 'FF_ADLM_SL'
  | 'FF_ADLM_SN'
  | 'FF_LATN'
  | 'FF_LATN_BF'
  | 'FF_LATN_CM'
  | 'FF_LATN_GH'
  | 'FF_LATN_GM'
  | 'FF_LATN_GN'
  | 'FF_LATN_GW'
  | 'FF_LATN_LR'
  | 'FF_LATN_MR'
  | 'FF_LATN_NE'
  | 'FF_LATN_NG'
  | 'FF_LATN_SL'
  | 'FF_LATN_SN'
  | 'FI'
  | 'FIL'
  | 'FIL_PH'
  | 'FI_FI'
  | 'FO'
  | 'FO_DK'
  | 'FO_FO'
  | 'FR'
  | 'FR_BE'
  | 'FR_BF'
  | 'FR_BI'
  | 'FR_BJ'
  | 'FR_BL'
  | 'FR_CA'
  | 'FR_CD'
  | 'FR_CF'
  | 'FR_CG'
  | 'FR_CH'
  | 'FR_CI'
  | 'FR_CM'
  | 'FR_DJ'
  | 'FR_DZ'
  | 'FR_FR'
  | 'FR_GA'
  | 'FR_GF'
  | 'FR_GN'
  | 'FR_GP'
  | 'FR_GQ'
  | 'FR_HT'
  | 'FR_KM'
  | 'FR_LU'
  | 'FR_MA'
  | 'FR_MC'
  | 'FR_MF'
  | 'FR_MG'
  | 'FR_ML'
  | 'FR_MQ'
  | 'FR_MR'
  | 'FR_MU'
  | 'FR_NC'
  | 'FR_NE'
  | 'FR_PF'
  | 'FR_PM'
  | 'FR_RE'
  | 'FR_RW'
  | 'FR_SC'
  | 'FR_SN'
  | 'FR_SY'
  | 'FR_TD'
  | 'FR_TG'
  | 'FR_TN'
  | 'FR_VU'
  | 'FR_WF'
  | 'FR_YT'
  | 'FUR'
  | 'FUR_IT'
  | 'FY'
  | 'FY_NL'
  | 'GA'
  | 'GA_GB'
  | 'GA_IE'
  | 'GD'
  | 'GD_GB'
  | 'GL'
  | 'GL_ES'
  | 'GSW'
  | 'GSW_CH'
  | 'GSW_FR'
  | 'GSW_LI'
  | 'GU'
  | 'GUZ'
  | 'GUZ_KE'
  | 'GU_IN'
  | 'GV'
  | 'GV_IM'
  | 'HA'
  | 'HAW'
  | 'HAW_US'
  | 'HA_GH'
  | 'HA_NE'
  | 'HA_NG'
  | 'HE'
  | 'HE_IL'
  | 'HI'
  | 'HI_IN'
  | 'HR'
  | 'HR_BA'
  | 'HR_HR'
  | 'HSB'
  | 'HSB_DE'
  | 'HU'
  | 'HU_HU'
  | 'HY'
  | 'HY_AM'
  | 'IA'
  | 'ID'
  | 'ID_ID'
  | 'IG'
  | 'IG_NG'
  | 'II'
  | 'II_CN'
  | 'IS'
  | 'IS_IS'
  | 'IT'
  | 'IT_CH'
  | 'IT_IT'
  | 'IT_SM'
  | 'IT_VA'
  | 'JA'
  | 'JA_JP'
  | 'JGO'
  | 'JGO_CM'
  | 'JMC'
  | 'JMC_TZ'
  | 'JV'
  | 'JV_ID'
  | 'KA'
  | 'KAB'
  | 'KAB_DZ'
  | 'KAM'
  | 'KAM_KE'
  | 'KA_GE'
  | 'KDE'
  | 'KDE_TZ'
  | 'KEA'
  | 'KEA_CV'
  | 'KHQ'
  | 'KHQ_ML'
  | 'KI'
  | 'KI_KE'
  | 'KK'
  | 'KKJ'
  | 'KKJ_CM'
  | 'KK_KZ'
  | 'KL'
  | 'KLN'
  | 'KLN_KE'
  | 'KL_GL'
  | 'KM'
  | 'KM_KH'
  | 'KN'
  | 'KN_IN'
  | 'KO'
  | 'KOK'
  | 'KOK_IN'
  | 'KO_KP'
  | 'KO_KR'
  | 'KS'
  | 'KSB'
  | 'KSB_TZ'
  | 'KSF'
  | 'KSF_CM'
  | 'KSH'
  | 'KSH_DE'
  | 'KS_ARAB'
  | 'KS_ARAB_IN'
  | 'KU'
  | 'KU_TR'
  | 'KW'
  | 'KW_GB'
  | 'KY'
  | 'KY_KG'
  | 'LAG'
  | 'LAG_TZ'
  | 'LB'
  | 'LB_LU'
  | 'LG'
  | 'LG_UG'
  | 'LKT'
  | 'LKT_US'
  | 'LN'
  | 'LN_AO'
  | 'LN_CD'
  | 'LN_CF'
  | 'LN_CG'
  | 'LO'
  | 'LO_LA'
  | 'LRC'
  | 'LRC_IQ'
  | 'LRC_IR'
  | 'LT'
  | 'LT_LT'
  | 'LU'
  | 'LUO'
  | 'LUO_KE'
  | 'LUY'
  | 'LUY_KE'
  | 'LU_CD'
  | 'LV'
  | 'LV_LV'
  | 'MAI'
  | 'MAI_IN'
  | 'MAS'
  | 'MAS_KE'
  | 'MAS_TZ'
  | 'MER'
  | 'MER_KE'
  | 'MFE'
  | 'MFE_MU'
  | 'MG'
  | 'MGH'
  | 'MGH_MZ'
  | 'MGO'
  | 'MGO_CM'
  | 'MG_MG'
  | 'MI'
  | 'MI_NZ'
  | 'MK'
  | 'MK_MK'
  | 'ML'
  | 'ML_IN'
  | 'MN'
  | 'MNI'
  | 'MNI_BENG'
  | 'MNI_BENG_IN'
  | 'MN_MN'
  | 'MR'
  | 'MR_IN'
  | 'MS'
  | 'MS_BN'
  | 'MS_ID'
  | 'MS_MY'
  | 'MS_SG'
  | 'MT'
  | 'MT_MT'
  | 'MUA'
  | 'MUA_CM'
  | 'MY'
  | 'MY_MM'
  | 'MZN'
  | 'MZN_IR'
  | 'NAQ'
  | 'NAQ_NA'
  | 'NB'
  | 'NB_NO'
  | 'NB_SJ'
  | 'ND'
  | 'NDS'
  | 'NDS_DE'
  | 'NDS_NL'
  | 'ND_ZW'
  | 'NE'
  | 'NE_IN'
  | 'NE_NP'
  | 'NL'
  | 'NL_AW'
  | 'NL_BE'
  | 'NL_BQ'
  | 'NL_CW'
  | 'NL_NL'
  | 'NL_SR'
  | 'NL_SX'
  | 'NMG'
  | 'NMG_CM'
  | 'NN'
  | 'NNH'
  | 'NNH_CM'
  | 'NN_NO'
  | 'NUS'
  | 'NUS_SS'
  | 'NYN'
  | 'NYN_UG'
  | 'OM'
  | 'OM_ET'
  | 'OM_KE'
  | 'OR'
  | 'OR_IN'
  | 'OS'
  | 'OS_GE'
  | 'OS_RU'
  | 'PA'
  | 'PA_ARAB'
  | 'PA_ARAB_PK'
  | 'PA_GURU'
  | 'PA_GURU_IN'
  | 'PCM'
  | 'PCM_NG'
  | 'PL'
  | 'PL_PL'
  | 'PRG'
  | 'PS'
  | 'PS_AF'
  | 'PS_PK'
  | 'PT'
  | 'PT_AO'
  | 'PT_BR'
  | 'PT_CH'
  | 'PT_CV'
  | 'PT_GQ'
  | 'PT_GW'
  | 'PT_LU'
  | 'PT_MO'
  | 'PT_MZ'
  | 'PT_PT'
  | 'PT_ST'
  | 'PT_TL'
  | 'QU'
  | 'QU_BO'
  | 'QU_EC'
  | 'QU_PE'
  | 'RM'
  | 'RM_CH'
  | 'RN'
  | 'RN_BI'
  | 'RO'
  | 'ROF'
  | 'ROF_TZ'
  | 'RO_MD'
  | 'RO_RO'
  | 'RU'
  | 'RU_BY'
  | 'RU_KG'
  | 'RU_KZ'
  | 'RU_MD'
  | 'RU_RU'
  | 'RU_UA'
  | 'RW'
  | 'RWK'
  | 'RWK_TZ'
  | 'RW_RW'
  | 'SAH'
  | 'SAH_RU'
  | 'SAQ'
  | 'SAQ_KE'
  | 'SAT'
  | 'SAT_OLCK'
  | 'SAT_OLCK_IN'
  | 'SBP'
  | 'SBP_TZ'
  | 'SD'
  | 'SD_ARAB'
  | 'SD_ARAB_PK'
  | 'SD_DEVA'
  | 'SD_DEVA_IN'
  | 'SE'
  | 'SEH'
  | 'SEH_MZ'
  | 'SES'
  | 'SES_ML'
  | 'SE_FI'
  | 'SE_NO'
  | 'SE_SE'
  | 'SG'
  | 'SG_CF'
  | 'SHI'
  | 'SHI_LATN'
  | 'SHI_LATN_MA'
  | 'SHI_TFNG'
  | 'SHI_TFNG_MA'
  | 'SI'
  | 'SI_LK'
  | 'SK'
  | 'SK_SK'
  | 'SL'
  | 'SL_SI'
  | 'SMN'
  | 'SMN_FI'
  | 'SN'
  | 'SN_ZW'
  | 'SO'
  | 'SO_DJ'
  | 'SO_ET'
  | 'SO_KE'
  | 'SO_SO'
  | 'SQ'
  | 'SQ_AL'
  | 'SQ_MK'
  | 'SQ_XK'
  | 'SR'
  | 'SR_CYRL'
  | 'SR_CYRL_BA'
  | 'SR_CYRL_ME'
  | 'SR_CYRL_RS'
  | 'SR_CYRL_XK'
  | 'SR_LATN'
  | 'SR_LATN_BA'
  | 'SR_LATN_ME'
  | 'SR_LATN_RS'
  | 'SR_LATN_XK'
  | 'SU'
  | 'SU_LATN'
  | 'SU_LATN_ID'
  | 'SV'
  | 'SV_AX'
  | 'SV_FI'
  | 'SV_SE'
  | 'SW'
  | 'SW_CD'
  | 'SW_KE'
  | 'SW_TZ'
  | 'SW_UG'
  | 'TA'
  | 'TA_IN'
  | 'TA_LK'
  | 'TA_MY'
  | 'TA_SG'
  | 'TE'
  | 'TEO'
  | 'TEO_KE'
  | 'TEO_UG'
  | 'TE_IN'
  | 'TG'
  | 'TG_TJ'
  | 'TH'
  | 'TH_TH'
  | 'TI'
  | 'TI_ER'
  | 'TI_ET'
  | 'TK'
  | 'TK_TM'
  | 'TO'
  | 'TO_TO'
  | 'TR'
  | 'TR_CY'
  | 'TR_TR'
  | 'TT'
  | 'TT_RU'
  | 'TWQ'
  | 'TWQ_NE'
  | 'TZM'
  | 'TZM_MA'
  | 'UG'
  | 'UG_CN'
  | 'UK'
  | 'UK_UA'
  | 'UR'
  | 'UR_IN'
  | 'UR_PK'
  | 'UZ'
  | 'UZ_ARAB'
  | 'UZ_ARAB_AF'
  | 'UZ_CYRL'
  | 'UZ_CYRL_UZ'
  | 'UZ_LATN'
  | 'UZ_LATN_UZ'
  | 'VAI'
  | 'VAI_LATN'
  | 'VAI_LATN_LR'
  | 'VAI_VAII'
  | 'VAI_VAII_LR'
  | 'VI'
  | 'VI_VN'
  | 'VO'
  | 'VUN'
  | 'VUN_TZ'
  | 'WAE'
  | 'WAE_CH'
  | 'WO'
  | 'WO_SN'
  | 'XH'
  | 'XH_ZA'
  | 'XOG'
  | 'XOG_UG'
  | 'YAV'
  | 'YAV_CM'
  | 'YI'
  | 'YO'
  | 'YO_BJ'
  | 'YO_NG'
  | 'YUE'
  | 'YUE_HANS'
  | 'YUE_HANS_CN'
  | 'YUE_HANT'
  | 'YUE_HANT_HK'
  | 'ZGH'
  | 'ZGH_MA'
  | 'ZH'
  | 'ZH_HANS'
  | 'ZH_HANS_CN'
  | 'ZH_HANS_HK'
  | 'ZH_HANS_MO'
  | 'ZH_HANS_SG'
  | 'ZH_HANT'
  | 'ZH_HANT_HK'
  | 'ZH_HANT_MO'
  | 'ZH_HANT_TW'
  | 'ZU'
  | 'ZU_ZA';

export type LanguageDisplay = {
  __typename?: 'LanguageDisplay';
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String']['output'];
};

export type LimitInfo = {
  __typename?: 'LimitInfo';
  /** Defines the allowed maximum resource usage, null means unlimited. */
  allowedUsage: Limits;
  /** Defines the current resource usage. */
  currentUsage: Limits;
};

export type Limits = {
  __typename?: 'Limits';
  channels?: Maybe<Scalars['Int']['output']>;
  orders?: Maybe<Scalars['Int']['output']>;
  productVariants?: Maybe<Scalars['Int']['output']>;
  staffUsers?: Maybe<Scalars['Int']['output']>;
  warehouses?: Maybe<Scalars['Int']['output']>;
};

/** The manifest definition. */
export type Manifest = {
  __typename?: 'Manifest';
  about?: Maybe<Scalars['String']['output']>;
  appUrl?: Maybe<Scalars['String']['output']>;
  configurationUrl?: Maybe<Scalars['String']['output']>;
  dataPrivacy?: Maybe<Scalars['String']['output']>;
  dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  extensions: Array<AppManifestExtension>;
  homepageUrl?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permission>>;
  supportUrl?: Maybe<Scalars['String']['output']>;
  tokenTargetUrl?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
};

export type Margin = {
  __typename?: 'Margin';
  start?: Maybe<Scalars['Int']['output']>;
  stop?: Maybe<Scalars['Int']['output']>;
};

/** An enumeration. */
export type MeasurementUnitsEnum =
  | 'ACRE_FT'
  | 'ACRE_IN'
  | 'CM'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  | 'FL_OZ'
  | 'FT'
  | 'G'
  | 'INCH'
  | 'KG'
  | 'KM'
  | 'LB'
  | 'LITER'
  | 'M'
  | 'OZ'
  | 'PINT'
  | 'QT'
  | 'SQ_CM'
  | 'SQ_FT'
  | 'SQ_INCH'
  | 'SQ_KM'
  | 'SQ_M'
  | 'SQ_YD'
  | 'TONNE'
  | 'YD';

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & ObjectWithMetadata & {
  __typename?: 'Menu';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<MenuItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  slug: Scalars['String']['output'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Deletes menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuBulkDelete = {
  __typename?: 'MenuBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCountableConnection = {
  __typename?: 'MenuCountableConnection';
  edges: Array<MenuCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuCountableEdge = {
  __typename?: 'MenuCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Menu;
};

/**
 * Creates a new Menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuCreate = {
  __typename?: 'MenuCreate';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCreateInput = {
  /** List of menu items. */
  items?: InputMaybe<Array<MenuItemInput>>;
  /** Name of the menu. */
  name: Scalars['String']['input'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MenuCreated = Event & {
  __typename?: 'MenuCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The menu the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type MenuCreatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuDelete = {
  __typename?: 'MenuDelete';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuDeleted = Event & {
  __typename?: 'MenuDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The menu the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type MenuDeletedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuError = {
  __typename?: 'MenuError';
  /** The error code. */
  code: MenuErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type MenuErrorCode =
  | 'CANNOT_ASSIGN_NODE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_MENU_ITEM'
  | 'NOT_FOUND'
  | 'NO_MENU_ITEM_PROVIDED'
  | 'REQUIRED'
  | 'TOO_MANY_MENU_ITEMS'
  | 'UNIQUE';

export type MenuFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Slug of the menu. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & ObjectWithMetadata & {
  __typename?: 'MenuItem';
  category?: Maybe<Category>;
  children?: Maybe<Array<MenuItem>>;
  /** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<Collection>;
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  menu: Menu;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** A page associated with this menu item. Requires one of the following permissions to include unpublished items: MANAGE_PAGES. */
  page?: Maybe<Page>;
  parent?: Maybe<MenuItem>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
  /** URL to the menu item. */
  url?: Maybe<Scalars['String']['output']>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes menu items.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection';
  edges: Array<MenuItemCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MenuItem;
};

/**
 * Creates a new menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemCreate = {
  __typename?: 'MenuItemCreate';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID']['input'];
  /** Name of the menu item. */
  name: Scalars['String']['input'];
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemCreated = Event & {
  __typename?: 'MenuItemCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The menu item the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type MenuItemCreatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemDelete = {
  __typename?: 'MenuItemDelete';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemDeleted = Event & {
  __typename?: 'MenuItemDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The menu item the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type MenuItemDeletedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the menu item. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Moves items of menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemMove = {
  __typename?: 'MenuItemMove';
  errors: Array<MenuError>;
  /** Assigned menu to move within. */
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID']['input'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  __typename?: 'MenuItemTranslatableContent';
  id: Scalars['ID']['output'];
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  menuItem?: Maybe<MenuItem>;
  name: Scalars['String']['output'];
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a menu item.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type MenuItemTranslate = {
  __typename?: 'MenuItemTranslate';
  errors: Array<TranslationError>;
  menuItem?: Maybe<MenuItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type MenuItemTranslation = Node & {
  __typename?: 'MenuItemTranslation';
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

/**
 * Updates a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemUpdate = {
  __typename?: 'MenuItemUpdate';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemUpdated = Event & {
  __typename?: 'MenuItemUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The menu item the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type MenuItemUpdatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemsSortField =
  /** Sort menu items by name. */
  | 'NAME';

export type MenuSortField =
  /** Sort menus by items count. */
  | 'ITEMS_COUNT'
  /** Sort menus by name. */
  | 'NAME';

export type MenuSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
};

/**
 * Updates a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuUpdate = {
  __typename?: 'MenuUpdate';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuUpdated = Event & {
  __typename?: 'MenuUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The menu the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type MenuUpdatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MetadataError = {
  __typename?: 'MetadataError';
  /** The error code. */
  code: MetadataErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type MetadataErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'NOT_UPDATED'
  | 'REQUIRED';

export type MetadataFilter = {
  /** Key of a metadata item. */
  key: Scalars['String']['input'];
  /** Value of a metadata item. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String']['input'];
  /** Value of a metadata item. */
  value: Scalars['String']['input'];
};

export type MetadataItem = {
  __typename?: 'MetadataItem';
  /** Key of a metadata item. */
  key: Scalars['String']['output'];
  /** Value of a metadata item. */
  value: Scalars['String']['output'];
};

/** Represents amount of money in specific currency. */
export type Money = {
  __typename?: 'Money';
  /** Amount of money. */
  amount: Scalars['Float']['output'];
  /** Currency code. */
  currency: Scalars['String']['output'];
};

export type MoneyInput = {
  /** Amount of money. */
  amount: Scalars['PositiveDecimal']['input'];
  /** Currency code. */
  currency: Scalars['String']['input'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  __typename?: 'MoneyRange';
  /** Lower bound of a price range. */
  start?: Maybe<Money>;
  /** Upper bound of a price range. */
  stop?: Maybe<Money>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID']['input'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create a new address for the customer.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountAddressCreate?: Maybe<AccountAddressCreate>;
  /** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  accountAddressDelete?: Maybe<AccountAddressDelete>;
  /** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
  accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  /**
   * Remove user account.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountDelete?: Maybe<AccountDelete>;
  /** Register a new user. */
  accountRegister?: Maybe<AccountRegister>;
  /**
   * Sends an email with the account removal link for the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  /**
   * Sets a default address for the authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  /**
   * Updates the account of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  accountUpdate?: Maybe<AccountUpdate>;
  /**
   * Creates user address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressCreate?: Maybe<AddressCreate>;
  /**
   * Deletes an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressDelete?: Maybe<AddressDelete>;
  /**
   * Sets a default address for the given user.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressSetDefault?: Maybe<AddressSetDefault>;
  /**
   * Updates an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  addressUpdate?: Maybe<AddressUpdate>;
  /**
   * Activate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appActivate?: Maybe<AppActivate>;
  /** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appCreate?: Maybe<AppCreate>;
  /**
   * Deactivate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDeactivate?: Maybe<AppDeactivate>;
  /**
   * Deletes an app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDelete?: Maybe<AppDelete>;
  /**
   * Delete failed installation.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  /**
   * Fetch and validate manifest.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appFetchManifest?: Maybe<AppFetchManifest>;
  /** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appInstall?: Maybe<AppInstall>;
  /**
   * Retry failed installation of new app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appRetryInstall?: Maybe<AppRetryInstall>;
  /**
   * Creates a new token.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenCreate?: Maybe<AppTokenCreate>;
  /**
   * Deletes an authentication token assigned to app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenDelete?: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify?: Maybe<AppTokenVerify>;
  /**
   * Updates an existing app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appUpdate?: Maybe<AppUpdate>;
  /**
   * Assigns storefront's navigation menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
   */
  assignNavigation?: Maybe<AssignNavigation>;
  /**
   * Add shipping zone to given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  /**
   * Deletes attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  /** Creates an attribute. */
  attributeCreate?: Maybe<AttributeCreate>;
  /**
   * Deletes an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeDelete?: Maybe<AttributeDelete>;
  /**
   * Reorder the values of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeReorderValues?: Maybe<AttributeReorderValues>;
  /**
   * Creates/updates translations for an attribute.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeTranslate?: Maybe<AttributeTranslate>;
  /**
   * Updates attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeUpdate?: Maybe<AttributeUpdate>;
  /**
   * Deletes values of attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  /**
   * Creates a value for an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  /**
   * Deletes a value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  /**
   * Creates/updates translations for an attribute value.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  /**
   * Updates value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  /**
   * Deletes categories.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  /**
   * Creates a new category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryCreate?: Maybe<CategoryCreate>;
  /**
   * Deletes a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryDelete?: Maybe<CategoryDelete>;
  /**
   * Creates/updates translations for a category.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  categoryTranslate?: Maybe<CategoryTranslate>;
  /**
   * Updates a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryUpdate?: Maybe<CategoryUpdate>;
  /**
   * Activate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelActivate?: Maybe<ChannelActivate>;
  /**
   * Creates new channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelCreate?: Maybe<ChannelCreate>;
  /**
   * Deactivate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelDeactivate?: Maybe<ChannelDeactivate>;
  /**
   * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelDelete?: Maybe<ChannelDelete>;
  /**
   * Update a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelUpdate?: Maybe<ChannelUpdate>;
  /** Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete?: Maybe<CheckoutComplete>;
  /** Create a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreate>;
  /**
   * Sets the customer as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   */
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  /**
   * Removes the user assigned as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   */
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  /**
   * Updates the delivery method (shipping method or pick up point) of the checkout.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  /** Update language code in the existing checkout. */
  checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
  /**
   * Deletes a CheckoutLine.
   * @deprecated DEPRECATED: Will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  /** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  /** Deletes checkout lines. */
  checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
  /** Updates checkout line in the existing checkout. */
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  /** Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  /** Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  /**
   * Updates the shipping method of the checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  /**
   * Adds products to a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionAddProducts?: Maybe<CollectionAddProducts>;
  /**
   * Deletes collections.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  /**
   * Manage collection's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
  /**
   * Creates a new collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionCreate?: Maybe<CollectionCreate>;
  /**
   * Deletes a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionDelete?: Maybe<CollectionDelete>;
  /**
   * Remove products from a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  /**
   * Reorder the products of a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  /**
   * Creates/updates translations for a collection.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  collectionTranslate?: Maybe<CollectionTranslate>;
  /**
   * Updates a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionUpdate?: Maybe<CollectionUpdate>;
  /** Confirm user account with token sent by email during registration. */
  confirmAccount?: Maybe<ConfirmAccount>;
  /**
   * Confirm the email change of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  confirmEmailChange?: Maybe<ConfirmEmailChange>;
  /**
   * Creates new warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  createWarehouse?: Maybe<WarehouseCreate>;
  /**
   * Deletes customers.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerBulkDelete?: Maybe<CustomerBulkDelete>;
  /**
   * Creates a new customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerCreate?: Maybe<CustomerCreate>;
  /**
   * Deletes a customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerDelete?: Maybe<CustomerDelete>;
  /**
   * Updates an existing customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  customerUpdate?: Maybe<CustomerUpdate>;
  /** Delete metadata of an object. To use it, you need to have access to the modified object. */
  deleteMetadata?: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  /**
   * Deletes selected warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  deleteWarehouse?: Maybe<WarehouseDelete>;
  /**
   * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentCreate?: Maybe<DigitalContentCreate>;
  /**
   * Remove digital content assigned to given variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentDelete?: Maybe<DigitalContentDelete>;
  /**
   * Update digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  /**
   * Generate new URL to digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  /**
   * Deletes draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  /**
   * Completes creating an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderComplete?: Maybe<DraftOrderComplete>;
  /**
   * Creates a new draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderCreate?: Maybe<DraftOrderCreate>;
  /**
   * Deletes a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderDelete?: Maybe<DraftOrderDelete>;
  /**
   * Deletes order lines.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  /**
   * Updates a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  /**
   * Retries event delivery.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
  /**
   * Export gift cards to csv file.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  exportGiftCards?: Maybe<ExportGiftCards>;
  /**
   * Export products to csv file.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportProducts?: Maybe<ExportProducts>;
  /** Prepare external authentication url for user by custom plugin. */
  externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
  /** Logout user by custom plugin. */
  externalLogout?: Maybe<ExternalLogout>;
  /**
   * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
   *
   * Added in Saleor 3.1.
   */
  externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
  /** Obtain external access tokens for user by custom plugin. */
  externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
  /** Refresh user's access by custom plugin. */
  externalRefresh?: Maybe<ExternalRefresh>;
  /** Verify external authentication data by plugin. */
  externalVerify?: Maybe<ExternalVerify>;
  /**
   * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  fileUpload?: Maybe<FileUpload>;
  /**
   * Activate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardActivate?: Maybe<GiftCardActivate>;
  /**
   * Adds note to the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardAddNote?: Maybe<GiftCardAddNote>;
  /**
   * Activate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
  /**
   * Create gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
  /**
   * Deactivate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
  /**
   * Delete gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
  /**
   * Creates a new gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardCreate?: Maybe<GiftCardCreate>;
  /**
   * Deactivate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  /**
   * Delete gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardDelete?: Maybe<GiftCardDelete>;
  /**
   * Resend a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardResend?: Maybe<GiftCardResend>;
  /**
   * Update gift card settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
  /**
   * Update a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardUpdate?: Maybe<GiftCardUpdate>;
  /**
   * Creates a ready to send invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceCreate?: Maybe<InvoiceCreate>;
  /**
   * Deletes an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceDelete?: Maybe<InvoiceDelete>;
  /**
   * Request an invoice for the order using plugin.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceRequest?: Maybe<InvoiceRequest>;
  /**
   * Requests deletion of an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  /**
   * Send an invoice notification to the customer.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceSendNotification?: Maybe<InvoiceSendNotification>;
  /**
   * Updates an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceUpdate?: Maybe<InvoiceUpdate>;
  /**
   * Deletes menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuBulkDelete?: Maybe<MenuBulkDelete>;
  /**
   * Creates a new Menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuCreate?: Maybe<MenuCreate>;
  /**
   * Deletes a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuDelete?: Maybe<MenuDelete>;
  /**
   * Deletes menu items.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  /**
   * Creates a new menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemCreate?: Maybe<MenuItemCreate>;
  /**
   * Deletes a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemDelete?: Maybe<MenuItemDelete>;
  /**
   * Moves items of menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemMove?: Maybe<MenuItemMove>;
  /**
   * Creates/updates translations for a menu item.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  menuItemTranslate?: Maybe<MenuItemTranslate>;
  /**
   * Updates a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuItemUpdate?: Maybe<MenuItemUpdate>;
  /**
   * Updates a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   */
  menuUpdate?: Maybe<MenuUpdate>;
  /**
   * Adds note to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderAddNote?: Maybe<OrderAddNote>;
  /**
   * Cancels orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderBulkCancel?: Maybe<OrderBulkCancel>;
  /**
   * Cancel an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCancel?: Maybe<OrderCancel>;
  /**
   * Capture an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCapture?: Maybe<OrderCapture>;
  /**
   * Confirms an unconfirmed order by changing status to unfulfilled.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderConfirm?: Maybe<OrderConfirm>;
  /**
   * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  orderCreateFromCheckout?: Maybe<OrderCreateFromCheckout>;
  /**
   * Adds discount to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountAdd?: Maybe<OrderDiscountAdd>;
  /**
   * Remove discount from the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountDelete?: Maybe<OrderDiscountDelete>;
  /**
   * Update discount for the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
  /**
   * Creates new fulfillments for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfill?: Maybe<OrderFulfill>;
  /**
   * Approve existing fulfillment.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
  /**
   * Cancels existing fulfillment and optionally restocks items.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  /**
   * Refund products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
  /**
   * Return products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
  /**
   * Updates a fulfillment for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  /**
   * Deletes an order line from an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDelete?: Maybe<OrderLineDelete>;
  /**
   * Remove discount applied to the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
  /**
   * Update discount for the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
  /**
   * Updates an order line of an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineUpdate?: Maybe<OrderLineUpdate>;
  /**
   * Create order lines for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLinesCreate?: Maybe<OrderLinesCreate>;
  /**
   * Mark order as manually paid.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  /**
   * Refund an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderRefund?: Maybe<OrderRefund>;
  /**
   * Update shop order settings.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
  /**
   * Updates an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdate?: Maybe<OrderUpdate>;
  /**
   * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  /**
   * Void an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderVoid?: Maybe<OrderVoid>;
  /**
   * Assign attributes to a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeAssign?: Maybe<PageAttributeAssign>;
  /**
   * Unassign attributes from a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
  /**
   * Deletes pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkDelete?: Maybe<PageBulkDelete>;
  /**
   * Publish pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkPublish?: Maybe<PageBulkPublish>;
  /**
   * Creates a new page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageCreate?: Maybe<PageCreate>;
  /**
   * Deletes a page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageDelete?: Maybe<PageDelete>;
  /**
   * Reorder page attribute values.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
  /**
   * Creates/updates translations for a page.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  pageTranslate?: Maybe<PageTranslate>;
  /**
   * Delete page types.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
  /**
   * Create a new page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeCreate?: Maybe<PageTypeCreate>;
  /**
   * Delete a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeDelete?: Maybe<PageTypeDelete>;
  /**
   * Reorder the attributes of a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
  /**
   * Update page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeUpdate?: Maybe<PageTypeUpdate>;
  /**
   * Updates an existing page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageUpdate?: Maybe<PageUpdate>;
  /**
   * Change the password of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Captures the authorized payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentCapture?: Maybe<PaymentCapture>;
  /** Check payment balance. */
  paymentCheckBalance?: Maybe<PaymentCheckBalance>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize?: Maybe<PaymentInitialize>;
  /**
   * Refunds the captured payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentRefund?: Maybe<PaymentRefund>;
  /**
   * Voids the authorized payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentVoid?: Maybe<PaymentVoid>;
  /**
   * Create new permission group.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  /**
   * Delete permission group.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  /**
   * Update permission group.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  /**
   * Update plugin configuration.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  pluginUpdate?: Maybe<PluginUpdate>;
  /**
   * Assign attributes to a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssign?: Maybe<ProductAttributeAssign>;
  /**
   * Update attributes assigned to product variant for given product type.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
  /**
   * Un-assign attributes from a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
  /**
   * Deletes products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkDelete?: Maybe<ProductBulkDelete>;
  /**
   * Manage product's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
  /**
   * Creates a new product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productCreate?: Maybe<ProductCreate>;
  /**
   * Deletes a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productDelete?: Maybe<ProductDelete>;
  /**
   * Deletes product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
  /**
   * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaCreate?: Maybe<ProductMediaCreate>;
  /**
   * Deletes a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaDelete?: Maybe<ProductMediaDelete>;
  /**
   * Changes ordering of the product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaReorder?: Maybe<ProductMediaReorder>;
  /**
   * Updates a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaUpdate?: Maybe<ProductMediaUpdate>;
  /**
   * Reorder product attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
  /**
   * Creates/updates translations for a product.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productTranslate?: Maybe<ProductTranslate>;
  /**
   * Deletes product types.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  /**
   * Creates a new product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeCreate?: Maybe<ProductTypeCreate>;
  /**
   * Deletes a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeDelete?: Maybe<ProductTypeDelete>;
  /**
   * Reorder the attributes of a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  /**
   * Updates an existing product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeUpdate?: Maybe<ProductTypeUpdate>;
  /**
   * Updates an existing product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productUpdate?: Maybe<ProductUpdate>;
  /**
   * Creates product variants for a given product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  /**
   * Deletes product variants.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  /**
   * Manage product variant prices in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
  /**
   * Creates a new variant for a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantCreate?: Maybe<ProductVariantCreate>;
  /**
   * Deletes a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantDelete?: Maybe<ProductVariantDelete>;
  /**
   * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
  /**
   * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorder?: Maybe<ProductVariantReorder>;
  /**
   * Reorder product variant attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
  /**
   * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  /**
   * Creates stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  /**
   * Delete stocks from product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  /**
   * Update stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  /**
   * Creates/updates translations for a product variant.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productVariantTranslate?: Maybe<ProductVariantTranslate>;
  /**
   * Updates an existing variant for product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantUpdate?: Maybe<ProductVariantUpdate>;
  /**
   * Request email change of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  requestEmailChange?: Maybe<RequestEmailChange>;
  /** Sends an email with the account password modification link. */
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  /**
   * Deletes sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleBulkDelete?: Maybe<SaleBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  /**
   * Removes products, categories, collections from a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  /**
   * Manage sale's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
  /**
   * Creates a new sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleCreate?: Maybe<SaleCreate>;
  /**
   * Deletes a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleDelete?: Maybe<SaleDelete>;
  /**
   * Creates/updates translations for a sale.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  saleTranslate?: Maybe<SaleTranslate>;
  /**
   * Updates a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleUpdate?: Maybe<SaleUpdate>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword?: Maybe<SetPassword>;
  /**
   * Manage shipping method's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
  /**
   * Deletes shipping prices.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  /**
   * Creates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  /**
   * Deletes a shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  /**
   * Exclude products from shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
  /**
   * Remove product from excluded list for shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
  /**
   * Creates/updates translations for a shipping method.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  /**
   * Updates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  /**
   * Deletes shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  /**
   * Creates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  /**
   * Deletes a shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  /**
   * Updates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  /**
   * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  /**
   * Updates site domain of the shop.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  /**
   * Fetch tax rates.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  /**
   * Creates/updates translations for shop settings.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  /**
   * Updates shop settings.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  /**
   * Deletes staff users.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffBulkDelete?: Maybe<StaffBulkDelete>;
  /**
   * Creates a new staff user.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffCreate?: Maybe<StaffCreate>;
  /**
   * Deletes a staff user.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffDelete?: Maybe<StaffDelete>;
  /**
   * Creates a new staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  /**
   * Delete staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  /**
   * Updates a staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  /**
   * Updates an existing staff user.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffUpdate?: Maybe<StaffUpdate>;
  /** Create JWT token. */
  tokenCreate?: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh?: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>;
  /**
   * Deactivate all JWT tokens of the currently authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  /**
   * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionCreate?: Maybe<TransactionCreate>;
  /**
   * Request an action for payment transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS, MANAGE_ORDERS.
   */
  transactionRequestAction?: Maybe<TransactionRequestAction>;
  /**
   * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionUpdate?: Maybe<TransactionUpdate>;
  /**
   * Remove shipping zone from given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  /** Updates metadata of an object. To use it, you need to have access to the modified object. */
  updateMetadata?: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  /**
   * Updates given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  updateWarehouse?: Maybe<WarehouseUpdate>;
  /**
   * Deletes a user avatar. Only for staff members.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarDelete?: Maybe<UserAvatarDelete>;
  /**
   * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  /**
   * Activate or deactivate users.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  userBulkSetActive?: Maybe<UserBulkSetActive>;
  /**
   * Assign an media to a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaAssign?: Maybe<VariantMediaAssign>;
  /**
   * Unassign an media from a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaUnassign?: Maybe<VariantMediaUnassign>;
  /**
   * Deletes vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  /**
   * Removes products, categories, collections from a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  /**
   * Manage voucher's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
  /**
   * Creates a new voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherCreate?: Maybe<VoucherCreate>;
  /**
   * Deletes a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherDelete?: Maybe<VoucherDelete>;
  /**
   * Creates/updates translations for a voucher.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  voucherTranslate?: Maybe<VoucherTranslate>;
  /**
   * Updates a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucherUpdate?: Maybe<VoucherUpdate>;
  /**
   * Creates a new webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookCreate?: Maybe<WebhookCreate>;
  /**
   * Deletes a webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookDelete?: Maybe<WebhookDelete>;
  /**
   * Updates a webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  webhookUpdate?: Maybe<WebhookUpdate>;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String']['input'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  redirectUrl: Scalars['String']['input'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID']['input'];
  type: AddressTypeEnum;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID']['input'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID']['input'];
  type: AddressTypeEnum;
  userId: Scalars['ID']['input'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String']['input'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars['ID']['input']>;
  navigationType: NavigationType;
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: Array<Scalars['ID']['input']>;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeUpdateInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeValueTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeValueUpdateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ChannelDeleteInput>;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ChannelUpdateInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  promoCode: Scalars['String']['input'];
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  storeSource?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCodeEnum;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lineId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lines: Array<CheckoutLineInput>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  linesIds: Array<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lines: Array<CheckoutLineUpdateInput>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PaymentInput;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  promoCodeId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shippingAddress: AddressInput;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shippingMethodId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID']['input'];
  moves: Array<MoveProductInput>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationConfirmEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CustomerInput;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID']['input'];
  input: DraftOrderInput;
};


export type MutationEventDeliveryRetryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExportGiftCardsArgs = {
  input: ExportGiftCardsInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String']['input'];
  input: ExternalNotificationTriggerInput;
  pluginId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkActivateArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGiftCardBulkCreateArgs = {
  input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeactivateArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGiftCardBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput;
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardUpdateInput;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: UpdateInvoiceInput;
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID']['input'];
  moves: Array<MenuItemMoveInput>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuInput;
};


export type MutationOrderAddNoteArgs = {
  input: OrderAddNoteInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCreateFromCheckoutArgs = {
  id: Scalars['ID']['input'];
  removeCheckout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput;
  orderId: Scalars['ID']['input'];
};


export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID']['input'];
};


export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID']['input'];
  input: OrderDiscountCommonInput;
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  notifyCustomer: Scalars['Boolean']['input'];
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID']['input'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID']['input'];
};


export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput;
  orderLineId: Scalars['ID']['input'];
};


export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderLineInput;
};


export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID']['input'];
  input: Array<OrderLineCreateInput>;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID']['input'];
  transactionReference?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationOrderUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  input: OrderUpdateShippingInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']['input']>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']['input']>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
  pageId: Scalars['ID']['input'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID']['input'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageTypeUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PageTypeUpdateInput;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput;
};


export type MutationPaymentInitializeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  gateway: Scalars['String']['input'];
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
};


export type MutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  input: PluginUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: Array<ProductAttributeAssignInput>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<ProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']['input']>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductMediaBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput;
};


export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductMediaReorderArgs = {
  mediaIds: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};


export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductMediaUpdateInput;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
  productId: Scalars['ID']['input'];
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  productTypeId: Scalars['ID']['input'];
  type: ProductAttributeType;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductTypeInput;
};


export type MutationProductUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductInput;
};


export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID']['input'];
  variants: Array<ProductVariantBulkCreateInput>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: Array<ProductVariantChannelListingAddInput>;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductVariantReorderArgs = {
  moves: Array<ReorderInput>;
  productId: Scalars['ID']['input'];
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID']['input'];
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductVariantInput;
};


export type MutationRequestEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationRequestPasswordResetArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleChannelListingInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleInput;
};


export type MutationSetPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: InputMaybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffUpdateInput;
};


export type MutationTokenCreateArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationTransactionCreateArgs = {
  id: Scalars['ID']['input'];
  transaction: TransactionCreateInput;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationTransactionRequestActionArgs = {
  actionType: TransactionActionEnum;
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationTransactionUpdateArgs = {
  id: Scalars['ID']['input'];
  transaction?: InputMaybe<TransactionUpdateInput>;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: Array<Scalars['ID']['input']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID']['input'];
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Scalars['ID']['input']>;
  isActive: Scalars['Boolean']['input'];
};


export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherChannelListingInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WebhookUpdateInput;
};

export type NameTranslationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationType =
  /** Main storefront navigation. */
  | 'MAIN'
  /** Secondary storefront navigation. */
  | 'SECONDARY';

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type ObjectWithMetadata = {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
};


export type ObjectWithMetadataMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type ObjectWithMetadataMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type ObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  __typename?: 'Order';
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<OrderAction>;
  /**
   * The authorize status of the order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  authorizeStatus: OrderAuthorizeStatusEnum;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  availableCollectionPoints: Array<Warehouse>;
  /**
   * Shipping methods that can be used with this order.
   * @deprecated Use `shippingMethods`, this field will be removed in 4.0
   */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  billingAddress?: Maybe<Address>;
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  canFinalize: Scalars['Boolean']['output'];
  channel: Channel;
  /**
   * The charge status of the order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  chargeStatus: OrderChargeStatusEnum;
  collectionPointName?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  customerNote: Scalars['String']['output'];
  /**
   * The delivery method selected for this checkout.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  deliveryMethod?: Maybe<DeliveryMethod>;
  /**
   * Returns applied discount.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discount?: Maybe<Money>;
  /**
   * Discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discountName?: Maybe<Scalars['String']['output']>;
  /** List of all discounts assigned to the order. */
  discounts: Array<OrderDiscount>;
  displayGrossPrices: Scalars['Boolean']['output'];
  /** List of errors that occurred during order validation. */
  errors: Array<OrderError>;
  /**
   * List of events associated with the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  events: Array<OrderEvent>;
  /** List of shipments for the order. */
  fulfillments: Array<Fulfillment>;
  /** List of user gift cards. */
  giftCards: Array<GiftCard>;
  id: Scalars['ID']['output'];
  /** List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  invoices: Array<Invoice>;
  /** Informs if an order is fully paid. */
  isPaid: Scalars['Boolean']['output'];
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
  languageCode: Scalars['String']['output'];
  /** Order language code. */
  languageCodeEnum: LanguageCodeEnum;
  /** List of order lines. */
  lines: Array<OrderLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** User-friendly number of an order. */
  number: Scalars['String']['output'];
  /** The order origin. */
  origin: OrderOriginEnum;
  /** The ID of the order that was the base for this order. */
  original?: Maybe<Scalars['ID']['output']>;
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String']['output'];
  /** List of payments for the order. */
  payments: Array<Payment>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  shippingAddress?: Maybe<Address>;
  /**
   * Shipping method for this order.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName?: Maybe<Scalars['String']['output']>;
  /** Shipping methods related to this order. */
  shippingMethods: Array<ShippingMethod>;
  /** Total price of shipping. */
  shippingPrice: TaxedMoney;
  shippingTaxRate: Scalars['Float']['output'];
  status: OrderStatus;
  /** User-friendly order status. */
  statusDisplay: Scalars['String']['output'];
  /** The sum of line prices not including shipping. */
  subtotal: TaxedMoney;
  /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
  token: Scalars['String']['output'];
  /** Total amount of the order. */
  total: TaxedMoney;
  /** Amount authorized for the order. */
  totalAuthorized: Money;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /** Amount captured by payment. */
  totalCaptured: Money;
  trackingClientId: Scalars['String']['output'];
  /**
   * List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactions: Array<TransactionItem>;
  /**
   * Translated discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  translatedDiscountName?: Maybe<Scalars['String']['output']>;
  /** Undiscounted total amount of the order. */
  undiscountedTotal: TaxedMoney;
  updatedAt: Scalars['DateTime']['output'];
  /** User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, OWNER. */
  user?: Maybe<User>;
  /** Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  userEmail?: Maybe<Scalars['String']['output']>;
  voucher?: Maybe<Voucher>;
  weight: Weight;
};


/** Represents an order in the shop. */
export type OrderMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an order in the shop. */
export type OrderMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderAction =
  /** Represents the capture action. */
  | 'CAPTURE'
  /** Represents a mark-as-paid action. */
  | 'MARK_AS_PAID'
  /** Represents a refund action. */
  | 'REFUND'
  /** Represents a void action. */
  | 'VOID';

/**
 * Adds note to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderAddNote = {
  __typename?: 'OrderAddNote';
  errors: Array<OrderError>;
  /** Order note created. */
  event?: Maybe<OrderEvent>;
  /** Order with the note added. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  /** Note message. */
  message: Scalars['String']['input'];
};

/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the order.total.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the order.total
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized or charged don't cover fully the order's
 *     total
 *     FULL - the funds that are authorized or charged fully cover the order's total
 */
export type OrderAuthorizeStatusEnum =
  | 'FULL'
  | 'NONE'
  | 'PARTIAL';

/**
 * Cancels orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderBulkCancel = {
  __typename?: 'OrderBulkCancel';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Cancel an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCancel = {
  __typename?: 'OrderCancel';
  errors: Array<OrderError>;
  /** Canceled order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderCancelled = Event & {
  __typename?: 'OrderCancelled';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Capture an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCapture = {
  __typename?: 'OrderCapture';
  errors: Array<OrderError>;
  /** Captured order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Determine the current charge status for the order.
 *
 *     We treat the order as overcharged when the charged amount is bigger that order.total
 *     We treat the order as fully charged when the charged amount is equal to order.total.
 *     We treat the order as partially charged when the charged amount covers only part of
 *     the order.total
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the order's total
 *     FULL - the funds that are charged fully cover the order's total
 *     OVERCHARGED - the charged funds are bigger than order's total
 */
export type OrderChargeStatusEnum =
  | 'FULL'
  | 'NONE'
  | 'OVERCHARGED'
  | 'PARTIAL';

/**
 * Confirms an unconfirmed order by changing status to unfulfilled.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderConfirm = {
  __typename?: 'OrderConfirm';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderConfirmed = Event & {
  __typename?: 'OrderConfirmed';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderCountableConnection = {
  __typename?: 'OrderCountableConnection';
  edges: Array<OrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderCountableEdge = {
  __typename?: 'OrderCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/**
 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
 *
 * Added in Saleor 3.2.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderCreateFromCheckout = {
  __typename?: 'OrderCreateFromCheckout';
  errors: Array<OrderCreateFromCheckoutError>;
  /** Placed order. */
  order?: Maybe<Order>;
};

export type OrderCreateFromCheckoutError = {
  __typename?: 'OrderCreateFromCheckoutError';
  /** The error code. */
  code: OrderCreateFromCheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of variant IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type OrderCreateFromCheckoutErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHANNEL_INACTIVE'
  | 'CHECKOUT_NOT_FOUND'
  | 'EMAIL_NOT_SET'
  | 'GIFT_CARD_NOT_APPLICABLE'
  | 'GRAPHQL_ERROR'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID_SHIPPING_METHOD'
  | 'NO_LINES'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'TAX_ERROR'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'VOUCHER_NOT_APPLICABLE';

export type OrderCreated = Event & {
  __typename?: 'OrderCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderDirection =
  /** Specifies an ascending sort order. */
  | 'ASC'
  /** Specifies a descending sort order. */
  | 'DESC';

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
  __typename?: 'OrderDiscount';
  /** Returns amount of discount. */
  amount: Money;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Explanation for the applied discount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  reason?: Maybe<Scalars['String']['output']>;
  translatedName?: Maybe<Scalars['String']['output']>;
  type: OrderDiscountType;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal']['output'];
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
};

/**
 * Adds discount to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountAdd = {
  __typename?: 'OrderDiscountAdd';
  errors: Array<OrderError>;
  /** Order which has been discounted. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
  /** Explanation for the applied discount. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal']['input'];
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
};

/**
 * Remove discount from the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountDelete = {
  __typename?: 'OrderDiscountDelete';
  errors: Array<OrderError>;
  /** Order which has removed discount. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** An enumeration. */
export type OrderDiscountType =
  | 'MANUAL'
  | 'VOUCHER';

/**
 * Update discount for the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountUpdate = {
  __typename?: 'OrderDiscountUpdate';
  errors: Array<OrderError>;
  /** Order which has been discounted. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type OrderError = {
  __typename?: 'OrderError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: OrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of order line IDs that cause the error. */
  orderLines?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of product variants that are associated with the error */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
  /** Warehouse ID which causes the error. */
  warehouse?: Maybe<Scalars['ID']['output']>;
};

/** An enumeration. */
export type OrderErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CANNOT_CANCEL_FULFILLMENT'
  | 'CANNOT_CANCEL_ORDER'
  | 'CANNOT_DELETE'
  | 'CANNOT_DISCOUNT'
  | 'CANNOT_FULFILL_UNPAID_ORDER'
  | 'CANNOT_REFUND'
  | 'CAPTURE_INACTIVE_PAYMENT'
  | 'CHANNEL_INACTIVE'
  | 'DUPLICATED_INPUT_ITEM'
  | 'FULFILL_ORDER_LINE'
  | 'GIFT_CARD_LINE'
  | 'GRAPHQL_ERROR'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'INVALID_QUANTITY'
  | 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK'
  | 'NOT_AVAILABLE_IN_CHANNEL'
  | 'NOT_EDITABLE'
  | 'NOT_FOUND'
  | 'ORDER_NO_SHIPPING_ADDRESS'
  | 'PAYMENT_ERROR'
  | 'PAYMENT_MISSING'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'REQUIRED'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_REQUIRED'
  | 'TAX_ERROR'
  | 'UNIQUE'
  | 'VOID_INACTIVE_PAYMENT'
  | 'ZERO_QUANTITY';

/** History log of the order. */
export type OrderEvent = Node & {
  __typename?: 'OrderEvent';
  /** Amount of money. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER. */
  app?: Maybe<App>;
  /** Composed ID of the Fulfillment. */
  composedId?: Maybe<Scalars['String']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** The discount applied to the order. */
  discount?: Maybe<OrderEventDiscountObject>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** Type of an email sent to the customer. */
  emailType?: Maybe<OrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  fulfilledItems?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID']['output'];
  /** Number of an invoice related to the order. */
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  /** The concerned lines. */
  lines?: Maybe<Array<OrderEventOrderLineObject>>;
  /** Content of the event. */
  message?: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** List of oversold lines names. */
  oversoldItems?: Maybe<Array<Scalars['String']['output']>>;
  /** The payment gateway of the payment. */
  paymentGateway?: Maybe<Scalars['String']['output']>;
  /** The payment reference from the payment provider. */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** The reference of payment's transaction. */
  reference?: Maybe<Scalars['String']['output']>;
  /** The order which is related to this order. */
  relatedOrder?: Maybe<Order>;
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded?: Maybe<Scalars['Boolean']['output']>;
  /** The status of payment's transaction. */
  status?: Maybe<TransactionStatus>;
  /** The transaction reference of captured payment. */
  transactionReference?: Maybe<Scalars['String']['output']>;
  /** Order event type. */
  type?: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
  /** The warehouse were items were restocked. */
  warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection';
  edges: Array<OrderEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderEvent;
};

export type OrderEventDiscountObject = {
  __typename?: 'OrderEventDiscountObject';
  /** Returns amount of discount. */
  amount?: Maybe<Money>;
  /** Returns amount of discount. */
  oldAmount?: Maybe<Money>;
  /** Value of the discount. Can store fixed value or percent value. */
  oldValue?: Maybe<Scalars['PositiveDecimal']['output']>;
  /** Type of the discount: fixed or percent. */
  oldValueType?: Maybe<DiscountValueTypeEnum>;
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']['output']>;
  /** Value of the discount. Can store fixed value or percent value. */
  value: Scalars['PositiveDecimal']['output'];
  /** Type of the discount: fixed or percent. */
  valueType: DiscountValueTypeEnum;
};

export type OrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject';
  /** The discount applied to the order line. */
  discount?: Maybe<OrderEventDiscountObject>;
  /** The variant name. */
  itemName?: Maybe<Scalars['String']['output']>;
  /** The order line. */
  orderLine?: Maybe<OrderLine>;
  /** The variant quantity. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** An enumeration. */
export type OrderEventsEmailsEnum =
  | 'CONFIRMED'
  | 'DIGITAL_LINKS'
  | 'FULFILLMENT_CONFIRMATION'
  | 'ORDER_CANCEL'
  | 'ORDER_CONFIRMATION'
  | 'ORDER_REFUND'
  | 'PAYMENT_CONFIRMATION'
  | 'SHIPPING_CONFIRMATION'
  | 'TRACKING_UPDATED';

/** An enumeration. */
export type OrderEventsEnum =
  | 'ADDED_PRODUCTS'
  | 'CANCELED'
  | 'CONFIRMED'
  | 'DRAFT_CREATED'
  | 'DRAFT_CREATED_FROM_REPLACE'
  | 'EMAIL_SENT'
  | 'EXTERNAL_SERVICE_NOTIFICATION'
  | 'FULFILLMENT_AWAITS_APPROVAL'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_FULFILLED_ITEMS'
  | 'FULFILLMENT_REFUNDED'
  | 'FULFILLMENT_REPLACED'
  | 'FULFILLMENT_RESTOCKED_ITEMS'
  | 'FULFILLMENT_RETURNED'
  | 'INVOICE_GENERATED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_SENT'
  | 'INVOICE_UPDATED'
  | 'NOTE_ADDED'
  | 'ORDER_DISCOUNT_ADDED'
  | 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED'
  | 'ORDER_DISCOUNT_DELETED'
  | 'ORDER_DISCOUNT_UPDATED'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_LINE_DISCOUNT_REMOVED'
  | 'ORDER_LINE_DISCOUNT_UPDATED'
  | 'ORDER_LINE_PRODUCT_DELETED'
  | 'ORDER_LINE_VARIANT_DELETED'
  | 'ORDER_MARKED_AS_PAID'
  | 'ORDER_REPLACEMENT_CREATED'
  | 'OTHER'
  | 'OVERSOLD_ITEMS'
  | 'PAYMENT_AUTHORIZED'
  | 'PAYMENT_CAPTURED'
  | 'PAYMENT_FAILED'
  | 'PAYMENT_REFUNDED'
  | 'PAYMENT_VOIDED'
  | 'PLACED'
  | 'PLACED_FROM_DRAFT'
  | 'REMOVED_PRODUCTS'
  | 'TRACKING_UPDATED'
  | 'TRANSACTION_CAPTURE_REQUESTED'
  | 'TRANSACTION_EVENT'
  | 'TRANSACTION_REFUND_REQUESTED'
  | 'TRANSACTION_VOID_REQUESTED'
  | 'UPDATED_ADDRESS';

export type OrderFilterInput = {
  authorizeStatus?: InputMaybe<Array<OrderAuthorizeStatusEnum>>;
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  chargeStatus?: InputMaybe<Array<OrderChargeStatusEnum>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  giftCardBought?: InputMaybe<Scalars['Boolean']['input']>;
  giftCardUsed?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isClickAndCollect?: InputMaybe<Scalars['Boolean']['input']>;
  isPreorder?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numbers?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/**
 * Creates new fulfillments for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderFulfill = {
  __typename?: 'OrderFulfill';
  errors: Array<OrderError>;
  /** List of created fulfillments. */
  fulfillments?: Maybe<Array<Fulfillment>>;
  /** Fulfilled order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: InputMaybe<Scalars['ID']['input']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int']['input'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID']['input'];
};

export type OrderFulfilled = Event & {
  __typename?: 'OrderFulfilled';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderFullyPaid = Event & {
  __typename?: 'OrderFullyPaid';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents order line of particular order. */
export type OrderLine = Node & {
  __typename?: 'OrderLine';
  /**
   * List of allocations across warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  allocations?: Maybe<Array<Allocation>>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  id: Scalars['ID']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  productName: Scalars['String']['output'];
  productSku?: Maybe<Scalars['String']['output']>;
  productVariantId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  quantityFulfilled: Scalars['Int']['output'];
  /**
   * A quantity of items remaining to be fulfilled.
   *
   * Added in Saleor 3.1.
   */
  quantityToFulfill: Scalars['Int']['output'];
  taxRate: Scalars['Float']['output'];
  /** The main thumbnail for the ordered product. */
  thumbnail?: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: TaxedMoney;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String']['output'];
  /** Price of the single item in the order line without applied an order line discount. */
  undiscountedUnitPrice: TaxedMoney;
  /** The discount applied to the single order line. */
  unitDiscount: Money;
  unitDiscountReason?: Maybe<Scalars['String']['output']>;
  /** Type of the discount: fixed or percent */
  unitDiscountType?: Maybe<DiscountValueTypeEnum>;
  /** Value of the discount. Can store fixed value or percent value */
  unitDiscountValue: Scalars['PositiveDecimal']['output'];
  /** Price of the single item in the order line. */
  unitPrice: TaxedMoney;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variant?: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderLineCreateInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
  /** Product variant ID. */
  variantId: Scalars['ID']['input'];
};

/**
 * Deletes an order line from an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDelete = {
  __typename?: 'OrderLineDelete';
  errors: Array<OrderError>;
  /** A related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** An order line that was deleted. */
  orderLine?: Maybe<OrderLine>;
};

/**
 * Remove discount applied to the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountRemove = {
  __typename?: 'OrderLineDiscountRemove';
  errors: Array<OrderError>;
  /** Order which is related to line which has removed discount. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** Order line which has removed discount. */
  orderLine?: Maybe<OrderLine>;
};

/**
 * Update discount for the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountUpdate = {
  __typename?: 'OrderLineDiscountUpdate';
  errors: Array<OrderError>;
  /** Order which is related to the discounted line. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** Order line which has been discounted. */
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
};

/**
 * Updates an order line of an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineUpdate = {
  __typename?: 'OrderLineUpdate';
  errors: Array<OrderError>;
  /** Related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

/**
 * Create order lines for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLinesCreate = {
  __typename?: 'OrderLinesCreate';
  errors: Array<OrderError>;
  /** Related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** List of added order lines. */
  orderLines?: Maybe<Array<OrderLine>>;
};

/**
 * Mark order as manually paid.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid';
  errors: Array<OrderError>;
  /** Order marked as paid. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** An enumeration. */
export type OrderOriginEnum =
  | 'CHECKOUT'
  | 'DRAFT'
  | 'REISSUE';

/**
 * Refund an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderRefund = {
  __typename?: 'OrderRefund';
  errors: Array<OrderError>;
  /** A refunded order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars['ID']['input'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int']['input'];
};

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars['ID']['input'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int']['input'];
};

export type OrderRefundProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: InputMaybe<Array<OrderRefundFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of unfulfilled lines to refund. */
  orderLines?: InputMaybe<Array<OrderRefundLineInput>>;
};

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars['ID']['input'];
  /** The number of items to be returned. */
  quantity: Scalars['Int']['input'];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars['ID']['input'];
  /** The number of items to be returned. */
  quantity: Scalars['Int']['input'];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderReturnProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** List of fulfilled lines to return. */
  fulfillmentLines?: InputMaybe<Array<OrderReturnFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of unfulfilled lines to return. */
  orderLines?: InputMaybe<Array<OrderReturnLineInput>>;
  /** If true, Saleor will call refund action for all lines. */
  refund?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Order related settings from site settings. */
export type OrderSettings = {
  __typename?: 'OrderSettings';
  automaticallyConfirmAllNewOrders: Scalars['Boolean']['output'];
  automaticallyFulfillNonShippableGiftCard: Scalars['Boolean']['output'];
};

export type OrderSettingsError = {
  __typename?: 'OrderSettingsError';
  /** The error code. */
  code: OrderSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderSettingsErrorCode =
  | 'INVALID';

/**
 * Update shop order settings.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderSettingsUpdate = {
  __typename?: 'OrderSettingsUpdate';
  errors: Array<OrderSettingsError>;
  /** Order settings. */
  orderSettings?: Maybe<OrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderSortField =
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATED_AT'
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATION_DATE'
  /** Sort orders by customer. */
  | 'CUSTOMER'
  /** Sort orders by fulfillment status. */
  | 'FULFILLMENT_STATUS'
  /** Sort orders by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort orders by number. */
  | 'NUMBER'
  /** Sort orders by payment. */
  | 'PAYMENT';

export type OrderSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
};

/** An enumeration. */
export type OrderStatus =
  | 'CANCELED'
  | 'DRAFT'
  | 'FULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'PARTIALLY_RETURNED'
  | 'RETURNED'
  | 'UNCONFIRMED'
  | 'UNFULFILLED';

export type OrderStatusFilter =
  | 'CANCELED'
  | 'FULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'READY_TO_CAPTURE'
  | 'READY_TO_FULFILL'
  | 'UNCONFIRMED'
  | 'UNFULFILLED';

/**
 * Updates an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdate = {
  __typename?: 'OrderUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping';
  errors: Array<OrderError>;
  /** Order with updated shipping method. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderUpdated = Event & {
  __typename?: 'OrderUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The order the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Void an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderVoid = {
  __typename?: 'OrderVoid';
  errors: Array<OrderError>;
  /** A voided order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  __typename?: 'Page';
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Scalars['JSONString']['output'];
  created: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isPublished: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  pageType: PageType;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The page publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeAssign = {
  __typename?: 'PageAttributeAssign';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
};

/**
 * Unassign attributes from a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeUnassign = {
  __typename?: 'PageAttributeUnassign';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
};

/**
 * Deletes pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkDelete = {
  __typename?: 'PageBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

/**
 * Publish pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkPublish = {
  __typename?: 'PageBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCountableConnection = {
  __typename?: 'PageCountableConnection';
  edges: Array<PageCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageCountableEdge = {
  __typename?: 'PageCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/**
 * Creates a new page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageCreate = {
  __typename?: 'PageCreate';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the page type that page belongs to. */
  pageType: Scalars['ID']['input'];
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageCreated = Event & {
  __typename?: 'PageCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The page the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  page?: Maybe<Page>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageDelete = {
  __typename?: 'PageDelete';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageDeleted = Event & {
  __typename?: 'PageDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The page the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  page?: Maybe<Page>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PageError = {
  __typename?: 'PageError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: PageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type PageErrorCode =
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type PageFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  pageTypes?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Reorder page attribute values.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageReorderAttributeValues = {
  __typename?: 'PageReorderAttributeValues';
  errors: Array<PageError>;
  /** Page from which attribute values are reordered. */
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageSortField =
  /** Sort pages by creation date. */
  | 'CREATION_DATE'
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'PUBLISHED_AT'
  /** Sort pages by slug. */
  | 'SLUG'
  /** Sort pages by title. */
  | 'TITLE'
  /** Sort pages by visibility. */
  | 'VISIBILITY';

export type PageSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
};

export type PageTranslatableContent = Node & {
  __typename?: 'PageTranslatableContent';
  /** List of page content attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /**
   * A static page that can be manually added by a shop operator through the dashboard.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  page?: Maybe<Page>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a page.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PageTranslate = {
  __typename?: 'PageTranslate';
  errors: Array<TranslationError>;
  page?: Maybe<PageTranslatableContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type PageTranslation = Node & {
  __typename?: 'PageTranslation';
  /**
   * Translated content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageTranslationInput = {
  /**
   * Translated page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars['JSONString']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node & ObjectWithMetadata & {
  __typename?: 'PageType';
  /** Page attributes of that page type. */
  attributes?: Maybe<Array<Attribute>>;
  /**
   * Attributes that can be assigned to the page type.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  /**
   * Whether page type has pages assigned.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  hasPages?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  slug: Scalars['String']['output'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Delete page types.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeBulkDelete = {
  __typename?: 'PageTypeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageTypeCountableConnection = {
  __typename?: 'PageTypeCountableConnection';
  edges: Array<PageTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageTypeCountableEdge = {
  __typename?: 'PageTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageType;
};

/**
 * Create a new page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeCreate = {
  __typename?: 'PageTypeCreate';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Delete a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeDelete = {
  __typename?: 'PageTypeDelete';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Reorder the attributes of a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeReorderAttributes = {
  __typename?: 'PageTypeReorderAttributes';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** Page type from which attributes are reordered. */
  pageType?: Maybe<PageType>;
};

export type PageTypeSortField =
  /** Sort page types by name. */
  | 'NAME'
  /** Sort page types by slug. */
  | 'SLUG';

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort page types by the selected field. */
  field: PageTypeSortField;
};

/**
 * Update page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeUpdate = {
  __typename?: 'PageTypeUpdate';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates an existing page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageUpdate = {
  __typename?: 'PageUpdate';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageUpdated = Event & {
  __typename?: 'PageUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The page the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  page?: Maybe<Page>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Change the password of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance with a new password. */
  user?: Maybe<User>;
};

/** Represents a payment of a given type. */
export type Payment = Node & ObjectWithMetadata & {
  __typename?: 'Payment';
  /**
   * List of actions that can be performed in the current state of a payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  actions: Array<OrderAction>;
  /**
   * Maximum amount of money that can be captured.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  availableCaptureAmount?: Maybe<Money>;
  /**
   * Maximum amount of money that can be refunded.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  availableRefundAmount?: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount?: Maybe<Money>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  checkout?: Maybe<Checkout>;
  created: Scalars['DateTime']['output'];
  /** The details of the card used for this payment. */
  creditCard?: Maybe<CreditCard>;
  /**
   * IP address of the user who created the payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  customerIpAddress?: Maybe<Scalars['String']['output']>;
  gateway: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  modified: Scalars['DateTime']['output'];
  order?: Maybe<Order>;
  paymentMethodType: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  token: Scalars['String']['output'];
  /** Total amount of the payment. */
  total?: Maybe<Money>;
  /**
   * List of all transactions within this payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  transactions?: Maybe<Array<Transaction>>;
};


/** Represents a payment of a given type. */
export type PaymentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a payment of a given type. */
export type PaymentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Captures the authorized payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentCapture = {
  __typename?: 'PaymentCapture';
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** An enumeration. */
export type PaymentChargeStatusEnum =
  | 'CANCELLED'
  | 'FULLY_CHARGED'
  | 'FULLY_REFUNDED'
  | 'NOT_CHARGED'
  | 'PARTIALLY_CHARGED'
  | 'PARTIALLY_REFUNDED'
  | 'PENDING'
  | 'REFUSED';

/** Check payment balance. */
export type PaymentCheckBalance = {
  __typename?: 'PaymentCheckBalance';
  /** Response from the gateway. */
  data?: Maybe<Scalars['JSONString']['output']>;
  errors: Array<PaymentError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentCheckBalanceInput = {
  /** Information about card. */
  card: CardInput;
  /** Slug of a channel for which the data should be returned. */
  channel: Scalars['String']['input'];
  /** An ID of a payment gateway to check. */
  gatewayId: Scalars['String']['input'];
  /** Payment method name. */
  method: Scalars['String']['input'];
};

export type PaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection';
  edges: Array<PaymentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  /** The error code. */
  code: PaymentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type PaymentErrorCode =
  | 'BALANCE_CHECK_ERROR'
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHANNEL_INACTIVE'
  | 'CHECKOUT_EMAIL_NOT_SET'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_SHIPPING_METHOD'
  | 'NOT_FOUND'
  | 'NOT_SUPPORTED_GATEWAY'
  | 'NO_CHECKOUT_LINES'
  | 'PARTIAL_PAYMENT_NOT_ALLOWED'
  | 'PAYMENT_ERROR'
  | 'REQUIRED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'UNIQUE';

export type PaymentFilterInput = {
  checkouts?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Scalars['String']['output']>;
  /** Payment gateway ID. */
  id: Scalars['ID']['output'];
  /** Payment gateway name. */
  name: Scalars['String']['output'];
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  __typename?: 'PaymentInitialize';
  errors: Array<PaymentError>;
  initializedPayment?: Maybe<PaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  __typename?: 'PaymentInitialized';
  /** Initialized data by gateway. */
  data?: Maybe<Scalars['JSONString']['output']>;
  /** ID of a payment gateway. */
  gateway: Scalars['String']['output'];
  /** Payment gateway name. */
  name: Scalars['String']['output'];
};

export type PaymentInput = {
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** A gateway to use with that payment. */
  gateway: Scalars['String']['input'];
  /**
   * User public metadata.
   *
   * Added in Saleor 3.1.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Payment store type.
   *
   * Added in Saleor 3.1.
   */
  storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Refunds the captured payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  __typename?: 'PaymentSource';
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<CreditCard>;
  /** Payment gateway name. */
  gateway: Scalars['String']['output'];
  /**
   * List of public metadata items.
   *
   * Added in Saleor 3.1.
   *
   * Can be accessed without permissions.
   */
  metadata: Array<MetadataItem>;
  /** ID of stored payment method. */
  paymentMethodId?: Maybe<Scalars['String']['output']>;
};

/**
 * Voids the authorized payment.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentVoid = {
  __typename?: 'PaymentVoid';
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
  __typename?: 'Permission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
};

/** An enumeration. */
export type PermissionEnum =
  | 'HANDLE_CHECKOUTS'
  | 'HANDLE_PAYMENTS'
  | 'IMPERSONATE_USER'
  | 'MANAGE_APPS'
  | 'MANAGE_CHANNELS'
  | 'MANAGE_CHECKOUTS'
  | 'MANAGE_DISCOUNTS'
  | 'MANAGE_GIFT_CARD'
  | 'MANAGE_MENUS'
  | 'MANAGE_OBSERVABILITY'
  | 'MANAGE_ORDERS'
  | 'MANAGE_PAGES'
  | 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES'
  | 'MANAGE_PLUGINS'
  | 'MANAGE_PRODUCTS'
  | 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES'
  | 'MANAGE_SETTINGS'
  | 'MANAGE_SHIPPING'
  | 'MANAGE_STAFF'
  | 'MANAGE_TRANSLATIONS'
  | 'MANAGE_USERS';

/**
 * Create new permission group.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Group name. */
  name: Scalars['String']['input'];
};

/**
 * Delete permission group.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupError = {
  __typename?: 'PermissionGroupError';
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type PermissionGroupErrorCode =
  | 'ASSIGN_NON_STAFF_MEMBER'
  | 'CANNOT_REMOVE_FROM_LAST_GROUP'
  | 'DUPLICATED_INPUT_ITEM'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'OUT_OF_SCOPE_USER'
  | 'REQUIRED'
  | 'UNIQUE';

export type PermissionGroupFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PermissionGroupSortField =
  /** Sort permission group accounts by name. */
  | 'NAME';

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
};

/**
 * Update permission group.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Group name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Plugin. */
export type Plugin = {
  __typename?: 'Plugin';
  /** Channel-specific plugin configuration. */
  channelConfigurations: Array<PluginConfiguration>;
  /** Description of the plugin. */
  description: Scalars['String']['output'];
  /** Global configuration of the plugin (not channel-specific). */
  globalConfiguration?: Maybe<PluginConfiguration>;
  /** Identifier of the plugin. */
  id: Scalars['ID']['output'];
  /** Name of the plugin. */
  name: Scalars['String']['output'];
};

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
  __typename?: 'PluginConfiguration';
  /** Determines if plugin is active or not. */
  active: Scalars['Boolean']['output'];
  /** The channel to which the plugin configuration is assigned to. */
  channel?: Maybe<Channel>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<ConfigurationItem>>;
};

export type PluginConfigurationType =
  | 'GLOBAL'
  | 'PER_CHANNEL';

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection';
  edges: Array<PluginCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Plugin;
};

export type PluginError = {
  __typename?: 'PluginError';
  /** The error code. */
  code: PluginErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PluginErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'PLUGIN_MISCONFIGURED'
  | 'REQUIRED'
  | 'UNIQUE';

export type PluginFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
  type?: InputMaybe<PluginConfigurationType>;
};

export type PluginSortField =
  | 'IS_ACTIVE'
  | 'NAME';

export type PluginSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean']['input'];
  channels: Array<Scalars['ID']['input']>;
};

/**
 * Update plugin configuration.
 *
 * Requires one of the following permissions: MANAGE_PLUGINS.
 */
export type PluginUpdate = {
  __typename?: 'PluginUpdate';
  errors: Array<PluginError>;
  plugin?: Maybe<Plugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<PluginError>;
};

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Configuration of the plugin. */
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
};

/** An enumeration. */
export type PostalCodeRuleInclusionTypeEnum =
  | 'EXCLUDE'
  | 'INCLUDE';

/** Represents preorder settings for product variant. */
export type PreorderData = {
  __typename?: 'PreorderData';
  /** Preorder end date. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Total number of sold product variant during preorder.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalSoldUnits: Scalars['Int']['output'];
  /**
   * The global preorder threshold for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalThreshold?: Maybe<Scalars['Int']['output']>;
};

export type PreorderSettingsInput = {
  /** The end date for preorder. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The global threshold for preorder variant. */
  globalThreshold?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
  __typename?: 'PreorderThreshold';
  /** Preorder threshold for product variant in this channel. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Number of sold product variant in this channel. */
  soldUnits: Scalars['Int']['output'];
};

export type PriceInput = {
  /** Amount of money. */
  amount: Scalars['PositiveDecimal']['input'];
  /** Currency code. */
  currency: Scalars['String']['input'];
};

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Price less than or equal to. */
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  __typename?: 'Product';
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /**
   * Date when product is available for purchase.
   * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
   */
  availableForPurchase?: Maybe<Scalars['Date']['output']>;
  /** Date when product is available for purchase. */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<Category>;
  /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of availability in channels for the product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  channelListings?: Maybe<Array<ProductChannelListing>>;
  chargeTaxes: Scalars['Boolean']['output'];
  /** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<Array<Collection>>;
  created: Scalars['DateTime']['output'];
  defaultVariant?: Maybe<ProductVariant>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /**
   * Get a single product image by ID.
   * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
   */
  imageById?: Maybe<ProductImage>;
  /**
   * List of images for the product.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images?: Maybe<Array<ProductImage>>;
  /** Whether the product is in stock and visible or not. */
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  /** List of media for the product. */
  media?: Maybe<Array<ProductMedia>>;
  /** Get a single product media by ID. */
  mediaById?: Maybe<ProductMedia>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  productType: ProductType;
  rating?: Maybe<Scalars['Float']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** A type of tax. Assigned by enabled tax gateway */
  taxType?: Maybe<TaxType>;
  /** The main thumbnail for a product. */
  thumbnail?: Maybe<Image>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variants?: Maybe<Array<ProductVariant>>;
  weight?: Maybe<Weight>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssign = {
  __typename?: 'ProductAttributeAssign';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']['input'];
  /** The attribute type to be assigned as. */
  type: ProductAttributeType;
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Update attributes assigned to product variant for given product type.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssignmentUpdate = {
  __typename?: 'ProductAttributeAssignmentUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']['input'];
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection: Scalars['Boolean']['input'];
};

export type ProductAttributeType =
  | 'PRODUCT'
  | 'VARIANT';

/**
 * Un-assign attributes from a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeUnassign = {
  __typename?: 'ProductAttributeUnassign';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

/**
 * Deletes products.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkDelete = {
  __typename?: 'ProductBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  __typename?: 'ProductChannelListing';
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase?: Maybe<Scalars['Date']['output']>;
  /**
   * The product available for purchase date time.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  channel: Channel;
  /** The price of the cheapest variant (including discounts). */
  discountedPrice?: Maybe<Money>;
  id: Scalars['ID']['output'];
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  isPublished: Scalars['Boolean']['output'];
  /**
   * Range of margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin?: Maybe<Margin>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The product publication date time.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Purchase cost of product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  purchaseCost?: Maybe<MoneyRange>;
  visibleInListings: Scalars['Boolean']['output'];
};


/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
  address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
  /** List of variants to which the channel should be assigned. */
  addVariants?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
   */
  availableForPurchaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Determine if product should be available for purchase. */
  isAvailableForPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** List of variants from which the channel should be unassigned. */
  removeVariants?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductChannelListingError = {
  __typename?: 'ProductChannelListingError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of variants IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/**
 * Manage product's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductChannelListingUpdate = {
  __typename?: 'ProductChannelListingUpdate';
  errors: Array<ProductChannelListingError>;
  /** An updated product instance. */
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
  /** List of channels from which the product should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of channels to which the product should be assigned or updated. */
  updateChannels?: InputMaybe<Array<ProductChannelListingAddInput>>;
};

export type ProductCountableConnection = {
  __typename?: 'ProductCountableConnection';
  edges: Array<ProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductCountableEdge = {
  __typename?: 'ProductCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

/**
 * Creates a new product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductCreate = {
  __typename?: 'ProductCreate';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID']['input'];
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

export type ProductCreated = Event & {
  __typename?: 'ProductCreated';
  /**
   * The category of the product.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductCreatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductDelete = {
  __typename?: 'ProductDelete';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductDeleted = Event & {
  __typename?: 'ProductDeleted';
  /**
   * The category of the product.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductDeletedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductError = {
  __typename?: 'ProductError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ProductErrorCode =
  | 'ALREADY_EXISTS'
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MEDIA_ALREADY_ASSIGNED'
  | 'NOT_FOUND'
  | 'NOT_PRODUCTS_IMAGE'
  | 'NOT_PRODUCTS_VARIANT'
  | 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
  | 'PRODUCT_WITHOUT_CATEGORY'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'UNSUPPORTED_MEDIA_PROVIDER'
  | 'VARIANT_NO_DIGITAL_CONTENT';

export type ProductFieldEnum =
  | 'CATEGORY'
  | 'CHARGE_TAXES'
  | 'COLLECTIONS'
  | 'DESCRIPTION'
  | 'NAME'
  | 'PRODUCT_MEDIA'
  | 'PRODUCT_TYPE'
  | 'PRODUCT_WEIGHT'
  | 'VARIANT_ID'
  | 'VARIANT_MEDIA'
  | 'VARIANT_SKU'
  | 'VARIANT_WEIGHT';

export type ProductFilterInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  hasPreorderedVariants?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  minimalPrice?: InputMaybe<PriceRangeInput>;
  price?: InputMaybe<PriceRangeInput>;
  productTypes?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  stockAvailability?: InputMaybe<StockAvailability>;
  stocks?: InputMaybe<ProductStockFilterInput>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/** Represents a product image. */
export type ProductImage = {
  __typename?: 'ProductImage';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The ID of the image. */
  id: Scalars['ID']['output'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** Represents a product media. */
export type ProductMedia = Node & {
  __typename?: 'ProductMedia';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  oembedData: Scalars['JSONString']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
  type: ProductMediaType;
  /** The URL of the media. */
  url: Scalars['String']['output'];
};


/** Represents a product media. */
export type ProductMediaUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Deletes product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaBulkDelete = {
  __typename?: 'ProductMediaBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaCreate = {
  __typename?: 'ProductMediaCreate';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents an URL to an external media. */
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  /** ID of an product. */
  product: Scalars['ID']['input'];
};

/**
 * Deletes a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaDelete = {
  __typename?: 'ProductMediaDelete';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Changes ordering of the product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaReorder = {
  __typename?: 'ProductMediaReorder';
  errors: Array<ProductError>;
  media?: Maybe<Array<ProductMedia>>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** An enumeration. */
export type ProductMediaType =
  | 'IMAGE'
  | 'VIDEO';

/**
 * Updates a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaUpdate = {
  __typename?: 'ProductMediaUpdate';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrder = {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort products by the selected field. */
  field?: InputMaybe<ProductOrderField>;
};

export type ProductOrderField =
  /**
   * Sort products by collection. Note: This option is available only for the `Collection.products` query.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'COLLECTION'
  /** Sort products by update date. */
  | 'DATE'
  /** Sort products by update date. */
  | 'LAST_MODIFIED'
  /** Sort products by update date. */
  | 'LAST_MODIFIED_AT'
  /**
   * Sort products by a minimal price of a product's variant.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'MINIMAL_PRICE'
  /** Sort products by name. */
  | 'NAME'
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PRICE'
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort products by publication status.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED'
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED_AT'
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  | 'RANK'
  /** Sort products by rating. */
  | 'RATING'
  /** Sort products by type. */
  | 'TYPE';

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']['output']>;
  /** The discounted price range of the product variants. */
  priceRange?: Maybe<TaxedMoneyRange>;
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

/**
 * Reorder product attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductReorderAttributeValues = {
  __typename?: 'ProductReorderAttributeValues';
  errors: Array<ProductError>;
  /** Product from which attribute values are reordered. */
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductStockFilterInput = {
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ProductTranslatableContent = Node & {
  __typename?: 'ProductTranslatableContent';
  /** List of product attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  product?: Maybe<Product>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductTranslate = {
  __typename?: 'ProductTranslate';
  errors: Array<TranslationError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ProductTranslation = Node & {
  __typename?: 'ProductTranslation';
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  __typename?: 'ProductType';
  /**
   * Variant attributes of that product type with attached variant selection.
   *
   * Added in Saleor 3.1.
   */
  assignedVariantAttributes?: Maybe<Array<AssignedVariantAttribute>>;
  /**
   * List of attributes which can be assigned to this product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  hasVariants: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isDigital: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** The product type kind. */
  kind: ProductTypeKindEnum;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Product attributes of that product type. */
  productAttributes?: Maybe<Array<Attribute>>;
  /**
   * List of products of this type.
   * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
   */
  products?: Maybe<ProductCountableConnection>;
  slug: Scalars['String']['output'];
  /** A type of tax. Assigned by enabled tax gateway */
  taxType?: Maybe<TaxType>;
  /**
   * Variant attributes of that product type.
   * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
   */
  variantAttributes?: Maybe<Array<Attribute>>;
  weight?: Maybe<Weight>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};

/**
 * Deletes product types.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductTypeConfigurable =
  | 'CONFIGURABLE'
  | 'SIMPLE';

export type ProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection';
  edges: Array<ProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductType;
};

/**
 * Creates a new product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeCreate = {
  __typename?: 'ProductTypeCreate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/**
 * Deletes a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeDelete = {
  __typename?: 'ProductTypeDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeEnum =
  | 'DIGITAL'
  | 'SHIPPABLE';

export type ProductTypeFilterInput = {
  configurable?: InputMaybe<ProductTypeConfigurable>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  kind?: InputMaybe<ProductTypeKindEnum>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  productType?: InputMaybe<ProductTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ProductTypeInput = {
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if products are digital. */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** The product type kind. */
  kind?: InputMaybe<ProductTypeKindEnum>;
  /** Name of the product type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Product type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Weight of the ProductType items. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** An enumeration. */
export type ProductTypeKindEnum =
  | 'GIFT_CARD'
  | 'NORMAL';

/**
 * Reorder the attributes of a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** Product type from which attributes are reordered. */
  productType?: Maybe<ProductType>;
};

export type ProductTypeSortField =
  /** Sort products by type. */
  | 'DIGITAL'
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by shipping. */
  | 'SHIPPING_REQUIRED';

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
};

/**
 * Updates an existing product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/**
 * Updates an existing product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductUpdate = {
  __typename?: 'ProductUpdate';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductUpdated = Event & {
  __typename?: 'ProductUpdated';
  /**
   * The category of the product.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  __typename?: 'ProductVariant';
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of price information in channels for the product.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channelListings?: Maybe<Array<ProductVariantChannelListing>>;
  created: Scalars['DateTime']['output'];
  /**
   * Digital content for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent?: Maybe<DigitalContent>;
  id: Scalars['ID']['output'];
  /**
   * List of images for the product variant.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images?: Maybe<Array<ProductImage>>;
  /** Gross margin percentage value. */
  margin?: Maybe<Scalars['Int']['output']>;
  /** List of media for the product variant. */
  media?: Maybe<Array<ProductMedia>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /**
   * Preorder data for product variant.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  preorder?: Maybe<PreorderData>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<VariantPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  product: Product;
  /** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
  quantityAvailable?: Maybe<Scalars['Int']['output']>;
  quantityLimitPerCustomer?: Maybe<Scalars['Int']['output']>;
  /**
   * Total quantity ordered.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  quantityOrdered?: Maybe<Scalars['Int']['output']>;
  /**
   * Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  revenue?: Maybe<TaxedMoney>;
  sku?: Maybe<Scalars['String']['output']>;
  /**
   * Stocks for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  stocks?: Maybe<Array<Stock>>;
  trackInventory: Scalars['Boolean']['output'];
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  weight?: Maybe<Weight>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantBackInStock = Event & {
  __typename?: 'ProductVariantBackInStock';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product variant the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * Look up a warehouse.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  warehouse?: Maybe<Warehouse>;
};


export type ProductVariantBackInStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Creates product variants for a given product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<BulkProductError>;
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<BulkProductError>;
  /** List of the created variants. */
  productVariants: Array<ProductVariant>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<BulkAttributeValueInput>;
  /** List of prices assigned to channels. */
  channelListings?: InputMaybe<Array<ProductVariantChannelListingAddInput>>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Deletes product variants.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** Represents product varaint channel listing. */
export type ProductVariantChannelListing = Node & {
  __typename?: 'ProductVariantChannelListing';
  channel: Channel;
  /** Cost price of the variant. */
  costPrice?: Maybe<Money>;
  id: Scalars['ID']['output'];
  /**
   * Gross margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin?: Maybe<Scalars['Int']['output']>;
  /**
   * Preorder variant data.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  preorderThreshold?: Maybe<PreorderThreshold>;
  price?: Maybe<Money>;
};

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Cost price of the variant in channel. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * The threshold for preorder variant in channel.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  preorderThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Price of the particular variant in channel. */
  price: Scalars['PositiveDecimal']['input'];
};

/**
 * Manage product variant prices in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantChannelListingUpdate = {
  __typename?: 'ProductVariantChannelListingUpdate';
  errors: Array<ProductChannelListingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
  /** An updated product variant instance. */
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection';
  edges: Array<ProductVariantCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductVariant;
};

/**
 * Creates a new variant for a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantCreate = {
  __typename?: 'ProductVariantCreate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID']['input'];
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

export type ProductVariantCreated = Event & {
  __typename?: 'ProductVariantCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product variant the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductVariantCreatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantDelete = {
  __typename?: 'ProductVariantDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantDeleted = Event & {
  __typename?: 'ProductVariantDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product variant the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductVariantDeletedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantFilterInput = {
  isPreorder?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

export type ProductVariantOutOfStock = Event & {
  __typename?: 'ProductVariantOutOfStock';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product variant the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * Look up a warehouse.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  warehouse?: Maybe<Warehouse>;
};


export type ProductVariantOutOfStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantPreorderDeactivate = {
  __typename?: 'ProductVariantPreorderDeactivate';
  errors: Array<ProductError>;
  /** Product variant with ended preorder. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorder = {
  __typename?: 'ProductVariantReorder';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Reorder product variant attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorderAttributeValues = {
  __typename?: 'ProductVariantReorderAttributeValues';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** Product variant from which attribute values are reordered. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantSetDefault = {
  __typename?: 'ProductVariantSetDefault';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductVariantSortField =
  /** Sort products variants by last modified at. */
  | 'LAST_MODIFIED_AT';

export type ProductVariantSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort productVariants by the selected field. */
  field: ProductVariantSortField;
};

/**
 * Creates stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Delete stocks from product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete';
  errors: Array<StockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<StockError>;
};

/**
 * Update stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslatableContent = Node & {
  __typename?: 'ProductVariantTranslatableContent';
  /** List of product variant attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  productVariant?: Maybe<ProductVariant>;
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product variant.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate';
  errors: Array<TranslationError>;
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ProductVariantTranslation = Node & {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

/**
 * Updates an existing variant for product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantUpdated = Event & {
  __typename?: 'ProductVariantUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * The product variant the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductVariantUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _entities?: Maybe<Array<Maybe<_Entity>>>;
  _service?: Maybe<_Service>;
  /** Look up an address by ID. */
  address?: Maybe<Address>;
  /** Returns address validation rules. */
  addressValidationRules?: Maybe<AddressValidationData>;
  /**
   * Look up an app by ID. If ID is not provided, return the currently authenticated app.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER AUTHENTICATED_APP. The authenticated app has access to its resources. Fetching different apps requires MANAGE_APPS permission.
   */
  app?: Maybe<App>;
  /**
   * Look up an app extension by ID.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtension?: Maybe<AppExtension>;
  /**
   * List of all extensions.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtensions?: Maybe<AppExtensionCountableConnection>;
  /**
   * List of the apps.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.
   */
  apps?: Maybe<AppCountableConnection>;
  /**
   * List of all apps installations
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appsInstallations: Array<AppInstallation>;
  /** Look up an attribute by ID. */
  attribute?: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes?: Maybe<AttributeCountableConnection>;
  /** List of the shop's categories. */
  categories?: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category?: Maybe<Category>;
  /**
   * Look up a channel by ID.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channel?: Maybe<Channel>;
  /**
   * List of all channels.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channels?: Maybe<Array<Channel>>;
  /** Look up a checkout by token and slug of channel. */
  checkout?: Maybe<Checkout>;
  /**
   * List of checkout lines.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  /**
   * List of checkouts.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkouts?: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<Collection>;
  /** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<CollectionCountableConnection>;
  /**
   * List of the shop's customers.
   *
   * Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.
   */
  customers?: Maybe<UserCountableConnection>;
  /**
   * Look up digital content by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent?: Maybe<DigitalContent>;
  /**
   * List of digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContents?: Maybe<DigitalContentCountableConnection>;
  /**
   * List of draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrders?: Maybe<OrderCountableConnection>;
  /**
   * Look up a export file by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFile?: Maybe<ExportFile>;
  /**
   * List of export files.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFiles?: Maybe<ExportFileCountableConnection>;
  /**
   * Look up a gift card by ID.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCard?: Maybe<GiftCard>;
  /**
   * List of gift card currencies.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardCurrencies: Array<Scalars['String']['output']>;
  /**
   * Gift card related settings from site settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettings: GiftCardSettings;
  /**
   * List of gift card tags.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardTags?: Maybe<GiftCardTagCountableConnection>;
  /**
   * List of gift cards.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCards?: Maybe<GiftCardCountableConnection>;
  /**
   * List of activity events to display on homepage (at the moment it only contains order-events).
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  homepageEvents?: Maybe<OrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me?: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  menu?: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem?: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  menuItems?: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus?: Maybe<MenuCountableConnection>;
  /** Look up an order by ID. */
  order?: Maybe<Order>;
  /**
   * Look up an order by token.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  orderByToken?: Maybe<Order>;
  /**
   * Order related settings from site settings.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderSettings?: Maybe<OrderSettings>;
  /**
   * List of orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orders?: Maybe<OrderCountableConnection>;
  /**
   * Return the total sales amount from a specific period.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  ordersTotal?: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  page?: Maybe<Page>;
  /** Look up a page type by ID. */
  pageType?: Maybe<PageType>;
  /** List of the page types. */
  pageTypes?: Maybe<PageTypeCountableConnection>;
  /** List of the shop's pages. */
  pages?: Maybe<PageCountableConnection>;
  /**
   * Look up a payment by ID.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payment?: Maybe<Payment>;
  /**
   * List of payments.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payments?: Maybe<PaymentCountableConnection>;
  /**
   * Look up permission group by ID.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroup?: Maybe<Group>;
  /**
   * List of permission groups.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroups?: Maybe<GroupCountableConnection>;
  /**
   * Look up a plugin by ID.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugin?: Maybe<Plugin>;
  /**
   * List of plugins.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugins?: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  product?: Maybe<Product>;
  /** Look up a product type by ID. */
  productType?: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes?: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariant?: Maybe<ProductVariant>;
  /** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariants?: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<ProductCountableConnection>;
  /**
   * List of top selling products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  reportProductSales?: Maybe<ProductVariantCountableConnection>;
  /**
   * Look up a sale by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  sale?: Maybe<Sale>;
  /**
   * List of the shop's sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  sales?: Maybe<SaleCountableConnection>;
  /**
   * Look up a shipping zone by ID.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZone?: Maybe<ShippingZone>;
  /**
   * List of the shop's shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZones?: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  /**
   * List of the shop's staff users.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffUsers?: Maybe<UserCountableConnection>;
  /**
   * Look up a stock by ID
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stock?: Maybe<Stock>;
  /**
   * List of stocks.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stocks?: Maybe<StockCountableConnection>;
  /** List of all tax rates available from tax gateway. */
  taxTypes?: Maybe<Array<TaxType>>;
  /**
   * Lookup a translatable item by ID.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translation?: Maybe<TranslatableItem>;
  /**
   * Returns a list of all translatable items of a given kind.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translations?: Maybe<TranslatableItemConnection>;
  /**
   * Look up a user by ID or email address.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS.
   */
  user?: Maybe<User>;
  /**
   * Look up a voucher by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucher?: Maybe<Voucher>;
  /**
   * List of the shop's vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  vouchers?: Maybe<VoucherCountableConnection>;
  /**
   * Look up a warehouse by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouse?: Maybe<Warehouse>;
  /**
   * List of warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouses?: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  webhook?: Maybe<Webhook>;
  /**
   * List of all available webhook events.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
   */
  webhookEvents?: Maybe<Array<WebhookEvent>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload?: Maybe<Scalars['JSONString']['output']>;
};


export type Query_EntitiesArgs = {
  representations?: InputMaybe<Array<InputMaybe<Scalars['_Any']['input']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  cityArea?: InputMaybe<Scalars['String']['input']>;
  countryArea?: InputMaybe<Scalars['String']['input']>;
  countryCode: CountryCode;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAppExtensionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAppExtensionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppExtensionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AppSortingInput>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCheckoutArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CheckoutFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CheckoutSortingInput>;
};


export type QueryCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CollectionSortingInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderDraftFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExportFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ExportFileFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ExportFileSortingInput>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGiftCardTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardTagFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<GiftCardSortingInput>;
};


export type QueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuItemFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuItemSortingInput>;
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuSortingInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryOrdersTotalArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<ReportingPeriod>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPageTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageTypeSortingInput>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageSortingInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermissionGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PermissionGroupSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QueryProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductTypeSortingInput>;
};


export type QueryProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductVariantSortingInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
};


export type QueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  period: ReportingPeriod;
};


export type QuerySaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QuerySalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QueryShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingZoneFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStaffUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StaffUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryStockArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTranslationArgs = {
  id: Scalars['ID']['input'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind: TranslatableKinds;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehousesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  __typename?: 'ReducedRate';
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float']['output'];
  /** A type of goods. */
  rateType: Scalars['String']['output'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID']['input'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type ReportingPeriod =
  | 'THIS_MONTH'
  | 'TODAY';

/**
 * Request email change of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type RequestEmailChange = {
  __typename?: 'RequestEmailChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node & ObjectWithMetadata & {
  __typename?: 'Sale';
  /** List of categories this sale applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /**
   * List of channels available for the sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  channelListings?: Maybe<Array<SaleChannelListing>>;
  /**
   * List of collections this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  collections?: Maybe<CollectionCountableConnection>;
  created: Scalars['DateTime']['output'];
  /** Currency code for sale. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Sale value. */
  discountValue?: Maybe<Scalars['Float']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of products this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime']['output'];
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
  type: SaleType;
  updatedAt: Scalars['DateTime']['output'];
  /**
   * List of product variants this sale applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  variants?: Maybe<ProductVariantCountableConnection>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
};

/**
 * Deletes sales.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleBulkDelete = {
  __typename?: 'SaleBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
  __typename?: 'SaleChannelListing';
  channel: Channel;
  currency: Scalars['String']['output'];
  discountValue: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
};

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** The value of the discount. */
  discountValue: Scalars['PositiveDecimal']['input'];
};

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: InputMaybe<Array<SaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Manage sale's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleChannelListingUpdate = {
  __typename?: 'SaleChannelListingUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** An updated sale instance. */
  sale?: Maybe<Sale>;
};

export type SaleCountableConnection = {
  __typename?: 'SaleCountableConnection';
  edges: Array<SaleCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleCountableEdge = {
  __typename?: 'SaleCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Sale;
};

/**
 * Creates a new sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleCreate = {
  __typename?: 'SaleCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleCreated = Event & {
  __typename?: 'SaleCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type SaleCreatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleDelete = {
  __typename?: 'SaleDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleDeleted = Event & {
  __typename?: 'SaleDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type SaleDeletedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type SaleFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  saleType?: InputMaybe<DiscountValueTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fixed or percentage. */
  type?: InputMaybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Removes products, categories, collections from a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
};

export type SaleSortField =
  /** Sort sales by created at. */
  | 'CREATED_AT'
  /** Sort sales by end date. */
  | 'END_DATE'
  /** Sort sales by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort sales by name. */
  | 'NAME'
  /** Sort sales by start date. */
  | 'START_DATE'
  /** Sort sales by type. */
  | 'TYPE'
  /**
   * Sort sales by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'VALUE';

export type SaleSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort sales by the selected field. */
  field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
  __typename?: 'SaleTranslatableContent';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  sale?: Maybe<Sale>;
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a sale.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type SaleTranslate = {
  __typename?: 'SaleTranslate';
  errors: Array<TranslationError>;
  sale?: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type SaleTranslation = Node & {
  __typename?: 'SaleTranslation';
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
};

export type SaleType =
  | 'FIXED'
  | 'PERCENTAGE';

/**
 * Updates a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleUpdate = {
  __typename?: 'SaleUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleUpdated = Event & {
  __typename?: 'SaleUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type SaleUpdatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** Values of an attribute. */
  values: Array<AttributeValue>;
};

export type SeoInput = {
  /** SEO description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** SEO title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  __typename?: 'SetPassword';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type ShippingError = {
  __typename?: 'ShippingError';
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ShippingErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ShippingErrorCode =
  | 'ALREADY_EXISTS'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LESS_THAN_MIN'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethod = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethod';
  /** Describes if this shipping method is active and can be selected. */
  active: Scalars['Boolean']['output'];
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** Unique ID of ShippingMethod available for Order. */
  id: Scalars['ID']['output'];
  /** Maximum delivery days for this shipping method. */
  maximumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Maximum order price for this shipping method. */
  maximumOrderPrice?: Maybe<Money>;
  /**
   * Maximum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  maximumOrderWeight?: Maybe<Weight>;
  /** Message connected to this shipping method. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Minimum delivery days for this shipping method. */
  minimumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Minimal order price for this shipping method. */
  minimumOrderPrice?: Maybe<Money>;
  /**
   * Minimum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  name: Scalars['String']['output'];
  /** The price of selected shipping method. */
  price: Money;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /**
   * Type of the shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  __typename?: 'ShippingMethodChannelListing';
  channel: Channel;
  id: Scalars['ID']['output'];
  maximumOrderPrice?: Maybe<Money>;
  minimumOrderPrice?: Maybe<Money>;
  price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Shipping price of the shipping method in this channel. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: InputMaybe<Array<ShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Manage shipping method's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingMethodChannelListingUpdate = {
  __typename?: 'ShippingMethodChannelListingUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** An updated shipping method instance. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
  __typename?: 'ShippingMethodPostalCodeRule';
  /** End address range. */
  end?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Inclusion type of the postal code rule. */
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
  /** Start address range. */
  start?: Maybe<Scalars['String']['output']>;
};

export type ShippingMethodTranslatableContent = Node & {
  __typename?: 'ShippingMethodTranslatableContent';
  /**
   * Description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  __typename?: 'ShippingMethodTranslation';
  /**
   * Translated description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodType = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethodType';
  /**
   * List of channels available for the method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * List of excluded products for the shipping method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  excludedProducts?: Maybe<ProductCountableConnection>;
  /** Shipping method ID. */
  id: Scalars['ID']['output'];
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** The price of the cheapest variant (including discounts). */
  maximumOrderPrice?: Maybe<Money>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Weight>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** The price of the cheapest variant (including discounts). */
  minimumOrderPrice?: Maybe<Money>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  name: Scalars['String']['output'];
  /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
  postalCodeRules?: Maybe<Array<ShippingMethodPostalCodeRule>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /** Type of the shipping method. */
  type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeExcludedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** An enumeration. */
export type ShippingMethodTypeEnum =
  | 'PRICE'
  | 'WEIGHT';

export type ShippingPostalCodeRulesCreateInputRange = {
  /** End range of the postal code. */
  end?: InputMaybe<Scalars['String']['input']>;
  /** Start range of the postal code. */
  start: Scalars['String']['input'];
};

/**
 * Deletes shipping prices.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

/**
 * Creates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceCreated = Event & {
  __typename?: 'ShippingPriceCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The shipping method the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingMethod?: Maybe<ShippingMethodType>;
  /**
   * The shipping zone the shipping method belongs to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ShippingPriceCreatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


export type ShippingPriceCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method to delete. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceDeleted = Event & {
  __typename?: 'ShippingPriceDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The shipping method the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingMethod?: Maybe<ShippingMethodType>;
  /**
   * The shipping zone the shipping method belongs to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ShippingPriceDeletedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


export type ShippingPriceDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Exclude products from shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceExcludeProducts = {
  __typename?: 'ShippingPriceExcludeProducts';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Scalars['ID']['input']>;
};

export type ShippingPriceInput = {
  /** Postal code rules to add. */
  addPostalCodeRules?: InputMaybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
  /** Postal code rules to delete. */
  deletePostalCodeRules?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Shipping method description. */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Inclusion type for currently assigned postal code rules. */
  inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Name of the shipping method. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone this method belongs to. */
  shippingZone?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping type: price or weight based. */
  type?: InputMaybe<ShippingMethodTypeEnum>;
};

/**
 * Remove product from excluded list for shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceRemoveProductFromExclude = {
  __typename?: 'ShippingPriceRemoveProductFromExclude';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

/**
 * Creates/updates translations for a shipping method.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate';
  errors: Array<TranslationError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShippingPriceTranslationInput = {
  /**
   * Translated shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceUpdated = Event & {
  __typename?: 'ShippingPriceUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The shipping method the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingMethod?: Maybe<ShippingMethodType>;
  /**
   * The shipping zone the shipping method belongs to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ShippingPriceUpdatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


export type ShippingPriceUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & ObjectWithMetadata & {
  __typename?: 'ShippingZone';
  /** List of channels for shipping zone. */
  channels: Array<Channel>;
  /** List of countries available for the method. */
  countries: Array<CountryDisplay>;
  default: Scalars['Boolean']['output'];
  /** Description of a shipping zone. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** Lowest and highest prices for the shipping. */
  priceRange?: Maybe<MoneyRange>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods?: Maybe<Array<ShippingMethodType>>;
  /** List of warehouses for shipping zone. */
  warehouses: Array<Warehouse>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Deletes shipping zones.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection';
  edges: Array<ShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingZone;
};

/**
 * Creates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingZoneCreated = Event & {
  __typename?: 'ShippingZoneCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The shipping zone the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ShippingZoneCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneDeleted = Event & {
  __typename?: 'ShippingZoneDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The shipping zone the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ShippingZoneDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingZoneFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of channels to unassign from the shipping zone. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ShippingZoneUpdated = Event & {
  __typename?: 'ShippingZoneUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The shipping zone the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


export type ShippingZoneUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  __typename?: 'Shop';
  /**
   * Enable automatic fulfillment for all digital products.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']['output']>;
  /** List of available external authentications. */
  availableExternalAuthentications: Array<ExternalAuthentication>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Shipping methods that are available for the shop. */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  /**
   * List of all currencies supported by shop's channels.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  channelCurrencies: Array<Scalars['String']['output']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping: Scalars['Boolean']['output'];
  /** Company address. */
  companyAddress?: Maybe<Address>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']['output']>;
  /** Shop's default country. */
  defaultCountry?: Maybe<CountryDisplay>;
  /**
   * Default number of max downloads per digital content URL.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']['output']>;
  /**
   * Default number of days which digital content URL will be valid.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']['output']>;
  /**
   * Default shop's email sender's address.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderAddress?: Maybe<Scalars['String']['output']>;
  /**
   * Default shop's email sender's name.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderName?: Maybe<Scalars['String']['output']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Shop's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display prices with tax in store. */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** Shop's domain data. */
  domain: Domain;
  /**
   * Allow to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid: Scalars['Boolean']['output'];
  /**
   * Automatically approve all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove: Scalars['Boolean']['output'];
  /** Header text. */
  headerText?: Maybe<Scalars['String']['output']>;
  /** Include taxes in prices. */
  includeTaxesInPrices: Scalars['Boolean']['output'];
  /** List of the shops's supported languages. */
  languages: Array<LanguageDisplay>;
  /**
   * Default number of maximum line quantity in single checkout (per single checkout line).
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  limitQuantityPerCheckout?: Maybe<Scalars['Int']['output']>;
  /**
   * Resource limitations and current usage if any set for a shop
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  limits: LimitInfo;
  /** Shop's name. */
  name: Scalars['String']['output'];
  /** List of available permissions. */
  permissions: Array<Permission>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Scalars['String']['output']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']['output']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']['output']>;
  /**
   * List of staff notification recipients.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipients?: Maybe<Array<StaffNotificationRecipient>>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']['output']>;
  /** Returns translated shop fields for the given language code. */
  translation?: Maybe<ShopTranslation>;
  /**
   * Saleor API version.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  version: Scalars['String']['output'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  address?: InputMaybe<AddressInput>;
  channel: Scalars['String']['input'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

/**
 * Updates site domain of the shop.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopError = {
  __typename?: 'ShopError';
  /** The error code. */
  code: ShopErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ShopErrorCode =
  | 'ALREADY_EXISTS'
  | 'CANNOT_FETCH_TAX_RATES'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/**
 * Fetch tax rates.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopSettingsInput = {
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: InputMaybe<Scalars['String']['input']>;
  /** Default email sender's name. */
  defaultMailSenderName?: InputMaybe<Scalars['String']['input']>;
  /** Default weight unit. */
  defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  /** SEO description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display prices with tax in store. */
  displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable ability to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable automatic approval of all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  /** Header text. */
  headerText?: InputMaybe<Scalars['String']['input']>;
  /** Include taxes in prices. */
  includeTaxesInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  limitQuantityPerCheckout?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']['input']>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Creates/updates translations for shop settings.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate';
  errors: Array<TranslationError>;
  /** Updated shop settings. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates shop settings.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate';
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopTranslation = Node & {
  __typename?: 'ShopTranslation';
  description: Scalars['String']['output'];
  headerText: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: InputMaybe<Scalars['String']['input']>;
  /** Shop site name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes staff users.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffBulkDelete = {
  __typename?: 'StaffBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
};

/**
 * Creates a new staff user.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffCreate = {
  __typename?: 'StaffCreate';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffCreateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a staff user.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffDelete = {
  __typename?: 'StaffDelete';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffError = {
  __typename?: 'StaffError';
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** List of permission group IDs which cause the error. */
  groups?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']['output']>>;
};

export type StaffMemberStatus =
  /** User account has been activated. */
  | 'ACTIVE'
  /** User account has not been activated yet. */
  | 'DEACTIVATED';

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  __typename?: 'StaffNotificationRecipient';
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Returns email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Returns a user subscribed to email notifications. */
  user?: Maybe<User>;
};

/**
 * Creates a new staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Delete staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  /** Determines if a notification active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email address of a user subscribed to email notifications. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user subscribed to email notifications.. */
  user?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Updates a staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Updates an existing staff user.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffUpdate = {
  __typename?: 'StaffUpdate';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffUpdateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type StaffUserInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StaffMemberStatus>;
};

/** Represents stock. */
export type Stock = Node & {
  __typename?: 'Stock';
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars['Int']['output'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityAllocated: Scalars['Int']['output'];
  /**
   * Quantity reserved for checkouts.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityReserved: Scalars['Int']['output'];
  warehouse: Warehouse;
};

export type StockAvailability =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

export type StockCountableConnection = {
  __typename?: 'StockCountableConnection';
  edges: Array<StockCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StockCountableEdge = {
  __typename?: 'StockCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Stock;
};

export type StockError = {
  __typename?: 'StockError';
  /** The error code. */
  code: StockErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type StockErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type StockFilterInput = {
  quantity?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type StockInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars['Int']['input'];
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID']['input'];
};

/** Enum representing the type of a payment storage in a gateway. */
export type StorePaymentMethodEnum =
  /** Storage is disabled. The payment is not stored. */
  | 'NONE'
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  | 'OFF_SESSION'
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  | 'ON_SESSION';

export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Look up subscription event.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  event?: Maybe<Event>;
};

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  __typename?: 'TaxType';
  /** Description of the tax type. */
  description?: Maybe<Scalars['String']['output']>;
  /** External tax code used to identify given tax group. */
  taxCode?: Maybe<Scalars['String']['output']>;
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  __typename?: 'TaxedMoney';
  /** Currency code. */
  currency: Scalars['String']['output'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange';
  /** Lower bound of a price range. */
  start?: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop?: Maybe<TaxedMoney>;
};

export type TimePeriod = {
  __typename?: 'TimePeriod';
  /** The length of the period. */
  amount: Scalars['Int']['output'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
  /** The length of the period. */
  amount: Scalars['Int']['input'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

/** An enumeration. */
export type TimePeriodTypeEnum =
  | 'DAY'
  | 'MONTH'
  | 'WEEK'
  | 'YEAR';

/** An object representing a single payment. */
export type Transaction = Node & {
  __typename?: 'Transaction';
  /** Total amount of the transaction. */
  amount?: Maybe<Money>;
  created: Scalars['DateTime']['output'];
  error?: Maybe<Scalars['String']['output']>;
  gatewayResponse: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  isSuccess: Scalars['Boolean']['output'];
  kind: TransactionKind;
  payment: Payment;
  token: Scalars['String']['output'];
};

export type TransactionAction = {
  __typename?: 'TransactionAction';
  /** Determines the action type. */
  actionType: TransactionActionEnum;
  /** Transaction request amount. Null when action type is VOID. */
  amount?: Maybe<Scalars['PositiveDecimal']['output']>;
};

/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     VOID - Represents a void action.
 */
export type TransactionActionEnum =
  | 'CHARGE'
  | 'REFUND'
  | 'VOID';

export type TransactionActionRequest = Event & {
  __typename?: 'TransactionActionRequest';
  /**
   * Requested action data.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  action: TransactionAction;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * Look up a transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionCreate = {
  __typename?: 'TransactionCreate';
  errors: Array<TransactionCreateError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionCreateError = {
  __typename?: 'TransactionCreateError';
  /** The error code. */
  code: TransactionCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INCORRECT_CURRENCY'
  | 'INVALID'
  | 'METADATA_KEY_REQUIRED'
  | 'NOT_FOUND';

export type TransactionCreateInput = {
  /** Amount authorized by this transaction. */
  amountAuthorized?: InputMaybe<MoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: InputMaybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: InputMaybe<MoneyInput>;
  /** Amount voided by this transaction. */
  amountVoided?: InputMaybe<MoneyInput>;
  /** List of all possible actions for the transaction */
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  /** Payment public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Payment private metadata. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Reference of the transaction. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Status of the transaction. */
  status: Scalars['String']['input'];
  /** Payment type used for this transaction. */
  type: Scalars['String']['input'];
};

/** Represents transaction's event. */
export type TransactionEvent = Node & {
  __typename?: 'TransactionEvent';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Name of the transaction's event. */
  name?: Maybe<Scalars['String']['output']>;
  /** Reference of transaction's event. */
  reference: Scalars['String']['output'];
  /** Status of transaction's event. */
  status: TransactionStatus;
};

export type TransactionEventInput = {
  /** Name of the transaction. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Reference of the transaction. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Current status of the payment transaction. */
  status: TransactionStatus;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItem = Node & ObjectWithMetadata & {
  __typename?: 'TransactionItem';
  /** List of actions that can be performed in the current state of a payment. */
  actions: Array<TransactionActionEnum>;
  /** Total amount authorized for this payment. */
  authorizedAmount: Money;
  /** Total amount charged for this payment. */
  chargedAmount: Money;
  createdAt: Scalars['DateTime']['output'];
  /** List of all transaction's events. */
  events: Array<TransactionEvent>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Reference of transaction. */
  reference: Scalars['String']['output'];
  /** Total amount refunded for this payment. */
  refundedAmount: Money;
  /** Status of transaction. */
  status: Scalars['String']['output'];
  /** Type of transaction. */
  type: Scalars['String']['output'];
  /** Total amount voided for this payment. */
  voidedAmount: Money;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** An enumeration. */
export type TransactionKind =
  | 'ACTION_TO_CONFIRM'
  | 'AUTH'
  | 'CANCEL'
  | 'CAPTURE'
  | 'CONFIRM'
  | 'EXTERNAL'
  | 'PENDING'
  | 'REFUND'
  | 'REFUND_ONGOING'
  | 'VOID';

/**
 * Request an action for payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS, MANAGE_ORDERS.
 */
export type TransactionRequestAction = {
  __typename?: 'TransactionRequestAction';
  errors: Array<TransactionRequestActionError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionRequestActionError = {
  __typename?: 'TransactionRequestActionError';
  /** The error code. */
  code: TransactionRequestActionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionRequestActionErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK'
  | 'NOT_FOUND';

/** An enumeration. */
export type TransactionStatus =
  | 'FAILURE'
  | 'PENDING'
  | 'SUCCESS';

/**
 * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionUpdate = {
  __typename?: 'TransactionUpdate';
  errors: Array<TransactionUpdateError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionUpdateError = {
  __typename?: 'TransactionUpdateError';
  /** The error code. */
  code: TransactionUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INCORRECT_CURRENCY'
  | 'INVALID'
  | 'METADATA_KEY_REQUIRED'
  | 'NOT_FOUND';

export type TransactionUpdateInput = {
  /** Amount authorized by this transaction. */
  amountAuthorized?: InputMaybe<MoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: InputMaybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: InputMaybe<MoneyInput>;
  /** Amount voided by this transaction. */
  amountVoided?: InputMaybe<MoneyInput>;
  /** List of all possible actions for the transaction */
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  /** Payment public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Payment private metadata. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Reference of the transaction. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Status of the transaction. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Payment type used for this transaction. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type TranslatableItem = AttributeTranslatableContent | AttributeValueTranslatableContent | CategoryTranslatableContent | CollectionTranslatableContent | MenuItemTranslatableContent | PageTranslatableContent | ProductTranslatableContent | ProductVariantTranslatableContent | SaleTranslatableContent | ShippingMethodTranslatableContent | VoucherTranslatableContent;

export type TranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection';
  edges: Array<TranslatableItemEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TranslatableItem;
};

export type TranslatableKinds =
  | 'ATTRIBUTE'
  | 'ATTRIBUTE_VALUE'
  | 'CATEGORY'
  | 'COLLECTION'
  | 'MENU_ITEM'
  | 'PAGE'
  | 'PRODUCT'
  | 'SALE'
  | 'SHIPPING_METHOD'
  | 'VARIANT'
  | 'VOUCHER';

export type TranslationCreated = Event & {
  __typename?: 'TranslationCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The translation the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  translation?: Maybe<TranslationTypes>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type TranslationError = {
  __typename?: 'TranslationError';
  /** The error code. */
  code: TranslationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TranslationErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type TranslationInput = {
  /**
   * Translated description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
};

export type TranslationTypes = AttributeTranslation | AttributeValueTranslation | CategoryTranslation | CollectionTranslation | MenuItemTranslation | PageTranslation | ProductTranslation | ProductVariantTranslation | SaleTranslation | ShippingMethodTranslation | VoucherTranslation;

export type TranslationUpdated = Event & {
  __typename?: 'TranslationUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The translation the event relates to.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  translation?: Maybe<TranslationTypes>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvoiceInput = {
  /** Invoice number */
  number?: InputMaybe<Scalars['String']['input']>;
  /** URL of an invoice to download. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type UpdateMetadata = {
  __typename?: 'UpdateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type UpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type UploadError = {
  __typename?: 'UploadError';
  /** The error code. */
  code: UploadErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type UploadErrorCode =
  | 'GRAPHQL_ERROR';

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  __typename?: 'User';
  /** List of all user's addresses. */
  addresses?: Maybe<Array<Address>>;
  avatar?: Maybe<Image>;
  /**
   * Returns the last open checkout of this user.
   * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
   */
  checkout?: Maybe<Checkout>;
  /** Returns the checkout ID's assigned to this user. */
  checkoutIds?: Maybe<Array<Scalars['ID']['output']>>;
  /**
   * Returns the checkout UUID's assigned to this user.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead.
   */
  checkoutTokens?: Maybe<Array<Scalars['UUID']['output']>>;
  dateJoined: Scalars['DateTime']['output'];
  defaultBillingAddress?: Maybe<Address>;
  defaultShippingAddress?: Maybe<Address>;
  /** List of user's permission groups which user can manage. */
  editableGroups?: Maybe<Array<Group>>;
  email: Scalars['String']['output'];
  /**
   * List of events associated with the user.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  events?: Maybe<Array<CustomerEvent>>;
  firstName: Scalars['String']['output'];
  /** List of the user gift cards. */
  giftCards?: Maybe<GiftCardCountableConnection>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  /** User language code. */
  languageCode: LanguageCodeEnum;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * A note about the customer.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  note?: Maybe<Scalars['String']['output']>;
  /** List of user's orders. Requires one of the following permissions: MANAGE_STAFF, OWNER. */
  orders?: Maybe<OrderCountableConnection>;
  /** List of user's permission groups. */
  permissionGroups?: Maybe<Array<Group>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of stored payment sources. */
  storedPaymentSources?: Maybe<Array<PaymentSource>>;
  updatedAt: Scalars['DateTime']['output'];
  /** List of user's permissions. */
  userPermissions?: Maybe<Array<UserPermission>>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserCheckoutIdsArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user data. */
export type UserMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user data. */
export type UserPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a user avatar. Only for staff members.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarDelete = {
  __typename?: 'UserAvatarDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/**
 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/**
 * Activate or deactivate users.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type UserBulkSetActive = {
  __typename?: 'UserBulkSetActive';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AccountError>;
};

export type UserCountableConnection = {
  __typename?: 'UserCountableConnection';
  edges: Array<UserCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserCountableEdge = {
  __typename?: 'UserCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserCreateInput = {
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UserPermission = {
  __typename?: 'UserPermission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups?: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID']['input'];
};

export type UserSortField =
  /** Sort users by created at. */
  | 'CREATED_AT'
  /** Sort users by email. */
  | 'EMAIL'
  /** Sort users by first name. */
  | 'FIRST_NAME'
  /** Sort users by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort users by last name. */
  | 'LAST_NAME'
  /** Sort users by order count. */
  | 'ORDER_COUNT';

export type UserSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  __typename?: 'VAT';
  /** Country code. */
  countryCode: Scalars['String']['output'];
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<ReducedRate>;
  /** Standard VAT rate in percent. */
  standardRate?: Maybe<Scalars['Float']['output']>;
};

export type VariantAttributeScope =
  | 'ALL'
  | 'NOT_VARIANT_SELECTION'
  | 'VARIANT_SELECTION';

/**
 * Assign an media to a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaAssign = {
  __typename?: 'VariantMediaAssign';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Unassign an media from a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaUnassign = {
  __typename?: 'VariantMediaUnassign';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  __typename?: 'VariantPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']['output']>;
  /** The price, with any discount subtracted. */
  price?: Maybe<TaxedMoney>;
  /** The discounted price in the local currency. */
  priceLocalCurrency?: Maybe<TaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted?: Maybe<TaxedMoney>;
};

/** Verify JWT token. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** JWT payload. */
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  /** User assigned to token. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type VolumeUnitsEnum =
  | 'ACRE_FT'
  | 'ACRE_IN'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  | 'FL_OZ'
  | 'LITER'
  | 'PINT'
  | 'QT';

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & ObjectWithMetadata & {
  __typename?: 'Voucher';
  applyOncePerCustomer: Scalars['Boolean']['output'];
  applyOncePerOrder: Scalars['Boolean']['output'];
  /** List of categories this voucher applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /**
   * List of availability in channels for the voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  channelListings?: Maybe<Array<VoucherChannelListing>>;
  code: Scalars['String']['output'];
  /**
   * List of collections this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries?: Maybe<Array<CountryDisplay>>;
  /** Currency code for voucher. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Voucher value. */
  discountValue?: Maybe<Scalars['Float']['output']>;
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum order value to apply voucher. */
  minSpent?: Maybe<Money>;
  name?: Maybe<Scalars['String']['output']>;
  onlyForStaff: Scalars['Boolean']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of products this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime']['output'];
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  usageLimit?: Maybe<Scalars['Int']['output']>;
  used: Scalars['Int']['output'];
  /**
   * List of product variants this voucher applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  variants?: Maybe<ProductVariantCountableConnection>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
};

/**
 * Deletes vouchers.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  __typename?: 'VoucherChannelListing';
  channel: Channel;
  currency: Scalars['String']['output'];
  discountValue: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Value of the voucher. */
  discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: InputMaybe<Array<VoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Manage voucher's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherChannelListingUpdate = {
  __typename?: 'VoucherChannelListingUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** An updated voucher instance. */
  voucher?: Maybe<Voucher>;
};

export type VoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection';
  edges: Array<VoucherCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Voucher;
};

/**
 * Creates a new voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherCreate = {
  __typename?: 'VoucherCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherCreated = Event & {
  __typename?: 'VoucherCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * The voucher the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  voucher?: Maybe<Voucher>;
};


export type VoucherCreatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherDelete = {
  __typename?: 'VoucherDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherDeleted = Event & {
  __typename?: 'VoucherDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * The voucher the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  voucher?: Maybe<Voucher>;
};


export type VoucherDeletedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type VoucherDiscountType =
  | 'FIXED'
  | 'PERCENTAGE'
  | 'SHIPPING';

export type VoucherFilterInput = {
  discountType?: InputMaybe<Array<VoucherDiscountType>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  timesUsed?: InputMaybe<IntRangeInput>;
};

export type VoucherInput = {
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Categories discounted by the voucher. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Code to use the voucher. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Collections discounted by the voucher. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Choices: fixed or percentage. */
  discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Voucher can be used only by staff user. */
  onlyForStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Products discounted by the voucher. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: InputMaybe<VoucherTypeEnum>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Variants discounted by the voucher.
   *
   * Added in Saleor 3.1.
   */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Removes products, categories, collections from a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
};

export type VoucherSortField =
  /** Sort vouchers by code. */
  | 'CODE'
  /** Sort vouchers by end date. */
  | 'END_DATE'
  /**
   * Sort vouchers by minimum spent amount.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'MINIMUM_SPENT_AMOUNT'
  /** Sort vouchers by start date. */
  | 'START_DATE'
  /** Sort vouchers by type. */
  | 'TYPE'
  /** Sort vouchers by usage limit. */
  | 'USAGE_LIMIT'
  /**
   * Sort vouchers by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'VALUE';

export type VoucherSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
  __typename?: 'VoucherTranslatableContent';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a voucher.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type VoucherTranslate = {
  __typename?: 'VoucherTranslate';
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  __typename?: 'VoucherTranslation';
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
};

export type VoucherTypeEnum =
  | 'ENTIRE_ORDER'
  | 'SHIPPING'
  | 'SPECIFIC_PRODUCT';

/**
 * Updates a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherUpdate = {
  __typename?: 'VoucherUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherUpdated = Event & {
  __typename?: 'VoucherUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * The voucher the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  voucher?: Maybe<Voucher>;
};


export type VoucherUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents warehouse. */
export type Warehouse = Node & ObjectWithMetadata & {
  __typename?: 'Warehouse';
  address: Address;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
  /**
   * Warehouse company name.
   * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
   */
  companyName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String']['output'];
};


/** Represents warehouse. */
export type WarehouseMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents warehouse. */
export type WarehouseMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** An enumeration. */
export type WarehouseClickAndCollectOptionEnum =
  | 'ALL'
  | 'DISABLED'
  | 'LOCAL';

export type WarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection';
  edges: Array<WarehouseCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type WarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Warehouse;
};

/**
 * Creates new warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseCreate = {
  __typename?: 'WarehouseCreate';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseCreateInput = {
  /** Address of the warehouse. */
  address: AddressInput;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse name. */
  name: Scalars['String']['input'];
  /** Shipping zones supported by the warehouse. */
  shippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type WarehouseCreated = Event & {
  __typename?: 'WarehouseCreated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * The warehouse the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  warehouse?: Maybe<Warehouse>;
};

/**
 * Deletes selected warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseDelete = {
  __typename?: 'WarehouseDelete';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseDeleted = Event & {
  __typename?: 'WarehouseDeleted';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * The warehouse the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
  __typename?: 'WarehouseError';
  /** The error code. */
  code: WarehouseErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type WarehouseErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type WarehouseFilterInput = {
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Add shipping zone to given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

/**
 * Remove shipping zone from given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseSortField =
  /** Sort warehouses by name. */
  | 'NAME';

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
};

/**
 * Updates given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseUpdate = {
  __typename?: 'WarehouseUpdate';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseUpdateInput = {
  /** Address of the warehouse. */
  address?: InputMaybe<AddressInput>;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * Visibility of warehouse stocks.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Warehouse name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type WarehouseUpdated = Event & {
  __typename?: 'WarehouseUpdated';
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * The warehouse the event relates to.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  warehouse?: Maybe<Warehouse>;
};

/** Webhook. */
export type Webhook = Node & {
  __typename?: 'Webhook';
  app: App;
  /** List of asynchronous webhook events. */
  asyncEvents: Array<WebhookEventAsync>;
  /** Event deliveries. */
  eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
  /**
   * List of webhook events.
   * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events: Array<WebhookEvent>;
  id: Scalars['ID']['output'];
  /** Informs if webhook is activated. */
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Used to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']['output']>;
  /** Used to define payloads for specific events. */
  subscriptionQuery?: Maybe<Scalars['String']['output']>;
  /** List of synchronous webhook events. */
  syncEvents: Array<WebhookEventSync>;
  /** Target URL for webhook. */
  targetUrl: Scalars['String']['output'];
};


/** Webhook. */
export type WebhookEventDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventDeliveryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventDeliverySortingInput>;
};

/**
 * Creates a new webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookCreate = {
  __typename?: 'WebhookCreate';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookCreateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']['input']>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the webhook. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  query?: InputMaybe<Scalars['String']['input']>;
  /** The secret key used to create a hash signature with each payload. */
  secretKey?: InputMaybe<Scalars['String']['input']>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookDelete = {
  __typename?: 'WebhookDelete';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookError = {
  __typename?: 'WebhookError';
  /** The error code. */
  code: WebhookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type WebhookErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/** Webhook event. */
export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
};

/** Asynchronous webhook event. */
export type WebhookEventAsync = {
  __typename?: 'WebhookEventAsync';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeAsyncEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
};

/** Synchronous webhook event. */
export type WebhookEventSync = {
  __typename?: 'WebhookEventSync';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeSyncEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
};

/** Enum determining type of webhook. */
export type WebhookEventTypeAsyncEnum =
  /** All the events. */
  | 'ANY_EVENTS'
  /** An app deleted. */
  | 'APP_DELETED'
  /** A new app installed. */
  | 'APP_INSTALLED'
  /** An app status is changed. */
  | 'APP_STATUS_CHANGED'
  /** An app updated. */
  | 'APP_UPDATED'
  /** A new category created. */
  | 'CATEGORY_CREATED'
  /** A category is deleted. */
  | 'CATEGORY_DELETED'
  /** A category is updated. */
  | 'CATEGORY_UPDATED'
  /** A new channel created. */
  | 'CHANNEL_CREATED'
  /** A channel is deleted. */
  | 'CHANNEL_DELETED'
  /** A channel status is changed. */
  | 'CHANNEL_STATUS_CHANGED'
  /** A channel is updated. */
  | 'CHANNEL_UPDATED'
  /** A new checkout is created. */
  | 'CHECKOUT_CREATED'
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | 'CHECKOUT_UPDATED'
  /** A new collection is created. */
  | 'COLLECTION_CREATED'
  /** A collection is deleted. */
  | 'COLLECTION_DELETED'
  /** A collection is updated. */
  | 'COLLECTION_UPDATED'
  /** A new customer account is created. */
  | 'CUSTOMER_CREATED'
  /** A customer account is updated. */
  | 'CUSTOMER_UPDATED'
  | 'DRAFT_ORDER_CREATED'
  | 'DRAFT_ORDER_DELETED'
  | 'DRAFT_ORDER_UPDATED'
  /** A fulfillment is cancelled. */
  | 'FULFILLMENT_CANCELED'
  /** A new fulfillment is created. */
  | 'FULFILLMENT_CREATED'
  /** A new gift card created. */
  | 'GIFT_CARD_CREATED'
  /** A gift card is deleted. */
  | 'GIFT_CARD_DELETED'
  /** A gift card status is changed. */
  | 'GIFT_CARD_STATUS_CHANGED'
  /** A gift card is updated. */
  | 'GIFT_CARD_UPDATED'
  /** An invoice is deleted. */
  | 'INVOICE_DELETED'
  /** An invoice for order requested. */
  | 'INVOICE_REQUESTED'
  /** Invoice has been sent. */
  | 'INVOICE_SENT'
  /** A new menu created. */
  | 'MENU_CREATED'
  /** A menu is deleted. */
  | 'MENU_DELETED'
  /** A new menu item created. */
  | 'MENU_ITEM_CREATED'
  /** A menu item is deleted. */
  | 'MENU_ITEM_DELETED'
  /** A menu item is updated. */
  | 'MENU_ITEM_UPDATED'
  /** A menu is updated. */
  | 'MENU_UPDATED'
  /** User notification triggered. */
  | 'NOTIFY_USER'
  /** An observability event is created. */
  | 'OBSERVABILITY'
  /** An order is cancelled. */
  | 'ORDER_CANCELLED'
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | 'ORDER_CONFIRMED'
  /** A new order is placed. */
  | 'ORDER_CREATED'
  /** An order is fulfilled. */
  | 'ORDER_FULFILLED'
  /** Payment is made and an order is fully paid. */
  | 'ORDER_FULLY_PAID'
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | 'ORDER_UPDATED'
  /** A new page is created. */
  | 'PAGE_CREATED'
  /** A page is deleted. */
  | 'PAGE_DELETED'
  /** A page is updated. */
  | 'PAGE_UPDATED'
  /** A new product is created. */
  | 'PRODUCT_CREATED'
  /** A product is deleted. */
  | 'PRODUCT_DELETED'
  /** A product is updated. */
  | 'PRODUCT_UPDATED'
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  /** A new product variant is created. */
  | 'PRODUCT_VARIANT_CREATED'
  /** A product variant is deleted. */
  | 'PRODUCT_VARIANT_DELETED'
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  /** A product variant is updated. */
  | 'PRODUCT_VARIANT_UPDATED'
  | 'SALE_CREATED'
  | 'SALE_DELETED'
  | 'SALE_UPDATED'
  /** A new shipping price is created. */
  | 'SHIPPING_PRICE_CREATED'
  /** A shipping price is deleted. */
  | 'SHIPPING_PRICE_DELETED'
  /** A shipping price is updated. */
  | 'SHIPPING_PRICE_UPDATED'
  /** A new shipping zone is created. */
  | 'SHIPPING_ZONE_CREATED'
  /** A shipping zone is deleted. */
  | 'SHIPPING_ZONE_DELETED'
  /** A shipping zone is updated. */
  | 'SHIPPING_ZONE_UPDATED'
  | 'TRANSACTION_ACTION_REQUEST'
  | 'TRANSLATION_CREATED'
  | 'TRANSLATION_UPDATED'
  /** A new voucher created. */
  | 'VOUCHER_CREATED'
  /** A voucher is deleted. */
  | 'VOUCHER_DELETED'
  /** A voucher is updated. */
  | 'VOUCHER_UPDATED'
  /** A new warehouse created. */
  | 'WAREHOUSE_CREATED'
  /** A warehouse is deleted. */
  | 'WAREHOUSE_DELETED'
  /** A warehouse is updated. */
  | 'WAREHOUSE_UPDATED';

/** Enum determining type of webhook. */
export type WebhookEventTypeEnum =
  /** All the events. */
  | 'ANY_EVENTS'
  /** An app deleted. */
  | 'APP_DELETED'
  /** A new app installed. */
  | 'APP_INSTALLED'
  /** An app status is changed. */
  | 'APP_STATUS_CHANGED'
  /** An app updated. */
  | 'APP_UPDATED'
  /** A new category created. */
  | 'CATEGORY_CREATED'
  /** A category is deleted. */
  | 'CATEGORY_DELETED'
  /** A category is updated. */
  | 'CATEGORY_UPDATED'
  /** A new channel created. */
  | 'CHANNEL_CREATED'
  /** A channel is deleted. */
  | 'CHANNEL_DELETED'
  /** A channel status is changed. */
  | 'CHANNEL_STATUS_CHANGED'
  /** A channel is updated. */
  | 'CHANNEL_UPDATED'
  /** A new checkout is created. */
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_FILTER_SHIPPING_METHODS'
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | 'CHECKOUT_UPDATED'
  /** A new collection is created. */
  | 'COLLECTION_CREATED'
  /** A collection is deleted. */
  | 'COLLECTION_DELETED'
  /** A collection is updated. */
  | 'COLLECTION_UPDATED'
  /** A new customer account is created. */
  | 'CUSTOMER_CREATED'
  /** A customer account is updated. */
  | 'CUSTOMER_UPDATED'
  | 'DRAFT_ORDER_CREATED'
  | 'DRAFT_ORDER_DELETED'
  | 'DRAFT_ORDER_UPDATED'
  /** A fulfillment is cancelled. */
  | 'FULFILLMENT_CANCELED'
  /** A new fulfillment is created. */
  | 'FULFILLMENT_CREATED'
  /** A new gift card created. */
  | 'GIFT_CARD_CREATED'
  /** A gift card is deleted. */
  | 'GIFT_CARD_DELETED'
  /** A gift card status is changed. */
  | 'GIFT_CARD_STATUS_CHANGED'
  /** A gift card is updated. */
  | 'GIFT_CARD_UPDATED'
  /** An invoice is deleted. */
  | 'INVOICE_DELETED'
  /** An invoice for order requested. */
  | 'INVOICE_REQUESTED'
  /** Invoice has been sent. */
  | 'INVOICE_SENT'
  /** A new menu created. */
  | 'MENU_CREATED'
  /** A menu is deleted. */
  | 'MENU_DELETED'
  /** A new menu item created. */
  | 'MENU_ITEM_CREATED'
  /** A menu item is deleted. */
  | 'MENU_ITEM_DELETED'
  /** A menu item is updated. */
  | 'MENU_ITEM_UPDATED'
  /** A menu is updated. */
  | 'MENU_UPDATED'
  /** User notification triggered. */
  | 'NOTIFY_USER'
  /** An observability event is created. */
  | 'OBSERVABILITY'
  /** An order is cancelled. */
  | 'ORDER_CANCELLED'
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | 'ORDER_CONFIRMED'
  /** A new order is placed. */
  | 'ORDER_CREATED'
  | 'ORDER_FILTER_SHIPPING_METHODS'
  /** An order is fulfilled. */
  | 'ORDER_FULFILLED'
  /** Payment is made and an order is fully paid. */
  | 'ORDER_FULLY_PAID'
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | 'ORDER_UPDATED'
  /** A new page is created. */
  | 'PAGE_CREATED'
  /** A page is deleted. */
  | 'PAGE_DELETED'
  /** A page is updated. */
  | 'PAGE_UPDATED'
  | 'PAYMENT_AUTHORIZE'
  | 'PAYMENT_CAPTURE'
  | 'PAYMENT_CONFIRM'
  | 'PAYMENT_LIST_GATEWAYS'
  | 'PAYMENT_PROCESS'
  | 'PAYMENT_REFUND'
  | 'PAYMENT_VOID'
  /** A new product is created. */
  | 'PRODUCT_CREATED'
  /** A product is deleted. */
  | 'PRODUCT_DELETED'
  /** A product is updated. */
  | 'PRODUCT_UPDATED'
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  /** A new product variant is created. */
  | 'PRODUCT_VARIANT_CREATED'
  /** A product variant is deleted. */
  | 'PRODUCT_VARIANT_DELETED'
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  /** A product variant is updated. */
  | 'PRODUCT_VARIANT_UPDATED'
  | 'SALE_CREATED'
  | 'SALE_DELETED'
  | 'SALE_UPDATED'
  | 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
  /** A new shipping price is created. */
  | 'SHIPPING_PRICE_CREATED'
  /** A shipping price is deleted. */
  | 'SHIPPING_PRICE_DELETED'
  /** A shipping price is updated. */
  | 'SHIPPING_PRICE_UPDATED'
  /** A new shipping zone is created. */
  | 'SHIPPING_ZONE_CREATED'
  /** A shipping zone is deleted. */
  | 'SHIPPING_ZONE_DELETED'
  /** A shipping zone is updated. */
  | 'SHIPPING_ZONE_UPDATED'
  | 'TRANSACTION_ACTION_REQUEST'
  | 'TRANSLATION_CREATED'
  | 'TRANSLATION_UPDATED'
  /** A new voucher created. */
  | 'VOUCHER_CREATED'
  /** A voucher is deleted. */
  | 'VOUCHER_DELETED'
  /** A voucher is updated. */
  | 'VOUCHER_UPDATED'
  /** A new warehouse created. */
  | 'WAREHOUSE_CREATED'
  /** A warehouse is deleted. */
  | 'WAREHOUSE_DELETED'
  /** A warehouse is updated. */
  | 'WAREHOUSE_UPDATED';

/** Enum determining type of webhook. */
export type WebhookEventTypeSyncEnum =
  | 'CHECKOUT_FILTER_SHIPPING_METHODS'
  | 'ORDER_FILTER_SHIPPING_METHODS'
  | 'PAYMENT_AUTHORIZE'
  | 'PAYMENT_CAPTURE'
  | 'PAYMENT_CONFIRM'
  | 'PAYMENT_LIST_GATEWAYS'
  | 'PAYMENT_PROCESS'
  | 'PAYMENT_REFUND'
  | 'PAYMENT_VOID'
  | 'SHIPPING_LIST_METHODS_FOR_CHECKOUT';

/** An enumeration. */
export type WebhookSampleEventTypeEnum =
  | 'APP_DELETED'
  | 'APP_INSTALLED'
  | 'APP_STATUS_CHANGED'
  | 'APP_UPDATED'
  | 'CATEGORY_CREATED'
  | 'CATEGORY_DELETED'
  | 'CATEGORY_UPDATED'
  | 'CHANNEL_CREATED'
  | 'CHANNEL_DELETED'
  | 'CHANNEL_STATUS_CHANGED'
  | 'CHANNEL_UPDATED'
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_UPDATED'
  | 'COLLECTION_CREATED'
  | 'COLLECTION_DELETED'
  | 'COLLECTION_UPDATED'
  | 'CUSTOMER_CREATED'
  | 'CUSTOMER_UPDATED'
  | 'DRAFT_ORDER_CREATED'
  | 'DRAFT_ORDER_DELETED'
  | 'DRAFT_ORDER_UPDATED'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_CREATED'
  | 'GIFT_CARD_CREATED'
  | 'GIFT_CARD_DELETED'
  | 'GIFT_CARD_STATUS_CHANGED'
  | 'GIFT_CARD_UPDATED'
  | 'INVOICE_DELETED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_SENT'
  | 'MENU_CREATED'
  | 'MENU_DELETED'
  | 'MENU_ITEM_CREATED'
  | 'MENU_ITEM_DELETED'
  | 'MENU_ITEM_UPDATED'
  | 'MENU_UPDATED'
  | 'NOTIFY_USER'
  | 'OBSERVABILITY'
  | 'ORDER_CANCELLED'
  | 'ORDER_CONFIRMED'
  | 'ORDER_CREATED'
  | 'ORDER_FULFILLED'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_UPDATED'
  | 'PAGE_CREATED'
  | 'PAGE_DELETED'
  | 'PAGE_UPDATED'
  | 'PRODUCT_CREATED'
  | 'PRODUCT_DELETED'
  | 'PRODUCT_UPDATED'
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  | 'PRODUCT_VARIANT_CREATED'
  | 'PRODUCT_VARIANT_DELETED'
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  | 'PRODUCT_VARIANT_UPDATED'
  | 'SALE_CREATED'
  | 'SALE_DELETED'
  | 'SALE_UPDATED'
  | 'SHIPPING_PRICE_CREATED'
  | 'SHIPPING_PRICE_DELETED'
  | 'SHIPPING_PRICE_UPDATED'
  | 'SHIPPING_ZONE_CREATED'
  | 'SHIPPING_ZONE_DELETED'
  | 'SHIPPING_ZONE_UPDATED'
  | 'TRANSACTION_ACTION_REQUEST'
  | 'TRANSLATION_CREATED'
  | 'TRANSLATION_UPDATED'
  | 'VOUCHER_CREATED'
  | 'VOUCHER_DELETED'
  | 'VOUCHER_UPDATED'
  | 'WAREHOUSE_CREATED'
  | 'WAREHOUSE_DELETED'
  | 'WAREHOUSE_UPDATED';

/**
 * Updates a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type WebhookUpdate = {
  __typename?: 'WebhookUpdate';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookUpdateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']['input']>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The new name of the webhook. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Use to create a hash signature with each payload. */
  secretKey?: InputMaybe<Scalars['String']['input']>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  __typename?: 'Weight';
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float']['output'];
};

/** An enumeration. */
export type WeightUnitsEnum =
  | 'G'
  | 'KG'
  | 'LB'
  | 'OZ'
  | 'TONNE';

/** _Entity union as defined by Federation spec. */
export type _Entity = Address | App | Category | Collection | Group | PageType | Product | ProductMedia | ProductType | ProductVariant | User;

/** _Service manifest as defined by Federation spec. */
export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type AttributeWithMappingFragmentFragment = { __typename?: 'Attribute', id: string, name?: string | null, slug?: string | null };

export type BasicProductDataFragment = { __typename?: 'ProductVariant', id: string, name: string, sku?: string | null, quantityAvailable?: number | null, product: { __typename?: 'Product', id: string }, weight?: { __typename?: 'Weight', unit: WeightUnitsEnum, value: number } | null, pricing?: { __typename?: 'VariantPricingInfo', priceUndiscounted?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, price?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null } | null };

export type CategoryWithMappingFragmentFragment = { __typename?: 'Category', id: string, name: string, googleCategoryId?: string | null, parent?: { __typename?: 'Category', name: string, parent?: { __typename?: 'Category', name: string } | null } | null };

export type GoogleFeedProductVariantFragment = { __typename?: 'ProductVariant', id: string, name: string, sku?: string | null, quantityAvailable?: number | null, weight?: { __typename?: 'Weight', unit: WeightUnitsEnum, value: number } | null, pricing?: { __typename?: 'VariantPricingInfo', priceUndiscounted?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, price?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null } | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', id: string }, values: Array<{ __typename?: 'AttributeValue', value?: string | null, name?: string | null }> }>, product: { __typename?: 'Product', id: string, name: string, slug: string, description?: string | null, seoDescription?: string | null, productType: { __typename?: 'ProductType', isShippingRequired: boolean }, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string, type: ProductMediaType }> | null, variants?: Array<{ __typename?: 'ProductVariant', id: string, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string, type: ProductMediaType }> | null }> | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', id: string }, values: Array<{ __typename?: 'AttributeValue', value?: string | null, name?: string | null }> }>, thumbnail?: { __typename?: 'Image', url: string } | null, category?: { __typename?: 'Category', id: string, name: string, googleCategoryId?: string | null } | null } };

export type ProductAttributesFragment = { __typename?: 'ProductVariant', id: string, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', id: string }, values: Array<{ __typename?: 'AttributeValue', value?: string | null, name?: string | null }> }> };

export type RelatedProductsFragment = { __typename?: 'Product', id: string, name: string, slug: string, description?: string | null, seoDescription?: string | null, productType: { __typename?: 'ProductType', isShippingRequired: boolean }, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string, type: ProductMediaType }> | null, variants?: Array<{ __typename?: 'ProductVariant', id: string, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string, type: ProductMediaType }> | null }> | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', id: string }, values: Array<{ __typename?: 'AttributeValue', value?: string | null, name?: string | null }> }>, thumbnail?: { __typename?: 'Image', url: string } | null, category?: { __typename?: 'Category', id: string, name: string, googleCategoryId?: string | null } | null };

export type DeleteAppMetadataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type DeleteAppMetadataMutation = { __typename?: 'Mutation', deletePrivateMetadata?: { __typename?: 'DeletePrivateMetadata', item?: { __typename?: 'App', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Attribute', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Category', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Checkout', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Collection', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'DigitalContent', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Fulfillment', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'GiftCard', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Invoice', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Menu', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'MenuItem', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Order', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Page', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'PageType', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Payment', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Product', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ProductType', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ProductVariant', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Sale', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ShippingMethod', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ShippingMethodType', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ShippingZone', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'TransactionItem', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'User', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Voucher', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Warehouse', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | null } | null };

export type UpdateAppMetadataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: Array<MetadataInput> | MetadataInput;
}>;


export type UpdateAppMetadataMutation = { __typename?: 'Mutation', updatePrivateMetadata?: { __typename?: 'UpdatePrivateMetadata', item?: { __typename?: 'App', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Attribute', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Category', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Checkout', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Collection', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'DigitalContent', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Fulfillment', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'GiftCard', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Invoice', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Menu', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'MenuItem', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Order', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Page', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'PageType', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Payment', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Product', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ProductType', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ProductVariant', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Sale', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ShippingMethod', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ShippingMethodType', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'ShippingZone', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'TransactionItem', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'User', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Voucher', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | { __typename?: 'Warehouse', privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | null } | null };

export type UpdateCategoryMappingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  googleCategoryId: Scalars['String']['input'];
}>;


export type UpdateCategoryMappingMutation = { __typename?: 'Mutation', updateMetadata?: { __typename?: 'UpdateMetadata', errors: Array<{ __typename?: 'MetadataError', message?: string | null }> } | null };

export type FetchAppDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAppDetailsQuery = { __typename?: 'Query', app?: { __typename?: 'App', id: string, privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | null };

export type FetchAttributesWithMappingQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchAttributesWithMappingQuery = { __typename?: 'Query', attributes?: { __typename?: 'AttributeCountableConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename?: 'AttributeCountableEdge', node: { __typename?: 'Attribute', id: string, name?: string | null, slug?: string | null } }> } | null };

export type FetchProductVariantsDataQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
}>;


export type FetchProductVariantsDataQuery = { __typename?: 'Query', productVariants?: { __typename?: 'ProductVariantCountableConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename?: 'ProductVariantCountableEdge', node: { __typename?: 'ProductVariant', id: string, name: string, sku?: string | null, quantityAvailable?: number | null, product: { __typename?: 'Product', id: string }, weight?: { __typename?: 'Weight', unit: WeightUnitsEnum, value: number } | null, pricing?: { __typename?: 'VariantPricingInfo', priceUndiscounted?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null, price?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', currency: string, amount: number } } | null } | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', id: string }, values: Array<{ __typename?: 'AttributeValue', value?: string | null, name?: string | null }> }> } }> } | null };

export type FetchCategoriesWithMappingQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchCategoriesWithMappingQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryCountableConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename?: 'CategoryCountableEdge', node: { __typename?: 'Category', id: string, name: string, googleCategoryId?: string | null, parent?: { __typename?: 'Category', name: string, parent?: { __typename?: 'Category', name: string } | null } | null } }> } | null };

export type FetchProductCursorsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
}>;


export type FetchProductCursorsQuery = { __typename?: 'Query', productVariants?: { __typename?: 'ProductVariantCountableConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };

export type FetchRelatedProductsDataQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  imageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchRelatedProductsDataQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, slug: string, description?: string | null, seoDescription?: string | null, productType: { __typename?: 'ProductType', isShippingRequired: boolean }, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string, type: ProductMediaType }> | null, variants?: Array<{ __typename?: 'ProductVariant', id: string, media?: Array<{ __typename?: 'ProductMedia', id: string, alt: string, url: string, type: ProductMediaType }> | null }> | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', id: string }, values: Array<{ __typename?: 'AttributeValue', value?: string | null, name?: string | null }> }>, thumbnail?: { __typename?: 'Image', url: string } | null, category?: { __typename?: 'Category', id: string, name: string, googleCategoryId?: string | null } | null } }> } | null };

export type ShopDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopDetailsQuery = { __typename?: 'Query', shop: { __typename?: 'Shop', name: string, description?: string | null } };

export type ChannelFragment = { __typename?: 'Channel', name: string, id: string, slug: string };

export type FetchChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchChannelsQuery = { __typename?: 'Query', channels?: Array<{ __typename?: 'Channel', name: string, id: string, slug: string }> | null };

export const UntypedAttributeWithMappingFragmentFragmentDoc = gql`
    fragment AttributeWithMappingFragment on Attribute {
  id
  name
  slug
}
    `;
export const UntypedBasicProductDataFragmentDoc = gql`
    fragment BasicProductData on ProductVariant {
  id
  name
  sku
  product {
    id
  }
  weight {
    unit
    value
  }
  pricing {
    priceUndiscounted {
      gross {
        currency
        amount
      }
    }
    price {
      gross {
        currency
        amount
      }
    }
  }
  quantityAvailable
}
    `;
export const UntypedCategoryWithMappingFragmentFragmentDoc = gql`
    fragment CategoryWithMappingFragment on Category {
  id
  parent {
    name
    parent {
      name
    }
  }
  name
  googleCategoryId: metafield(key: "google_category_id")
}
    `;
export const UntypedGoogleFeedProductVariantFragmentDoc = gql`
    fragment GoogleFeedProductVariant on ProductVariant {
  id
  name
  sku
  weight {
    unit
    value
  }
  pricing {
    priceUndiscounted {
      gross {
        currency
        amount
      }
    }
    price {
      gross {
        currency
        amount
      }
    }
  }
  quantityAvailable
  attributes {
    attribute {
      id
    }
    values {
      value
      name
    }
  }
  product {
    id
    name
    slug
    description
    seoDescription
    productType {
      isShippingRequired
    }
    media {
      id
      alt
      url(size: $imageSize)
      type
    }
    variants {
      id
      media {
        id
        alt
        url(size: $imageSize)
        type
      }
    }
    attributes {
      attribute {
        id
      }
      values {
        value
        name
      }
    }
    thumbnail(size: $imageSize) {
      url
    }
    category {
      id
      name
      googleCategoryId: metafield(key: "google_category_id")
    }
  }
}
    `;
export const UntypedProductAttributesFragmentDoc = gql`
    fragment ProductAttributes on ProductVariant {
  id
  attributes {
    attribute {
      id
    }
    values {
      value
      name
    }
  }
}
    `;
export const UntypedRelatedProductsFragmentDoc = gql`
    fragment RelatedProducts on Product {
  id
  name
  slug
  description
  seoDescription
  productType {
    isShippingRequired
  }
  media {
    id
    alt
    url(size: $imageSize)
    type
  }
  variants {
    id
    media {
      id
      alt
      url(size: $imageSize)
      type
    }
  }
  attributes {
    attribute {
      id
    }
    values {
      value
      name
    }
  }
  thumbnail(size: $imageSize) {
    url
  }
  category {
    id
    name
    googleCategoryId: metafield(key: "google_category_id")
  }
}
    `;
export const UntypedChannelFragmentDoc = gql`
    fragment Channel on Channel {
  name
  id
  slug
}
    `;
export const UntypedDeleteAppMetadataDocument = gql`
    mutation DeleteAppMetadata($id: ID!, $keys: [String!]!) {
  deletePrivateMetadata(id: $id, keys: $keys) {
    item {
      privateMetadata {
        key
        value
      }
    }
  }
}
    `;
export const UntypedUpdateAppMetadataDocument = gql`
    mutation UpdateAppMetadata($id: ID!, $input: [MetadataInput!]!) {
  updatePrivateMetadata(id: $id, input: $input) {
    item {
      privateMetadata {
        key
        value
      }
    }
  }
}
    `;
export const UntypedUpdateCategoryMappingDocument = gql`
    mutation UpdateCategoryMapping($id: ID!, $googleCategoryId: String!) {
  updateMetadata(
    id: $id
    input: {key: "google_category_id", value: $googleCategoryId}
  ) {
    errors {
      message
    }
  }
}
    `;
export const UntypedFetchAppDetailsDocument = gql`
    query FetchAppDetails {
  app {
    id
    privateMetadata {
      key
      value
    }
  }
}
    `;
export const UntypedFetchAttributesWithMappingDocument = gql`
    query FetchAttributesWithMapping($cursor: String) {
  attributes(first: 100, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...AttributeWithMappingFragment
      }
    }
  }
}
    ${UntypedAttributeWithMappingFragmentFragmentDoc}`;
export const UntypedFetchProductVariantsDataDocument = gql`
    query FetchProductVariantsData($first: Int!, $after: String, $channel: String!) {
  productVariants(
    first: $first
    after: $after
    channel: $channel
    sortBy: {field: LAST_MODIFIED_AT, direction: ASC}
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...BasicProductData
        ...ProductAttributes
      }
    }
  }
}
    ${UntypedBasicProductDataFragmentDoc}
${UntypedProductAttributesFragmentDoc}`;
export const UntypedFetchCategoriesWithMappingDocument = gql`
    query FetchCategoriesWithMapping($cursor: String) {
  categories(first: 100, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...CategoryWithMappingFragment
      }
    }
  }
}
    ${UntypedCategoryWithMappingFragmentFragmentDoc}`;
export const UntypedFetchProductCursorsDocument = gql`
    query FetchProductCursors($first: Int!, $after: String, $channel: String!) {
  productVariants(
    first: $first
    after: $after
    channel: $channel
    sortBy: {direction: ASC, field: LAST_MODIFIED_AT}
  ) {
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
  }
}
    `;
export const UntypedFetchRelatedProductsDataDocument = gql`
    query FetchRelatedProductsData($ids: [ID!], $imageSize: Int = 1024) {
  products(filter: {ids: $ids}, first: 100) {
    edges {
      node {
        ...RelatedProducts
      }
    }
  }
}
    ${UntypedRelatedProductsFragmentDoc}`;
export const UntypedShopDetailsDocument = gql`
    query ShopDetails {
  shop {
    name
    description
  }
}
    `;
export const UntypedFetchChannelsDocument = gql`
    query FetchChannels {
  channels {
    ...Channel
  }
}
    ${UntypedChannelFragmentDoc}`;
export const AttributeWithMappingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttributeWithMappingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AttributeWithMappingFragmentFragment, unknown>;
export const BasicProductDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicProductData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceUndiscounted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantityAvailable"}}]}}]} as unknown as DocumentNode<BasicProductDataFragment, unknown>;
export const CategoryWithMappingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryWithMappingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"googleCategoryId"},"name":{"kind":"Name","value":"metafield"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"google_category_id","block":false}}]}]}}]} as unknown as DocumentNode<CategoryWithMappingFragmentFragment, unknown>;
export const GoogleFeedProductVariantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GoogleFeedProductVariant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"weight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceUndiscounted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantityAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"productType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isShippingRequired"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}]},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}]},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"googleCategoryId"},"name":{"kind":"Name","value":"metafield"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"google_category_id","block":false}}]}]}}]}}]}}]} as unknown as DocumentNode<GoogleFeedProductVariantFragment, unknown>;
export const ProductAttributesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ProductAttributesFragment, unknown>;
export const RelatedProductsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RelatedProducts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"productType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isShippingRequired"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}]},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}]},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"googleCategoryId"},"name":{"kind":"Name","value":"metafield"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"google_category_id","block":false}}]}]}}]}}]} as unknown as DocumentNode<RelatedProductsFragment, unknown>;
export const ChannelFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Channel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Channel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<ChannelFragment, unknown>;
export const DeleteAppMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAppMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keys"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePrivateMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"keys"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeleteAppMetadataMutation, DeleteAppMetadataMutationVariables>;
export const UpdateAppMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePrivateMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privateMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAppMetadataMutation, UpdateAppMetadataMutationVariables>;
export const UpdateCategoryMappingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCategoryMapping"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"googleCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"google_category_id","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"googleCategoryId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryMappingMutation, UpdateCategoryMappingMutationVariables>;
export const FetchAppDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAppDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"privateMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<FetchAppDetailsQuery, FetchAppDetailsQueryVariables>;
export const FetchAttributesWithMappingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAttributesWithMapping"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttributeWithMappingFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttributeWithMappingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<FetchAttributesWithMappingQuery, FetchAttributesWithMappingQueryVariables>;
export const FetchProductVariantsDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchProductVariantsData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"channel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"LAST_MODIFIED_AT"}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasicProductData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductAttributes"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasicProductData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceUndiscounted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gross"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantityAvailable"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductAttributes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FetchProductVariantsDataQuery, FetchProductVariantsDataQueryVariables>;
export const FetchCategoriesWithMappingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCategoriesWithMapping"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryWithMappingFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryWithMappingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"googleCategoryId"},"name":{"kind":"Name","value":"metafield"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"google_category_id","block":false}}]}]}}]} as unknown as DocumentNode<FetchCategoriesWithMappingQuery, FetchCategoriesWithMappingQueryVariables>;
export const FetchProductCursorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchProductCursors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"channel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"ASC"}},{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"LAST_MODIFIED_AT"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<FetchProductCursorsQuery, FetchProductCursorsQueryVariables>;
export const FetchRelatedProductsDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchRelatedProductsData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1024"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RelatedProducts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RelatedProducts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"seoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"productType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isShippingRequired"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}]},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}]},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"googleCategoryId"},"name":{"kind":"Name","value":"metafield"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"google_category_id","block":false}}]}]}}]}}]} as unknown as DocumentNode<FetchRelatedProductsDataQuery, FetchRelatedProductsDataQueryVariables>;
export const ShopDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShopDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ShopDetailsQuery, ShopDetailsQueryVariables>;
export const FetchChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Channel"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Channel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Channel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<FetchChannelsQuery, FetchChannelsQueryVariables>;