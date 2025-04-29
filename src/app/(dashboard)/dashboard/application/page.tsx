"use client";

import { Suspense } from "react";
import Application from "@/components/Application";
import ApplicationSkeleton from "@/components/ApplicationSkeleton";
import SubmittedApplication from "@/components/SubmittedApplication";
import { useDashboardCtx } from "@/lib/dashboard-ctx";
import { Icon } from "@iconify/react";

export default function ApplicationPage() {
    const {applicationStatus} = useDashboardCtx();

    return (
        <div className="flex min-h-screen min-w-screen bg-gradient-to-b from-orange-200 to-yellow-100">
            <>
                {applicationStatus?.status &&
                    <SubmittedApplication />}
                {(applicationStatus === null || applicationStatus.status === "unsubmitted") &&
                    <Suspense fallback={<ApplicationSkeleton />}>
                        <Application />
                    </Suspense>
                }
            </>
        </div>
    );
}