import { useState, useEffect } from "react";
import { PageLayout } from '@primer/react';
import ProfileCard from './ProfileCard';
import RepositoryList from './RepositoryList';
import SpecializedUnderlineNav from './SpecializedUnderlineNav';
import axios from "axios";


export default function Homepage() {

  const username: string = "eceeeren";
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
  try {
    axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then((response) => {
            setRepos(response.data)
          });
  } catch(error) {
    console.log(error);
  }
  }, []);

  return (
    <PageLayout padding="none" rowGap="none" columnGap="none">
    <PageLayout.Pane position="start" hidden={{narrow: true}}>
        <ProfileCard/>
    </PageLayout.Pane>
    <PageLayout.Content sx={{ml:5, mr:5}}>
        <SpecializedUnderlineNav size={repos.length} />
        <RepositoryList repos={repos} />
    </PageLayout.Content>
    </PageLayout>
  );
}