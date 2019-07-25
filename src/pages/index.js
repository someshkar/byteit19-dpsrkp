import React from "react"

import Layout from "../components/Layout"
import Landing from "../components/Index/Landing"

import Links from "../components/Index/Links"
import Academics from "../components/Index/Academics"
import Achievements from "../components/Index/Achievements"
import IntlAdm from "../components/Index/IntlAdm"
import News from "../components/Index/News"

export default () => {
  return (
    <Layout>
      <Landing />
      <Links />
      <IntlAdm />
      <Achievements />
      <Academics />
      <News />
    </Layout>
  )
}
