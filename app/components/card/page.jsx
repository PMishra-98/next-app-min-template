
import { Card, Text, Button, Group, Avatar, Grid, Anchor, Tooltip,Loader } from '@mantine/core';
import {
  IconStar, IconAt, IconPhoneCall, IconTrash, IconUserMinus, IconUserPlus,
  IconWorld
} from '@tabler/icons-react';

const ShowCard = (props) => {
  let profileData = props.profileData;

// For delete profile by id
  const deleteProfile = (id) => {
    let getData = profileData.filter(obj => obj.id != id)
    return getData;
  }
  
 //For update follow profile by id
  const followOrNotProfile = (id) => {
    let getData = profileData.map(obj => {
      if (obj.id == id) obj.follow = !obj.follow;
      return obj;
    });
    return getData;
  }

  return (
    <div>
      {profileData.length>0?
        <Grid m="lg">
        {profileData.map((item) => (
          <Grid.Col span={{ base: 12, sm:6, lg: 3 }} key={item.id} padding="lg">
            <Card shadow="md" radius="md" withBorder>
              <Card.Section m="xs">
                <Anchor href={item.website} target="_blank" underline="never">
                  <Tooltip
                    withArrow
                    label={item.name}
                  >
                    <Avatar
                      src={item.avatarImg}
                      size={120}
                      m="auto"
                      alt={item.name}
                    />
                  </Tooltip>
                </Anchor>
                <Text fw={500} size="lg" mt="md" align="center">
                  {item.name}
                  {item.follow ?
                    <IconStar size={16} ml="md"/> : <></>}
                </Text>
              </Card.Section>

              <Group justify="flex-start" mt="xs" wrap="wrap">
                <IconAt color="gray" size={16} />
                <Anchor leftSection={<IconUserMinus size={16} />} href={"mailto:" + item.email} target="_blank" underline="hover" c="dimmed">
                  {item.email}
                </Anchor>
              </Group>

              <Group justify="flex-start" mt="xs" wrap="nowrap">
                <IconPhoneCall color="gray" size={16} />
                <Anchor href={"tel:" + item.phone} target="_blank" underline="hover" c="dimmed">
                  {item.phone}
                </Anchor>
              </Group>

              <Group justify="flex-start" mt="xs" wrap="nowrap">
                <IconWorld color="gray" size={16} />
                <Anchor href={item.website} target="_blank" underline="hover" c="dimmed">
                  {item.website}</Anchor>
              </Group>

              <Group justify="flex-start" mt="xs" wrap="nowrap">
                {item.follow ?
                  <Button fullWidth leftSection={<IconUserMinus size={16} />}
                    variant="default" onClick={() => props.updatedProfile(followOrNotProfile(item.id))}>
                    UnFollow
                  </Button> : <Button fullWidth leftSection={<IconUserPlus size={16} />} onClick={() => props.updatedProfile(followOrNotProfile(item.id))}>
                    Follow
                  </Button>}

                <Button fullWidth leftSection={<IconTrash size={16} />} variant="outline" onClick={() => props.updatedProfile(deleteProfile(item.id))}>
                  Delete
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      :<div align="center" mt={200}>Loading...<Loader mt={100} size={20}/></div>}
      
    </div>
  );
}

export default ShowCard;