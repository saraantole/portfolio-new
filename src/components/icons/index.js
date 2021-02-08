import React from "react"
import PropTypes from "prop-types"
import IconLinkedIn from "./linkedin"
import IconMedium from "./medium"
import IconGitHub from "./github"
import IconInstagram from "./instagram"
import IconExternal from "./external"

// Utility function to grab Icons by name
const Icon = ({ name }) => {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <IconLinkedIn />
    case "medium":
      return <IconMedium />
    case "github":
      return <IconGitHub />
    case "instagram":
      return <IconInstagram />
    case "external":
      return <IconExternal />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Icon
