import React from "react";
import logo from "../assets/images/logo.svg";
import { Image as ChakraImage } from "@chakra-ui/react";
const Logo = () => {
	return <ChakraImage src={logo} alt="Jobify" />;
};

export default Logo;
