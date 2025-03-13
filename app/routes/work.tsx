import Layout from "../components/Layout/Layout";
import WorkHistory from "../data/WorkHistory.json";

export const loader = async () => {
  return Response.json(WorkHistory);
};

export default function WorkDetails() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Work History</h1>

        <div className="w-full max-w-3xl">
          {WorkHistory.map((job, index) => (
            <div key={index} className="mb-4 p-6">
              <h2 className="text-xl font-semibold text-primary">{job.businessName}</h2>
              <p className="text-gray-300 text-sm">{job.dates}</p>
              <p className="font-medium text-gray-200">{job.role}</p>
              <p className="text-gray-200 mt-2">{job.jobDescription}</p>

              {/* Decorative Image Divider */}
              <div className="flex justify-center mt-16">
                <img
                  src="/page-break.png"
                  alt="A coffee cup icon to break up work history info"
                  className="w-12 md:w-16 h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
