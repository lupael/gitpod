/**
 * Copyright (c) 2022 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import Alert from "../components/Alert";
import gitpodIcon from "../icons/gitpod.svg";
import { SSOSetupForm } from "./SSOSetupForm";

const InitializePage = () => {
    const { search } = useLocation();

    const token = useMemo(() => {
        const params = new URLSearchParams(search);
        return params.get("token");
    }, [search]);

    useEffect(() => {
        console.log("token: ", token);
        // validate token, or get existing config w/ it?
    }, [token]);

    // TODO: Add a loading state if we end up exchanging/validating token up front

    return (
        <div className="flex flex-grow flex w-full w-screen h-screen items-center justify-center">
            <div className="px-10 py-10">
                <div className="mx-auto pb-8">
                    <img src={gitpodIcon} className="h-14 mx-auto block dark:hidden" alt="Gitpod's logo" />
                    <img src={gitpodIcon} className="h-14 hidden mx-auto dark:block" alt="Gitpod dark theme logo" />
                </div>

                <h1 className="text-3xl">Setup SSO</h1>

                {token ? <SSOSetupForm token={token} /> : <Alert>Invalid Token</Alert>}
            </div>
        </div>
    );
};

export default InitializePage;
