"use client";

import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import UserSearchForm from "./UserSearchForm";
import { IUser } from "../_modules/user";
import { UserList } from "./UserList";

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | []>([]);

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
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
