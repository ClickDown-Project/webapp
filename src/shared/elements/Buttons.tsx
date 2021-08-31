import { Button } from 'react-bootstrap';

export const PrimaryButton = ({ child, size, styles }: { child: any, size?: string, styles: string }) => {
  return (
    <Button className={`btn-${size} btn-primary ${styles} `}>{child}</Button>
  );
};

export const SecondaryButton = ({ child, size, styles }: { child: any, size: string, styles: string }) => {
  return (
    <Button className={`btn-${size} btn-secondary ${styles} `}>{child}</Button>
  );
};

PrimaryButton.defaultProps = {
  size: 'sm',
};
