import { messagesInterface } from '../../types/messages';
import { PasswordValidatorProps } from './PasswordValidator';

export const getInitialMessages = ({
  minCharacters,
  maxCharacters,
  needSpecialCharacters,
  needANumber,
  needAnUppercase,
  disableConsecutiveLetters,
}: PasswordValidatorProps) => {
  const messages: messagesInterface = {
    minCharacters: {
      message: `Has at least ${minCharacters} characters`,
      isValid: false,
    },
    maxCharacters: {
      message: `Has less than ${maxCharacters} characters`,
      isValid: false,
    },
    needANumber: {
      message: needANumber ? 'Has a number 0-9' : '',
      isValid: false,
    },
    needSpecialCharacters: {
      message: needSpecialCharacters ? 'Has a special char !@#$%^&*' : '',
      isValid: false,
    },
    needAnUppercase: {
      message: needAnUppercase ? 'Has uppercase letter' : '',
      isValid: false,
    },
    disableConsecutiveLetters: {
      message: disableConsecutiveLetters
        ? 'Does not have consecutive letters'
        : '',
      isValid: false,
    },
  };
  return messages;
};
