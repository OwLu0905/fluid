import AppLayout from "@/component/layouts/AppLayout";
import React from "react";

const Topics = () => {
  return (
    <section className="mx-auto block w-full text-white">
      <h1 className="pb-4 text-3xl">Topics</h1>
      <p>
        AJK FED2023 invites presentations of the latest research on fluid
        engineering from both inside and outside AJK. The topics in this
        conference include, but not limited to, the following:
      </p>
    </section>
  );
};

Topics.Layout = AppLayout;
Topics.displayName = "Topics";
export default Topics;
