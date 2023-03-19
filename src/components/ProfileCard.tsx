import { useState, useEffect } from "react";
import { Avatar, Heading, Text, Button, Box, Pagehead } from '@primer/react';
import { 
  PeopleIcon, 
  StarIcon, 
  MailIcon, 
  OrganizationIcon,
  LocationIcon
} from '@primer/octicons-react';
import axios from "axios";

export default function ProfileCard() {

  const username: string = "eceeeren";
  const default_avatar: string = "https://avatars.githubusercontent.com/primer";

  const [avatarUrl, setAvatarUrl] = useState<string>(default_avatar);
  const [fullName, setFullName] = useState<string>("");
  const [following, setFollowing] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);
  const [company, setCompany] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  
  useEffect(() => {
  try {
    axios
          .get(`https://api.github.com/users/${username}`)
          .then((response) => {
            setAvatarUrl(response.data.avatar_url);
            setFullName(response.data.name);
            setFollowing(response.data.following);
            setFollowers(response.data.followers);
            setCompany(response.data.company);
            setLocation(response.data.location);
          });
  } catch(error) {
    console.log(error);
  }
  }, []);

  return (
    <>
    <Pagehead sx={{pb: 0, mb: 2}}>
    <Avatar src={avatarUrl} size={260} />

    <Heading sx={{fontSize: 5, mt: 4}}>{fullName}</Heading>
    <Text sx={{fontSize: 2, color: 'fg.muted'}}>{username}</Text>
    <Box sx={{pr: 3, display: 'flex', flexGrow: 1 }}>
    <Button block size="large" sx={{ mb: 4, mt: 2 }}>Follow</Button>
    </Box>
    <PeopleIcon size={16} /> {following} following ∙ {followers} followers ∙ <StarIcon size={16} /> 24
    <Text as="p"><OrganizationIcon size={16} /> {company}</Text>
    <Text as="p"><LocationIcon size={16} /> {location}</Text>
    <Text as="p"><MailIcon size={16} /> ece.eren@tum.de</Text>
    </Pagehead>
    <Heading sx={{fontSize: 3, mb: 2}}>Organizations</Heading>
    <Box sx={{pr: 3, display: 'flex' }}>
    <Avatar sx={{mr: 1}} square src={default_avatar} />
    <Avatar square src={default_avatar} />
    </Box>
    </>
  );
}