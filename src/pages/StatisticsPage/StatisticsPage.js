import React from "react";
import BasicTable from "../../components/BasicTable/BasicTable";
// import SmallTable from "../../components/SmallTable/SmallTable";
// import Media from "react-media";

function createData(Date, Type, Category, Comments, Amount, Balance) {
  return { Date, Type, Category, Comments, Amount, Balance };
}
const items = [
  createData("04.01.19", "-", "Other", "A gift for wife", 300.0, "6 900.00"),
  createData("05.01.19", "+", "Other", "Bonus for January", 500.0, "6 900.00"),
  createData("03.01.19", "-", "Other", "A gift", 600.0, "6 900.00"),
  createData("07.01.19", "+", "Other", "Vegetables", 770.0, "6 900.00"),
  createData("09.01.19", "-", "Other", "A gift for wife", 890.0, "6 900.00"),
];

function StatisticsPage() {
  return <BasicTable items={items} />;
}

export default StatisticsPage;
