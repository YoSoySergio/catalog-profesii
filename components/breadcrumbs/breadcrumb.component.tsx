import { BreadCrumbLink } from './breadcrumbs.component';

export type BreadcrumbProps = {
  breadcrumb: BreadCrumbLink;
  isLast?: boolean;
};

export function Breadcrumb(props: BreadcrumbProps) {
  const { breadcrumb, isLast = false } = props;

  return (
    <li key={breadcrumb.title} className="ml-2 first:ml-0">
      {!isLast && (
        <a className="text-blue-600" href={breadcrumb.url}>
          {breadcrumb.title}
          <span className="ml-2">{'>'}</span>
        </a>
      )}
      {isLast && <span className="text-blue-600">{breadcrumb.title}</span>}
    </li>
  );
}
