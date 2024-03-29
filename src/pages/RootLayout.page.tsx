import React, {Suspense} from 'react';
import {PageShell} from "@/components/PageShell/PageShell";
import {Center, Loader} from "@mantine/core";
import {Outlet} from "react-router-dom";

const RootLayoutPage = () => {
  return (
    <>
     <PageShell>
       <Suspense fallback={<Center mt="xl"><Loader type={"bars"}/></Center>}>
         <Outlet/>
       </Suspense>
     </PageShell>
    </>
  );
};

export default RootLayoutPage;
