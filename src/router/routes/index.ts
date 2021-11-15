import {RouteRecordRaw} from "vue-router";
import rootRoutes from "@/router/routes/root-routes";
import personalRoutes from "@/router/routes/personal-routes";
import projectRoutes from "@/router/routes/project-routes";

const routes: Array<RouteRecordRaw> = [
    ...rootRoutes,
    ...personalRoutes,
    ...projectRoutes
];

export default routes
