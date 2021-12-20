import React, { Suspense, useState } from "react";

import "./app.scss";

const ListView = React.lazy(() => import("./components/ListView"));

const App = () => {
    return <div>THIS IS A REACT WEBPACK TEMPLATE</div>;
};

export default App;
