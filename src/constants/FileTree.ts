import rootRoutes from "@/router/routes/root-routes";
import personalRoutes from "@/router/routes/personal-routes";
import projectRoutes from "@/router/routes/project-routes";
import {RouteRecordRaw} from "vue-router";

export interface FileTreeNode {
    label: string;
    directories: FileTreeNode[];
    files: RouteRecordRaw[];
}

export const tree: FileTreeNode = {
    label: '',
    directories: [
        {
            label: 'projects',
            directories: [],
            files: projectRoutes
        },
        {
            label: 'kenny',
            directories: [],
            files: personalRoutes
        }
    ],
    files: rootRoutes
};

