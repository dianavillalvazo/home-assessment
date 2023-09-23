import styles from './ValidationMessages.module.scss';
import { messagesInterface } from '../../types/messages';
import { clsx } from 'clsx';

interface ValidationMessagesProps {
  messages: messagesInterface;
}

export const ValidationMessages = ({ messages }: ValidationMessagesProps) => {
  return (
    <>
      {Object.keys(messages).map(
        (key) =>
          messages[key].message && (
            <div
              className={clsx(
                styles.validation,
                messages[key].isValid ? styles.valid : styles.unvalid
              )}
              key={key}
            >
              {messages[key].isValid ? (
                <span className='material-icons'>check_circle</span>
              ) : (
                <span className='material-icons'>cancel</span>
              )}
              <p>{messages[key].message}</p>
            </div>
          )
      )}
    </>
  );
};
