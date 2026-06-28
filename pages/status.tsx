import Head from "next/head";
import Link from "next/link";
import { getServiceStatuses, type ServiceStatus } from "@/lib/status";

type StatusPageProps = {
  checkedAt: string;
  services: ServiceStatus[];
};

export async function getServerSideProps() {
  const services = await getServiceStatuses();

  return {
    props: {
      checkedAt: new Date().toISOString(),
      services,
    },
  };
}

export default function StatusPage({ checkedAt, services }: StatusPageProps) {
  const hasDegraded = services.some((service) => service.state === "degraded");

  return (
    <>
      <Head>
        <title>Status — D3VONN.IO</title>
        <meta name="description" content="Public D3VONN.IO system status overview for frontend, API, database, vector memory, orchestrator, and CI/CD surfaces." />
        <link rel="canonical" href="https://d3vonn.io/status" />
      </Head>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">System Status</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">D3VONN.IO operational surface.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Live-ready status overview for frontend, backend runtime, database, vector memory, orchestrator, and CI/CD.
            </p>
            <p className={hasDegraded ? "mt-5 text-amber-300" : "mt-5 text-emerald-300"}>{hasDegraded ? "Degraded" : "Operational"}</p>
            <p className="mt-2 text-xs text-gray-500">Last checked: {new Date(checkedAt).toLocaleString()}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-gray-200">
                <tr>
                  <th className="px-4 py-4">System</th>
                  <th className="px-4 py-4">Provider</th>
                  <th className="px-4 py-4">State</th>
                  <th className="px-4 py-4">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950/60">
                {services.map((service) => (
                  <tr key={service.name}>
                    <td className="px-4 py-4 font-medium text-white">{service.name}</td>
                    <td className="px-4 py-4 text-gray-400">{service.provider}</td>
                    <td className="px-4 py-4 capitalize text-cyan-300">{service.state}</td>
                    <td className="px-4 py-4 text-gray-500">{service.detail || "No detail available"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-sm text-gray-400">
            JSON status is available at <Link href="/api/status" className="text-cyan-300 hover:text-cyan-200">/api/status</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
