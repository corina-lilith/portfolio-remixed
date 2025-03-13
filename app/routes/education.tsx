import Layout from "../components/Layout/Layout";
import EducationHistory from "../data/EducationHistory.json";

export const loader = async () => {
  return Response.json(EducationHistory);
};

export default function EducationDetails() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>

        <div className="w-full max-w-3xl text-center">
          {EducationHistory.map((educ, index) => (
            <div key={index} className="mb-8 p-6 bg-gray-900">
              {/* Year Heading */}
              <h2 className="text-xl font-semibold text-primary">{educ.year}</h2>

              {/* Qualifications List */}
              <ul className="mt-2 text-gray-200 list-disc list-inside list-none">
                {educ.qualification.map((qual, i) => (
                  <li key={i} className="mt-1">{qual}</li>
                ))}
              </ul>

              {/* Decorative Image Divider */}
              <div className="flex justify-center mt-6">
                <img
                  src="/page-break.png"
                  alt="A coffee cup icon to break up education history"
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
