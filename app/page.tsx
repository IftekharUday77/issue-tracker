import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueCharts from "./IssueCharts";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
  const openIssues = await prisma.issue.count({
    where: { status: "OPEN" },
  });

  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="8">
      <Flex direction="column" gap="8">
        <IssueSummary
          open={openIssues}
          inProgress={inProgressIssues}
          closed={closedIssues}
        ></IssueSummary>
        <IssueCharts
          open={openIssues}
          inProgress={inProgressIssues}
          closed={closedIssues}
        ></IssueCharts>
      </Flex>
      <LatestIssues></LatestIssues>
    </Grid>
  );
}
