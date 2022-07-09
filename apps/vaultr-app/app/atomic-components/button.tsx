import cn from 'clsx';

type ButtonProps = {
  appearance?: 'primary' | 'secondary';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  clickHandler: () => void;
  children: React.ReactElement | string;
};

export default function Button({
  appearance = 'primary',
  type = 'button',
  clickHandler,
  children
}: ButtonProps) {
  const buttonBackgroundColor = (() => {
    if (appearance === 'primary') {
      return 'bg-primary';
    }

    if (appearance === 'secondary') {
      return '';
    }
  })();

  return (
    <button
      className={cn(
        'rounded-md px-2 py-1 font-medium focus:outline-none',
        buttonBackgroundColor
      )}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
