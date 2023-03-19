import { Pagehead, Text, Link, Box, Label, Button } from '@primer/react';
import { PageHeader } from '@primer/react/drafts'
import { StarIcon } from '@primer/octicons-react';
import colors from '../data/githubLangColors';
import moment from "moment";


export default function RepositoryItem(props: any) {

    interface repoItem {
        name: string;
        fork: boolean;
        description: string;
        updated_at: string;
        language: string;
        private?: string;
    }

    const repo: repoItem = 
    {
        name: props.repo.name,
        fork: props.repo.fork,
        description: props.repo.description,
        updated_at: props.repo.updated_at,
        language: props.repo.language,
        private: props.repo.private
    }

  const updated_at: string = moment(repo.updated_at).format("MMM Do, YYYY");
  

  return (
    <PageHeader>
        <Pagehead>
    <Box sx={{display: 'flex'}}>
        <Box sx={{pr: 3}}> 
        <Link href="https://github.com">
        <PageHeader.Title>{repo.name}</PageHeader.Title>
        </Link>
        </Box> 
        <Box sx={{pr: 3, mt: 1 }}>
            {repo.private ? 
            (<Label variant="secondary">Private</Label>) : 
            (<Label variant="secondary">Public</Label>)
            }
        </Box>
        <Box sx={{pr: 3, mt: 1}}>
        <Button>
        <StarIcon size={16}/> 
        <Text sx={{fontSize: 1, fontWeight: 'bold'}}> Star</Text>
        </Button>
        </Box>
    </Box>
    <PageHeader.Description>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
            {repo.fork === true ? "Forked from " + repo.name : null }
        </Text>
    </PageHeader.Description>
    <PageHeader.Description>
        <Text sx={{fontSize: 2, color: 'fg.muted'}}>
        {repo.description}
        </Text>
    </PageHeader.Description>
    <PageHeader.Description>
    <Box
        borderWidth="1px"
        borderStyle="solid"
        bg={colors[repo.language]}
        borderColor={colors[repo.language]}
        width={10}
        height={10}
        borderRadius={10}
        /> 
        <Text as="p" sx={{fontSize: 1, color: 'fg.muted', mr:5 }}>
        {repo.language} 
        </Text>
        <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        updated on {updated_at} 
        </Text>
    </PageHeader.Description>
    </Pagehead>
    </PageHeader>
  );
}