interface attribute {
  message: string;
  isValid: boolean;
}

export interface messagesInterface {
  [key: string]: attribute;
}
