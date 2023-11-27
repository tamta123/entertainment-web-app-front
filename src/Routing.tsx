import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={"loading..."}>
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          path="/sighUp"
          element={
            <Suspense fallback={"loading..."}>
              <SignUp />
            </Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading..."}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={"loading..."}>
              <Movies />
            </Suspense>
          }
        ></Route>
        <Route
          path="/tvSeries"
          element={
            <Suspense fallback={"loading..."}>
              <TvSeries />
            </Suspense>
          }
        ></Route>
        <Route
          path="/bookmarks"
          element={
            <Suspense fallback={"loading..."}>
              <Bookmarks />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Routing;
