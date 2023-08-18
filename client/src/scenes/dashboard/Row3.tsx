import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";
const Row3 = () => {
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log({ transactionsData });
  return (
    <>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
