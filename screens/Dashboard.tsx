import { View, Text, Dimensions } from "react-native";
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import DashboardCard from "../components/Cards/DashboardCard";
import { ArrowNarrowLeftIcon,UserIcon,ChartBarIcon,ChartPieIcon,} from "react-native-heroicons/solid";

const Dashboard = () => {
  const [user, setUser] = React.useState<string | null>("Novic");
  return (
    <MainContainer>
      <View className="m-2 h-[55px] z-20 mt-8 flex flex-row justify-between items-center px-2">
        <View className="flex flex-row gap-4 justify-center items-center">
          <ArrowNarrowLeftIcon color="white" />
          <Text className="text-white text-xl">Dashboard</Text>
        </View>
        <View className="m-2 w-[40px] h-[40px] bg-[#363333] justify-center items-center rounded-3xl">
          <UserIcon color="white" />
        </View>
        
      </View>
      <View className=" w-full bg-[#362236] h-[100%] rounded-[20px] absolute " >
      <Text className="mr-4 text-white mt-[70px] mb-[20px] text-2xl text-bold ml-[50px]">
        Salut, {user}
      </Text>
      </View>
      <DashboardCard
        cardTitle="Balance"
        totalAmount={"57,000.00 Frs"}
        dateText="07-08-2022"
        icon={<ChartBarIcon color="#008D96" size={60} />}
      />

      <DashboardCard
        cardTitle="Total Savings"
        totalAmount={"20,050.02 Frs"}
        dateText="07-08-2022"
        icon={<ChartPieIcon color="#008D96" size={60} />}
      />
    </MainContainer>
  );
};

export default Dashboard;
