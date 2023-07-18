import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Tooltip.module.css';

type TooltipProps = {
  text: string;
  className?: string;
};

const Tooltip = ({
  text,
  className,
  children,
}: PropsWithChildren<TooltipProps>) => {
  return (
    <span className={styles.tooltip}>
      <span className={classNames([styles.tooltipText, className])}>
        {text}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
