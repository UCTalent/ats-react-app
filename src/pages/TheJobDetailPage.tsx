import Stack from "@mui/material/Stack"
import AppContainer from "components/common/AppContainer"
import JobOverviewBox from "components/sections/job-detail/JobOverviewBox"
import JobDetailContent from "components/sections/job-detail/JobDetailContent"

const TheJobDetailPage = () => {
  return (
    <Stack sx={{ px: "20px", overflow: "auto" }}>
      <AppContainer width={864} sx={{ margin: "0" }}>
        <Stack sx={{ flexGrow: 1, overflow: "auto", gap: "20px", py: "16px" }}>
          <JobOverviewBox />
          <JobDetailContent />
        </Stack>
      </AppContainer>
    </Stack>
  )
}

export default TheJobDetailPage
