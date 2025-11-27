import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/Home Page/HomePage";
import AddStudents from "../Pages/Add students/AddStudents";
import ViewStudents from "../Pages/View students/ViewStudents";
import ContactPage from "../Pages/Contact page/ContactPage";
import ErrorPage from "../Pages/Error page/ErrorPage";
import App from "../App";
import { fetchAllData, getSingleDataApi } from "../Service/allApi";
import Edit from "../Pages/EditPage/Edit";

export const routes=createBrowserRouter([
    {
         path: "/",
                Component: App,
                 children: [
                            {
                                index: true,
                                Component: HomePage,
                                loader: async () => {
                                    return await fetchAllData()
                                }
                            },
                            {
                                path: "/add",
                                Component: AddStudents
                            },
                            {
                                path: "/view",
                                Component: ViewStudents,
                                loader: async () => {
                                    return await fetchAllData()
                                }
                            },
                            , {
                                path: "/edit/:id",
                                Component: Edit,
                                loader: async({ params }) => {
                                    return await getSingleDataApi(params.id )
                                }
                            },
                            {
                                path: "/contact",
                                Component: ContactPage
                            },
                            {
                                path: "/*",
                                Component: ErrorPage
                            },
                        ]
    }
])