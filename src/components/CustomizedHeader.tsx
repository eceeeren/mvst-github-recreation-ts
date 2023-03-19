import { Header, StyledOcticon, TextInput, Avatar } from '@primer/react';
import { 
  MarkGithubIcon, 
  BellIcon, 
  PlusIcon, 
  TriangleDownIcon } from '@primer/octicons-react';


export default function CustomizedHeader() {
  return (
    <Header>
  <Header.Item>
    <Header.Link href="#" sx={{ fontSize:2 }}>
    <StyledOcticon icon={MarkGithubIcon} size={32} sx={{mr: 2}} />
    </Header.Link>
  </Header.Item>
  <Header.Item>
  <TextInput contrast aria-label="Repository" name="repository" placeholder="Search or jump to..." />
  </Header.Item>
  <Header.Item>
    <Header.Link href="#">Pull Requests</Header.Link>
  </Header.Item>
  <Header.Item>
    <Header.Link href="#">Issues</Header.Link>
  </Header.Item>
  <Header.Item>
    <Header.Link href="#">Codespaces</Header.Link>
  </Header.Item>
  <Header.Item>
    <Header.Link href="#">Marketplace</Header.Link>
  </Header.Item>
  <Header.Item full>
    <Header.Link href="#">Explore</Header.Link>
  </Header.Item>
  <Header.Item sx={{ mr:0 }}>
    <BellIcon size={16} />
  </Header.Item>
  <Header.Item sx={{ mr:0 }}>
    <PlusIcon size={16} />
    <TriangleDownIcon size={16} />
  </Header.Item>
  <Header.Item sx={{ mr:0 }}>
    <Avatar src="https://github.com/octocat.png" size={20} />
  </Header.Item>
</Header>
  );
}