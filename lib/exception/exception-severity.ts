/* Copyright Dirk Lemstra https://github.com/dlemstra/Magick.WASM */

/** @internal */
export enum ExceptionSeverity {
  Undefined,
  Warning = 300,
  ResourceLimitWarning = 300,
  TypeWarning = 305,
  OptionWarning = 310,
  DelegateWarning = 315,
  MissingDelegateWarning = 320,
  CorruptImageWarning = 325,
  FileOpenWarning = 330,
  BlobWarning = 335,
  StreamWarning = 340,
  CacheWarning = 345,
  CoderWarning = 350,
  FilterWarning = 352,
  ModuleWarning = 355,
  DrawWarning = 360,
  ImageWarning = 365,
  WandWarning = 370,
  RandomWarning = 375,
  XServerWarning = 380,
  MonitorWarning = 385,
  RegistryWarning = 390,
  ConfigureWarning = 395,
  PolicyWarning = 399,
  Error = 400,
  ResourceLimitError = 400,
  TypeError = 405,
  OptionError = 410,
  DelegateError = 415,
  MissingDelegateError = 420,
  CorruptImageError = 425,
  FileOpenError = 430,
  BlobError = 435,
  StreamError = 440,
  CacheError = 445,
  CoderError = 450,
  FilterError = 452,
  ModuleError = 455,
  DrawError = 460,
  ImageError = 465,
  WandError = 470,
  RandomError = 475,
  XServerError = 480,
  MonitorError = 485,
  RegistryError = 490,
  ConfigureError = 495,
  PolicyError = 499,
}
