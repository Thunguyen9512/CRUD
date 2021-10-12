import { StoreProvider as Provider } from 'easy-peasy';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import store from 'Store';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "./Styles/index.scss";


const Routers = React.lazy(() => import("./Routers"));

function generateUI() {
  const root = document.createElement("div");
  root.id = "approot";
  document.body.append(root);

  render(
    <Provider store={store}>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routers />
      </Suspense>
    </Provider>,
    root
  );
}

function createMagic() {
  generateUI();
}

// this is a magic
createMagic();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
