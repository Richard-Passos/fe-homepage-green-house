import { Toast, Icon } from "@/components";

const CountdownToast = ({ variant, text, delay, ...props }) => {
  const toast = variants[variant] || {};

  return (
    <Toast {...props}>
      <Toast.Content className={toast.content}>
        <Icon
          name={toast.icon}
          className="text-inherit"
        />

        <span>{text}</span>

        <Toast.Progress
          className={toast.progress}
          delay={delay}
        />
      </Toast.Content>
    </Toast>
  );
};

const variants = {
  success: {
    icon: "CheckCircleIcon",
    content: "alert-success",
    progress: "progress-success",
  },
  error: {
    icon: "XCircleIcon",
    content: "alert-error",
    progress: "progress-error",
  },
  warning: {
    icon: "ExclamationCircleIcon",
    content: "alert-warning",
    progress: "progress-warning",
  },
};

export default CountdownToast;
