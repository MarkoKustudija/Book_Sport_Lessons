import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};
type ButtonProps = object &
  ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };

type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
        {children}
    </button>
  );
}

export default Button;