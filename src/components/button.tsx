import { type VariantProps, cva } from "class-variance-authority";
import { Text, TouchableOpacity } from "react-native";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-blue-500",
        secondary: "bg-gray-500",
        destructive: "bg-red-500",
        ghost: "bg-slate-700",
        link: "text-blue-500 underline-offset-4",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-gray-900",
      secondary: "text-gray-500",
      destructive: "text-red-500",
      ghost: "text-blue-500",
      link: "text-blue-500 underline",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonVariants, buttonTextVariants };
