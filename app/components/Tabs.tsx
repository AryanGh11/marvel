"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

interface ThisType {
  tabs: {
    label: string;
    value: string;
    desc: string | undefined;
  }[];
}

export function MainTabs({ tabs }: ThisType) {
  return (
    <Tabs className="w-full" value="cast">
      <TabsHeader>
        {tabs!.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="text-sm pt-3">
        {tabs!.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
