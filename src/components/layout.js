import React from "react"
import Header from "../components/header"
import "./layout.css"
import MetaData from "../components/metaData"

export default ({ children }) => 
<div>
    <MetaData />
    <Header />
    <div id="main-content">
        {children}
    </div>
</div>
