type NotificationProps = {
  text: string,
  type: string
};

export const Notification = ({ text, type }: NotificationProps) => {
  const textStyle = type === 'success' ? 'success-text' : 'err-text';

  return (
    <div id="notification" className={`input form-group ${textStyle}`}>
      <p>{text}</p>
  </div>
  )
};

