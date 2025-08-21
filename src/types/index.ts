import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface IResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data: T
};

export interface ISidebarItems {
    title: string,
    icon: LucideIcon,
    isActive?: boolean,
    items: {
        title: string,
        url: string,
        component: ComponentType
    }[],
};

export type TRole = "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";

type ZodIssue = {
    code: string;
    expected: string;
    received: string;
    path: string[];
    message: string;
};

type ErrorSource = {
    path: string;
    message: string;
};

export interface IErrorResponse {
    success: boolean;
    message: string;
    errorSources?: ErrorSource[];
    err?: {
        issues: ZodIssue[];
        name: string;
    };
    stack?: string;
}