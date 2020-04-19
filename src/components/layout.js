import React from "react"
import Header from "../components/header"
import "./layout.css"

export default ({ children }) => 
<div>
    <Header />
    <div id="main-content">
        {children}
    </div>
</div>
