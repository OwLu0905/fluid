import React from "react";
import MobileTable from "./mobile-table";
import PcAgendaTable from "./pc-table/pc-agenda";

type AgendaTableListType = {
  time: string;
  content: string;
  annotation?: string;
  type: 0 | 1 | 2 | 3;
}[];

export type AgendaTableType = {
  [key: string]: { name: string; list: AgendaTableListType };
};

// ＆
const AgendaTable = () => {
  return (
    <section>
      <MobileTable />
      <PcAgendaTable />
    </section>
  );
};

export default AgendaTable;
