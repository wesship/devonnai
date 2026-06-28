import type { NextApiRequest, NextApiResponse } from "next";
import { getServiceStatuses, type ServiceStatus } from "@/lib/status";

type StatusResponse = {
  status: "operational" | "degraded";
  checkedAt: string;
  services: ServiceStatus[];
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse<StatusResponse>) {
  const services = await getServiceStatuses();
  const degraded = services.some((service) => service.state === "degraded");

  res.status(200).json({
    status: degraded ? "degraded" : "operational",
    checkedAt: new Date().toISOString(),
    services,
  });
}
