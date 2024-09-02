import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"
import { AppContainer } from "components/common"
import { TheAppHeader, TheNavigateAsideBar } from "components/sections"
import { type ReactNode } from "react"

interface TypeProps {
  children: ReactNode
}

const AsideNavigateLayout: React.FC<TypeProps> = ({ children }) => {
  const { palette } = useTheme()

  return (
    <Stack sx={{ height: "100vh", overflow: "auto" }}>
      <TheAppHeader />
      <Box sx={{ flexGrow: 1 }}>
        <AppContainer sx={{ minHeight: "100%" }}>
          <Stack
            direction="row"
            sx={{
              minHeight: "100%",
              borderWidth: "0 1px",
              borderStyle: "solid",
              borderColor: palette.border.outlined,
            }}
          >
            <TheNavigateAsideBar />
            <Stack sx={{ flexGrow: 1 }}>{children}</Stack>
          </Stack>
        </AppContainer>
      </Box>
    </Stack>
  )
}

export default AsideNavigateLayout
