import { View, Text } from "react-native";
import React from "react";
interface IProps {
  cardTitle: string;
  totalAmount?: string | null;
  dateText?: string | null;
  icon?: React.ReactElement;
}
const DashboardCard: React.FC<IProps> = ({cardTitle,totalAmount,dateText,icon,
}) => {
  return (
    <View className="bg-[#201520] border-[#70434170] border-[1.5px] rounded-md min-h-[150px] mx-[20px] my-[10px] py-[10px] px-[20px]">
      <Text className="text-[#EFE3C8] text-lg">{cardTitle}</Text>
      <View className="flex-row justify-between">
        <View className="justify-center items-start flex-1 pt-[20px]">
          <Text className="text-[#EFE3C880] text-2xl mb-[20px]">
            {totalAmount}
          </Text>
          <Text className="text-white text-sm">{dateText}</Text>
        </View>
        <View className="flex-1 justify-center items-center">{icon}</View>
      </View>
    </View>
  );
};
export default DashboardCard;
