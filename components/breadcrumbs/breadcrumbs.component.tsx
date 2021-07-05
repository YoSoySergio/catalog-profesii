import { Breadcrumb } from './breadcrumb.component';

export interface BreadCrumbLink {
  title: string;
  url: string;
}
export type BreadcrumbsProps = {
  links: Array<BreadCrumbLink>;
};

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { links } = props;

  return (
    <ul className="flex flex-nowrap">
      {links.map((link, index) => (
        <Breadcrumb
          breadcrumb={link}
          isLast={index >= links.length - 1}
          key={index}
        />
      ))}
    </ul>
  );
}
