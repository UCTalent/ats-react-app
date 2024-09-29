import { Link } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import AppContainer from "components/common/AppContainer"
import UserAvatarWithChevron from "components/common/user-avatar/UserAvatarWithChevron"
import LogoUctText from "assets/logos/uctalent-text.png"
import IconBell from "assets/icons/bell.svg"
import { APP_HEADER_HEIGHT, APP_HEADER_LOGO_WIDTH } from "constants/STYLE"

const TheAppHeader = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        borderBottom: "1px solid",
        borderBottomColor: "border.outlined",
        bgcolor: "background.default",
        zIndex: 20,
      }}
    >
      <AppContainer sx={{ px: "16px" }}>
        <Stack
          direction="row"
          sx={{ height: APP_HEADER_HEIGHT, justifyContent: "space-between", alignItems: "center" }}
        >
          <Link to="/">
            <img src={LogoUctText} alt="UCTalent" width={APP_HEADER_LOGO_WIDTH} />
          </Link>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <IconButton>
              <img src={IconBell} alt="Notification" width={32} height={32} />
            </IconButton>
            <Divider
              orientation="vertical"
              sx={{ height: "16px", marginRight: "20px", marginLeft: "4px" }}
            />
            <UserAvatarWithChevron sx={{ cursor: "pointer" }} />
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  )
}

export default TheAppHeader
