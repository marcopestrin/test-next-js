import React, { useEffect } from "react";
import Router from 'next/router'
import { Typography } from "@material-ui/core";

export default function Home() {
  useEffect(() => {
    Router.push("/list")
  }, [])

  return <Typography>Redirect to "/list"</Typography>
}
