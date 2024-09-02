import type { IMetaSEO } from "types/common"

const DEFAULT: IMetaSEO = {
  title: "UCTalent ATS",
  description: "Default description",
}

const HOME: IMetaSEO = {
  title: "Home page",
  description: "Home page description",
}

const POST_JOB: IMetaSEO = {
  title: "Create Job",
  description: "Create Job description",
}

export const META_SEO: Record<string, IMetaSEO> = {
  DEFAULT,
  HOME,
  POST_JOB,
}
