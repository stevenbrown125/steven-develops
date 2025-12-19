import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children?: ReactNode;
  schemaProps?: SchemaProps;
}

interface SchemaProps {
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
}

export const CardLink = ({
  href,
  children,
  schemaProps,
}: {
  href: string;
  children: ReactNode;
  schemaProps?: SchemaProps;
}) => {
  const { itemProp, itemScope, itemType } = schemaProps || {};

  return (
    <Link
      href={href}
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
      className="relative z-10 max-w-full mx-auto mt-4 transition duration-300 ease-in-out shadow-xl max-w-7xl lg:rounded-b-md grow-0 group hover:-translate-y-2"
    >
      {children}
    </Link>
  );
};

export const Card = ({ children, schemaProps }: CardProps) => {
  if (!children) return <></>;
  const { itemProp, itemScope, itemType } = schemaProps || {};

  return (
    <article
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
      className="dark:bg-neutral-700/40 bg-neutral-200/50 pb-6 rounded-md h-full"
    >
      {children}
    </article>
  );
};

export const CardHeader = ({ children }: CardProps) => {
  if (!children) return <></>;
  return <header className="mb-2">{children}</header>;
};

export const CardBody = ({ children }: CardProps) => {
  if (!children) return <></>;
  return <section className="px-4">{children}</section>;
};

export const CardFooter = ({ children }: CardProps) => {
  if (!children) return <></>;
  return <footer>{children}</footer>;
};
