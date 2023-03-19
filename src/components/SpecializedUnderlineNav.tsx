import { UnderlineNav } from '@primer/react/drafts';
import { BookIcon, RepoIcon, ProjectIcon } from '@primer/octicons-react';

export default function SpecializedUnderlineNav(props:any) {
  return (
     <UnderlineNav aria-label="Repository" sx={{ mb:3 }}>
        <UnderlineNav.Item icon={BookIcon}>Overview</UnderlineNav.Item>
        <UnderlineNav.Item icon={RepoIcon} counter={props.size} aria-current="page">Repositories</UnderlineNav.Item>
        <UnderlineNav.Item icon={ProjectIcon}>Projects</UnderlineNav.Item>
      </UnderlineNav>

  );
}