"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useCookies } from "react-cookie";
import { User } from "../utils/types";

type BugerMenuProps = {
  user: User | null;
};

export default function BurgerMenu({ user }: BugerMenuProps) {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    router.push("http://localhost:8080/logout");
    removeCookie("JwtToken");
  };

  const overrideMenuItemheight = () => ({
    minHeight: "50px",
    "@media (min-width: 600px)": {
      minHeight: "50px",
    },
  });

  return (
    <div className="flex items-center text-center">
      <IconButton
        onClick={isOpen ? handleClose : handleClick}
        size="large"
        sx={{
          transition: "transform 0.3s ease",
          transform: isOpen ? "rotate(90deg)" : "none",
          color: "#DEE0E4",
        }}
        aria-controls={isOpen ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        className=""
      >
        {isOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        className="mt-1"
      >
        <MenuItem
          sx={overrideMenuItemheight()}
          onClick={() => router.push("/")}
        >
          <HomeIcon /> <p className="pl-2">Home</p>
        </MenuItem>
        <MenuItem
          sx={overrideMenuItemheight()}
          onClick={() => router.push("/createworkout")}
        >
          <FitnessCenterIcon />
          <p className="pl-2">Create Workout</p>
        </MenuItem>
        {user && (
          <MenuItem
            sx={overrideMenuItemheight()}
            onClick={() => router.push("/myworkouts")}
          >
            <PersonIcon />
            <p className="pl-2">My Workouts</p>
          </MenuItem>
        )}
        {user ? (
          <MenuItem
            sx={overrideMenuItemheight()}
            onClick={handleLogout}
          >
            <LogoutIcon />
            <p className="pl-2">Logout</p>
          </MenuItem>
        ) : (
          <MenuItem
            sx={overrideMenuItemheight()}
            onClick={() =>
              router.push("http://localhost:8080/oauth2/authorization/okta")
            }
          >
            <LoginIcon />
            <p className="pl-2">Login</p>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
