import styles from './StatusBarMessage.module.css';

const StatusBarMessage = (props) => {
  const { status, title, message } = props.statusFetch;
  let statusClasses = '';

  if (status === 'error') {
    statusClasses = styles.error;
  }
  if (status === 'success') {
    statusClasses = styles.success;
  }

  const messageClasses = `${styles.message} ${statusClasses}`;

  return (
    <section className={messageClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default StatusBarMessage;
