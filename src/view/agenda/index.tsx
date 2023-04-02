import Title from "@/component/utils/Title";
import React from "react";
import AgendaTable from "./Table";

type AgendaPageProps = {
  tableData: [string, string, string, string][];
};

const AgendaPage = (props: AgendaPageProps) => {
  const { tableData } = props;
  return (
    <>
      <Title>議程</Title>

      <AgendaTable tableData={tableData} />
    </>
  );
};

export default AgendaPage;
