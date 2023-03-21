import AppLayout from "@/component/layouts/AppLayout";

const Submissions = () => {
  return (
    <section className="mx-auto block w-full text-white">
      <h1 className="pb-4 text-3xl">Abstract Submission</h1>
      <p>
        AJK FED2023 invites presentations of the latest research on fluid
        engineering from both inside and outside AJK. The topics in this
        conference include, but not limited to, the following:
      </p>
    </section>
  );
};

Submissions.Layout = AppLayout;
Submissions.displayName = "Submissions";
export default Submissions;
