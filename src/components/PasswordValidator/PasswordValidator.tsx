import { useState } from 'react';
import styles from './PasswordValidator.module.scss';
import { messagesInterface } from '../../types/messages';
import { ValidationMessages } from '../ValidationMessages/ValidationMessages';
import {
  checkUppercase,
  checkNumbers,
  checkSpecialCharacter,
  checkConsecutiveLetters,
} from '../../constants/validators';
import { getInitialMessages } from './util';

export interface PasswordValidatorProps {
  minCharacters?: number;
  maxCharacters?: number;
  needSpecialCharacters?: boolean;
  needANumber?: boolean;
  needAnUppercase?: boolean;
  disableConsecutiveLetters?: boolean;
}

export const PasswordValidator = ({
  minCharacters = 8,
  maxCharacters = 128,
  needSpecialCharacters = true,
  needANumber = true,
  needAnUppercase = true,
  disableConsecutiveLetters = true,
}: PasswordValidatorProps) => {
  const initialMessages = getInitialMessages({
    minCharacters,
    maxCharacters,
    needSpecialCharacters,
    needANumber,
    needAnUppercase,
    disableConsecutiveLetters,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [messages, setMessages] = useState<messagesInterface>(initialMessages);

  const handlePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const newMessages = Object.assign({}, messages);

    newMessages.minCharacters.isValid = password.length >= minCharacters;
    newMessages.maxCharacters.isValid =
      password.length < maxCharacters && password !== '';
    newMessages.needAnUppercase.isValid = checkUppercase.test(password);
    newMessages.needANumber.isValid = checkNumbers.test(password);
    newMessages.needSpecialCharacters.isValid =
      checkSpecialCharacter.test(password);
    newMessages.disableConsecutiveLetters.isValid =
      !checkConsecutiveLetters.test(password) && password !== '';

    setMessages(newMessages);
  };

  return (
    <div className={styles.generalContainer}>
      <div className={styles.titleContainer}>
        <h1>Password Component</h1>
      </div>
      <div className={styles.formContainer}>
        <form>
          <input
            autoComplete='new-password'
            className={styles.inputPassword}
            name='password'
            type={isPasswordVisible ? 'text' : 'password'}
            onChange={handleValidation}
          />
        </form>
        <button
          className={styles.visibilityButton}
          onClick={handlePasswordVisibility}
        >
          {isPasswordVisible ? (
            <span className='material-icons'>visibility_off</span>
          ) : (
            <span className='material-icons'>visibility</span>
          )}
        </button>
      </div>
      <div className={styles.validationsContainer}>
        <ValidationMessages messages={messages} />
      </div>
    </div>
  );
};
