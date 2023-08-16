"use client";

import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import UserSearchForm from "@/backoffice/UserSearchForm";
import NoteSearchForm from "@/backoffice/NoteSearchForm";
import { IUser } from "@/_modules/user";
import { INote } from "@/_modules/note";
import { UserList } from "@/backoffice/UserList";
import { NoteList } from "@/backoffice/NoteList";

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | []>([]);
  const [notes, setNotes] = useState<INote[] | []>([]);

  return (
    <Box width="100%">
      <Tabs>
        <TabList>
          <Tab>User</Tab>
          <Tab>Note</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserSearchForm setUsers={setUsers} />
            <UserList users={users} setUsers={setUsers} />
          </TabPanel>
          <TabPanel>
            <NoteSearchForm setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
