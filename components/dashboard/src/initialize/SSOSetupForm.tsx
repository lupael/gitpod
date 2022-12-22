/**
 * Copyright (c) 2022 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { FunctionComponent, useCallback, useReducer, useState } from "react";

// TODO: Use a type already in gitpod-protocol
type SSOConfig = {
    clientID: string;
    clientSecret: string;
    redirectURL: string;
};

type SSOSetupFormProps = {
    token: string;
};

export const SSOSetupForm: FunctionComponent<SSOSetupFormProps> = ({ token }) => {
    const [saving, setSaving] = useState(false);
    const [config, dispatch] = useReducer(
        (state: SSOConfig, action: Partial<SSOConfig>) => ({
            ...state,
            ...action,
        }),
        {
            clientID: "",
            clientSecret: "",
            redirectURL: "",
        },
    );

    const handleSave = useCallback(
        async (e) => {
            e.preventDefault();
            setSaving(true);

            console.log("config", config);
            console.log("token", token);
            await sleep(2000);

            setSaving(false);
        },
        [config, token],
    );

    return (
        <div>
            <form onSubmit={handleSave}>
                <TextInput
                    label="Client ID"
                    value={config.clientID}
                    id="client_id"
                    disabled={saving}
                    onChange={(val) => dispatch({ clientID: val })}
                />
                <TextInput
                    label="Client Secret"
                    value={config.clientSecret}
                    id="client_secret"
                    disabled={saving}
                    onChange={(val) => dispatch({ clientSecret: val })}
                />
                <TextInput
                    label="Redirect URL"
                    value={config.redirectURL}
                    id="redirect_url"
                    disabled={saving}
                    onChange={(val) => dispatch({ redirectURL: val })}
                />

                <div className="mt-4">
                    <button disabled={saving}>Save</button>
                </div>
            </form>
        </div>
    );
};

type TextInputProps = {
    label: string;
    value: string;
    // TODO: have this optional and use an autogen id hook
    // element id attribute value for input
    id: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (newValue: string) => void;
};

const TextInput: FunctionComponent<TextInputProps> = ({
    label,
    value,
    id,
    placeholder,
    disabled = false,
    onChange,
}) => {
    const handleChange = useCallback(
        (e) => {
            onChange(e.target.value);
        },
        [onChange],
    );

    return (
        <div className="mt-4">
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-400" htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                className="max-w-lg"
                value={value}
                onChange={handleChange}
                type="text"
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
};

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
