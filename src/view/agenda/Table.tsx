import React, { useState } from "react";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import SpecialAgendaTable from "./SpecialTable";
import MobileTable from "./mobile-table";
import PcAgendaTable from "./pc-table/pc-agenda";

type AgendaPageProps = {
  tableData: [string, string, string, string][];
};

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
